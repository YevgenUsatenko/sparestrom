import { NextRequest, NextResponse } from "next/server";

interface LeadPayload {
  plz: string;
  verbrauch: number;
  preis: number;
  saving: number;
  telefon: string;
  email: string;
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }

  const { plz, verbrauch, preis, saving, telefon, email } = body;

  if (!telefon && !email) {
    return NextResponse.json(
      { error: "Bitte Telefonnummer oder E-Mail angeben." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL || "usatenko@beloom.at";

  if (apiKey) {
    const timestamp = new Date().toLocaleString("de-AT", {
      timeZone: "Europe/Vienna",
    });

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
            <tr><td style="padding:6px 12px;font-weight:bold;">Telefon</td><td style="padding:6px 12px;">${telefon || "–"}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">E-Mail</td><td style="padding:6px 12px;">${email || "–"}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">PLZ</td><td style="padding:6px 12px;">${plz}</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Verbrauch</td><td style="padding:6px 12px;">${verbrauch} kWh/Jahr</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Aktueller Preis</td><td style="padding:6px 12px;">${preis} ct/kWh</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Errechnete Ersparnis</td><td style="padding:6px 12px;color:#16a34a;font-weight:bold;">€ ${saving} / Jahr</td></tr>
            <tr><td style="padding:6px 12px;font-weight:bold;">Zeitpunkt</td><td style="padding:6px 12px;">${timestamp}</td></tr>
          </table>
        `,
      }),
    });
  }

  return NextResponse.json({ success: true });
}
