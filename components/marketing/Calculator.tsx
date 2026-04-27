"use client";

import { useCallback, useEffect, useState } from "react";

const PRESETS = [
  { label: "1 Person · 1.500", value: 1500 },
  { label: "2–3 Personen · 3.500", value: 3500 },
  { label: "Familie · 4.500", value: 4500 },
  { label: "Haus · 8.000", value: 8000 },
];

function formatEuro(n: number) {
  return Math.round(n).toLocaleString("de-AT");
}

function BoltIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
    >
      <path d="M7.05 3.05l5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6 1.4-1.4z" />
    </svg>
  );
}

export default function Calculator() {
  const [plz, setPlz] = useState("5020");
  const [verbrauch, setVerbrauch] = useState(3500);
  const [preis, setPreis] = useState(29.5);
  const [activePreset, setActivePreset] = useState(3500);

  const calculate = useCallback(() => {
    const v = Math.max(500, verbrauch || 0);
    const p = Math.max(10, preis || 0);
    const newPrice = 15.6;
    const currAnnual = (v * p) / 100;
    const nextAnnual = (v * newPrice) / 100;
    const saving = Math.max(0, currAnnual - nextAnnual);
    const pct = Math.min(100, (nextAnnual / currAnnual) * 100);

    return { saving, currAnnual, nextAnnual, pct };
  }, [verbrauch, preis]);

  const { saving, currAnnual, nextAnnual, pct } = calculate();

  return (
    <section className="relative py-[clamp(80px,10vh,140px)]" id="rechner">
      <div className="relative z-2 mx-auto max-w-[var(--sp-container)] px-[var(--sp-gutter)]">
        <div className="reveal mb-14 max-w-[720px]">
          <span className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
            <span className="inline-block h-px w-6 bg-sp-text-muted" />
            <span className="text-sp-accent">01</span> / Vergleichsrechner
          </span>
          <h2 className="mt-4 mb-5 font-[family-name:var(--font-display)] text-[clamp(36px,5vw,64px)] font-medium leading-none tracking-[-0.03em]">
            Was sparst du{" "}
            <span className="italic text-sp-accent">wirklich?</span>
          </h2>
          <p className="max-w-[540px] text-lg leading-relaxed text-sp-text-muted">
            Drei Angaben. Zwölf Sekunden. Volle Transparenz. Keine
            E-Mail-Abfrage, kein Popup, kein Schmarrn.
          </p>
        </div>

        <div className="reveal relative overflow-hidden rounded-[20px] border border-sp-border bg-[linear-gradient(180deg,var(--sp-surface)_0%,var(--sp-bg-2)_100%)] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]">
          {/* Top accent line */}
          <div className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,transparent_10%,var(--sp-accent)_50%,transparent_90%)] opacity-50" />

          <div className="grid min-h-[520px] grid-cols-[1.1fr_0.9fr] max-[900px]:grid-cols-1">
            {/* Inputs */}
            <div className="border-r border-sp-border p-11 max-[900px]:border-b max-[900px]:border-r-0 max-[900px]:p-8">
              <div className="mb-6 font-[family-name:var(--font-mono-family)] text-[11px] uppercase tracking-[0.15em] text-sp-text-subtle">
                <span className="text-sp-accent">◉</span> DEINE ANGABEN
              </div>

              {/* PLZ */}
              <div className="mb-6">
                <label
                  htmlFor="plz"
                  className="mb-2.5 flex items-center justify-between text-[13px] font-medium"
                >
                  Postleitzahl
                  <span className="font-[family-name:var(--font-mono-family)] text-[11px] font-normal text-sp-text-subtle">
                    z.&nbsp;B. 5020, 1010, 8010
                  </span>
                </label>
                <div className="flex items-center rounded-[10px] border border-sp-border-strong bg-sp-bg px-3.5 transition-all duration-200 focus-within:border-sp-accent focus-within:shadow-[0_0_0_3px_var(--sp-accent-soft)]">
                  <span className="mr-2.5 h-2.5 w-3.5 rounded-[2px] bg-[linear-gradient(to_bottom,var(--sp-at-red)_0_33%,#fff_33%_66%,var(--sp-at-red)_66%_100%)]" />
                  <input
                    type="text"
                    id="plz"
                    inputMode="numeric"
                    maxLength={4}
                    placeholder="5020"
                    value={plz}
                    onChange={(e) => setPlz(e.target.value)}
                    className="flex-1 border-none bg-transparent py-3.5 font-[family-name:var(--font-mono-family)] text-[15px] text-sp-text outline-none placeholder:text-sp-text-subtle"
                  />
                </div>
              </div>

              {/* Verbrauch */}
              <div className="mb-6">
                <label
                  htmlFor="verbrauch"
                  className="mb-2.5 flex items-center justify-between text-[13px] font-medium"
                >
                  Jahresverbrauch
                  <span className="font-[family-name:var(--font-mono-family)] text-[11px] font-normal text-sp-text-subtle">
                    Findest du auf deiner letzten Stromrechnung
                  </span>
                </label>
                <div className="flex items-center rounded-[10px] border border-sp-border-strong bg-sp-bg px-3.5 transition-all duration-200 focus-within:border-sp-accent focus-within:shadow-[0_0_0_3px_var(--sp-accent-soft)]">
                  <input
                    type="number"
                    id="verbrauch"
                    placeholder="3500"
                    value={verbrauch}
                    min={500}
                    max={25000}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      setVerbrauch(val);
                      setActivePreset(val);
                    }}
                    className="flex-1 border-none bg-transparent py-3.5 font-[family-name:var(--font-mono-family)] text-[15px] text-sp-text outline-none placeholder:text-sp-text-subtle"
                  />
                  <span className="ml-1 border-l border-sp-border pl-2.5 font-[family-name:var(--font-mono-family)] text-[13px] text-sp-text-muted">
                    kWh / Jahr
                  </span>
                </div>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {PRESETS.map((p) => (
                    <button
                      key={p.value}
                      type="button"
                      onClick={() => {
                        setVerbrauch(p.value);
                        setActivePreset(p.value);
                      }}
                      className={`rounded-full border px-3 py-[7px] font-[family-name:var(--font-mono-family)] text-xs transition-all duration-200 ${
                        activePreset === p.value
                          ? "border-sp-accent bg-sp-accent-soft text-sp-accent"
                          : "border-sp-border-strong bg-sp-bg text-sp-text-muted hover:border-sp-accent hover:text-sp-accent"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preis */}
              <div className="mb-6">
                <label
                  htmlFor="preis"
                  className="mb-2.5 flex items-center justify-between text-[13px] font-medium"
                >
                  Dein aktueller Strompreis
                  <span className="font-[family-name:var(--font-mono-family)] text-[11px] font-normal text-sp-text-subtle">
                    Brutto, ct pro kWh
                  </span>
                </label>
                <div className="flex items-center rounded-[10px] border border-sp-border-strong bg-sp-bg px-3.5 transition-all duration-200 focus-within:border-sp-accent focus-within:shadow-[0_0_0_3px_var(--sp-accent-soft)]">
                  <input
                    type="number"
                    id="preis"
                    step={0.1}
                    placeholder="29.5"
                    value={preis}
                    min={10}
                    max={60}
                    onChange={(e) => setPreis(parseFloat(e.target.value))}
                    className="flex-1 border-none bg-transparent py-3.5 font-[family-name:var(--font-mono-family)] text-[15px] text-sp-text outline-none placeholder:text-sp-text-subtle"
                  />
                  <span className="ml-1 border-l border-sp-border pl-2.5 font-[family-name:var(--font-mono-family)] text-[13px] text-sp-text-muted">
                    ct / kWh
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-2 flex w-full items-center justify-center gap-2.5 rounded-[10px] bg-sp-accent px-4 py-4 text-[15px] font-semibold text-black shadow-[0_8px_24px_-8px_var(--sp-accent-glow)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_16px_40px_-12px_var(--sp-accent-glow)]"
              >
                <BoltIcon />
                Meine Ersparnis berechnen
              </button>
            </div>

            {/* Results */}
            <div className="relative flex flex-col bg-[radial-gradient(ellipse_at_top_right,var(--sp-accent-soft)_0%,transparent_60%)] p-11 max-[900px]:p-8">
              <div className="mb-4 flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[11px] uppercase tracking-[0.15em] text-sp-text-muted">
                <span className="text-sp-accent">◉</span> DEIN ERGEBNIS
              </div>

              <div className="mb-1 flex items-baseline gap-1.5 font-[family-name:var(--font-display)] text-[clamp(60px,9vw,104px)] font-medium leading-[0.9] tracking-[-0.035em]">
                <span className="text-[0.55em] font-normal text-sp-accent">
                  €
                </span>
                <span>{formatEuro(saving)}</span>
              </div>
              <p className="mb-8 text-[15px] text-sp-text-muted">
                Ersparnis im{" "}
                <span className="font-medium text-sp-text">ersten Jahr</span> ·
                Hochgerechnet auf 10&nbsp;Jahre:{" "}
                <span className="font-medium text-sp-text">
                  € {formatEuro(saving * 10)}
                </span>
              </p>

              {/* Bars */}
              <div className="mb-7">
                <div className="mb-3.5">
                  <div className="mb-1.5 flex justify-between font-[family-name:var(--font-mono-family)] text-xs text-sp-text-muted">
                    <span>Dein aktueller Tarif</span>
                    <span className="font-medium text-sp-text">
                      € {formatEuro(currAnnual)}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-sp-border">
                    <div
                      className="h-full rounded-full bg-sp-text-muted transition-[width] duration-800"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-1.5 flex justify-between font-[family-name:var(--font-mono-family)] text-xs text-sp-text-muted">
                    <span>Bester Tarif via sparestrom.at</span>
                    <span className="font-medium text-sp-accent">
                      € {formatEuro(nextAnnual)}
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-sp-border">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,var(--sp-accent-dim),var(--sp-accent))] shadow-[0_0_12px_var(--sp-accent-glow)] transition-[width] duration-800"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Provider card */}
              <div className="mb-5 flex items-center justify-between rounded-xl border border-sp-border bg-sp-bg p-4">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-[linear-gradient(135deg,var(--sp-accent),var(--sp-accent-dim))] font-[family-name:var(--font-display)] text-sm font-bold text-black">
                    aW
                  </div>
                  <div>
                    <div className="text-sm font-medium">aWATTar HOURLY</div>
                    <div className="font-[family-name:var(--font-mono-family)] text-xs text-sp-text-muted">
                      15,6 ct/kWh · monatlich kündbar
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 font-[family-name:var(--font-mono-family)] text-xs text-sp-accent">
                  ★ 4,8
                </div>
              </div>

              <a
                href="#"
                className="group flex w-full items-center justify-center gap-2.5 rounded-lg bg-sp-accent px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_var(--sp-accent),0_8px_32px_-8px_var(--sp-accent-glow)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_0_1px_var(--sp-accent),0_16px_48px_-12px_var(--sp-accent-glow)]"
              >
                Jetzt in 2 Klicks wechseln
                <ChevronIcon />
              </a>

              <div className="mt-auto border-t border-dashed border-sp-border pt-5 font-[family-name:var(--font-mono-family)] text-[10px] tracking-[0.05em] text-sp-text-subtle">
                UNVERBINDLICH · KEINE E-MAIL NÖTIG · STROM LÄUFT DURCHGEHEND
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
