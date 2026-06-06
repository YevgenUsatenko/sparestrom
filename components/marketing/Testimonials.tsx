const EXAMPLES = [
  {
    amount: 486,
    body: `„Einfamilienhaus mit 4.500 kWh Verbrauch. Vom Landesversorger-Standardtarif zum günstigsten Anbieter — ohne Aufwand, ohne Stromunterbrechung."`,
    label: "Einfamilienhaus",
    detail: "4.500 kWh · Standardtarif → Bestpreis",
  },
  {
    amount: 312,
    body: `„2-Zimmer-Wohnung mit 2.200 kWh. Der alte Tarif war nie der günstigste — nur der bequemste. Ein Wechsel dauert unter 10 Minuten."`,
    label: "Stadtwohnung",
    detail: "2.200 kWh · Bestandstarif → Bestpreis",
  },
  {
    amount: 728,
    body: `„Familie mit 3 Kindern, 8.000 kWh Verbrauch. Je höher der Verbrauch, desto mehr lohnt sich der Wechsel. Hochgerechnet auf 10 Jahre: über € 7.000."`,
    label: "Großer Haushalt",
    detail: "8.000 kWh · Standardtarif → Bestpreis",
  },
];

export default function Testimonials() {
  return (
    <section
      className="overflow-hidden border-t border-sp-border bg-sp-bg-2 py-[clamp(80px,10vh,140px)]"
      id="bewertungen"
    >
      <div className="relative z-2 mx-auto max-w-[var(--sp-container)] px-[var(--sp-gutter)]">
        <div className="reveal mb-14">
          <span className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
            <span className="inline-block h-px w-6 bg-sp-text-muted" />
            <span className="text-sp-accent">05</span> / Rechenbeispiele
          </span>
          <h2 className="mt-4 max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(32px,4.5vw,52px)] font-medium leading-none tracking-[-0.03em]">
            So viel sparst du{" "}
            <span className="italic text-sp-accent">wirklich.</span>
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] leading-relaxed text-sp-text-muted">
            Beispielrechnungen basierend auf aktuellen Tarifen im österreichischen Strommarkt.
          </p>
        </div>

        <div className="reveal grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
          {EXAMPLES.map((t) => (
            <div
              key={t.label}
              className="flex flex-col rounded-[14px] border border-sp-border bg-sp-surface p-7"
            >
              <div className="mb-4 font-[family-name:var(--font-display)] text-[32px] font-medium leading-none tracking-[-0.02em] text-sp-accent">
                + € {t.amount}
                <span className="mt-1 block font-[family-name:var(--font-mono-family)] text-xs font-normal uppercase tracking-[0.1em] text-sp-text-muted">
                  ERSPARNIS / JAHR
                </span>
              </div>
              <p className="mb-6 flex-1 text-[15px] leading-relaxed">
                {t.body}
              </p>
              <div className="border-t border-dashed border-sp-border pt-4">
                <div className="font-[family-name:var(--font-mono-family)] text-xs leading-tight">
                  <div className="font-medium text-sp-text">{t.label}</div>
                  <div className="text-sp-text-muted">{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
