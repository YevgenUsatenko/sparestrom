const STEPS = [
  {
    number: "01",
    title: "Vergleichen.",
    body: "PLZ, Verbrauch, aktueller Preis – in das Feld oben. Du siehst sofort, was du sparen kannst. Kein Account, keine E-Mail, nichts.",
    meta: "◉ ~ 12 SEKUNDEN",
  },
  {
    number: "02",
    title: "Tarif wählen.",
    body: "Du siehst die Top-Tarife mit allen Details: Preis, Kündigungsfrist, Bindung, Ökostrom-Anteil. Keine versteckten Klauseln.",
    meta: "◉ 1 KLICK",
  },
  {
    number: "03",
    title: "Wir wechseln.",
    body: "Wir kündigen deinen alten Vertrag und wickeln den neuen ab. Dein Strom läuft ohne Unterbrechung weiter. Keine Zeile Papierkram für dich.",
    meta: "◉ 0 AUFWAND FÜR DICH",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-t border-sp-border bg-sp-bg-2 py-[clamp(80px,10vh,140px)]" id="wie">
      <div className="relative z-2 mx-auto max-w-[var(--sp-container)] px-[var(--sp-gutter)]">
        <div className="reveal mb-[72px] grid grid-cols-2 items-end gap-12 max-[780px]:grid-cols-1">
          <div>
            <span className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
              <span className="inline-block h-px w-6 bg-sp-text-muted" />
              <span className="text-sp-accent">02</span> / So einfach geht&apos;s
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] font-medium leading-none tracking-[-0.03em]">
              Drei Schritte.
              <br />
              <span className="italic text-sp-accent">Keine Ausreden.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-sp-text-muted">
            Wir haben den lästigsten Teil am Stromwechsel entfernt: den Wechsel
            selbst. Du klickst, wir erledigen. So läuft&apos;s ab.
          </p>
        </div>

        <div className="reveal grid grid-cols-3 gap-[2px] overflow-hidden rounded-2xl border border-sp-border bg-sp-border max-[900px]:grid-cols-1">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="group bg-sp-bg-2 p-9 transition-colors duration-300 hover:bg-sp-surface"
            >
              <div className="mb-7 font-[family-name:var(--font-display)] text-[72px] font-normal leading-none tracking-[-0.04em] text-sp-text-subtle transition-colors duration-300 group-hover:text-sp-accent">
                {step.number}
              </div>
              <h3 className="mb-3 font-[family-name:var(--font-display)] text-[22px] font-medium tracking-[-0.015em]">
                {step.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed text-sp-text-muted">
                {step.body}
              </p>
              <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono-family)] text-[11px] uppercase tracking-[0.1em] text-sp-accent">
                {step.meta}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
