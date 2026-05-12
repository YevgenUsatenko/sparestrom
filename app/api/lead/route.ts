import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { leads } from "@/lib/db/schema";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60_000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 500);
}

function isValidPhone(phone: string): boolean {
  return /^[+\d\s\-()]{6,20}$/.test(phone);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPlz(plz: string): boolean {
  return /^\d{4}$/.test(plz);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte warte kurz." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const plz = sanitize(String(body.plz || ""));
  const verbrauch = Number(body.verbrauch) || 0;
  const preis = Number(body.preis) || 0;
  const saving = Number(body.saving) || 0;
  const telefon = sanitize(String(body.telefon || ""));
  const email = sanitize(String(body.email || ""));
  const name = sanitize(String(body.name || ""));

  if (!telefon && !email) {
    return NextResponse.json(
      { error: "Bitte Telefonnummer oder E-Mail angeben." },
      { status: 400 }
    );
  }

  if (telefon && !isValidPhone(telefon)) {
    return NextResponse.json(
      { error: "Bitte eine gültige Telefonnummer angeben." },
      { status: 400 }
    );
  }

  if (email && !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Bitte eine gültige E-Mail-Adresse angeben." },
      { status: 400 }
    );
  }

  if (!isValidPlz(plz)) {
    return NextResponse.json(
      { error: "Bitte eine gültige 4-stellige PLZ angeben." },
      { status: 400 }
    );
  }

  if (verbrauch < 500 || verbrauch > 50000) {
    return NextResponse.json(
      { error: "Verbrauch muss zwischen 500 und 50.000 kWh liegen." },
      { status: 400 }
    );
  }

  // Save to database
  const dbUrl = process.env.DATABASE_URL;
  if (dbUrl) {
    try {
      await db.insert(leads).values({
        plz,
        verbrauch,
        preis,
        saving: Math.round(saving),
        telefon: telefon || null,
        email: email || null,
        name: name || null,
        ip,
      });
    } catch {
      // DB save failed — continue with email notification
    }
  }

  // Send email notification
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || "usatenko@beloom.at";

  if (apiKey) {
    const timestamp = new Date().toLocaleString("de-AT", {
      timeZone: "Europe/Vienna",
    });

    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "sparestrom.at <leads@sparestrom.at>",
          to: [notifyEmail],
          subject: `Neue Anfrage: ${telefon || email} — €${saving} Ersparnis`,
          html: `
            <h2>Neue Stromvergleich-Anfrage</h2>
            <table style="border-collapse:collapse;font-family:sans-serif;">
              ${name ? `<tr><td style="padding:8px 16px;font-weight:bold;background:#f5f5f5;">Name</td><td style="padding:8px 16px;">${name}</td></tr>` : ""}
              <tr><td style="padding:8px 16px;font-weight:bold;background:#f5f5f5;">Telefon</td><td style="padding:8px 16px;">${telefon || "–"}</td></tr>
              <tr><td style="padding:8px 16px;font-weight:bold;background:#f5f5f5;">E-Mail</td><td style="padding:8px 16px;">${email || "–"}</td></tr>
              <tr><td style="padding:8px 16px;font-weight:bold;background:#f5f5f5;">PLZ</td><td style="padding:8px 16px;">${plz}</td></tr>
              <tr><td style="padding:8px 16px;font-weight:bold;background:#f5f5f5;">Verbrauch</td><td style="padding:8px 16px;">${verbrauch.toLocaleString("de-AT")} kWh/Jahr</td></tr>
              <tr><td style="padding:8px 16px;font-weight:bold;background:#f5f5f5;">Aktueller Preis</td><td style="padding:8px 16px;">${preis} ct/kWh</td></tr>
              <tr><td style="padding:8px 16px;font-weight:bold;background:#f5f5f5;">Errechnete Ersparnis</td><td style="padding:8px 16px;color:#16a34a;font-weight:bold;">€ ${saving} / Jahr</td></tr>
              <tr><td style="padding:8px 16px;font-weight:bold;background:#f5f5f5;">Zeitpunkt</td><td style="padding:8px 16px;">${timestamp}</td></tr>
            </table>
          `,
        }),
      });
    } catch {
      // Mail-Fehler loggen, aber Lead trotzdem als Erfolg zurückmelden
    }
  }

  return NextResponse.json({ success: true });
}
