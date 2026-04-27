const MYTHS = [
  {
    question: `„Gibt es beim Wechsel einen Stromausfall?"`,
    answer: (
      <>
        <strong className="font-medium text-sp-text">Nein. Unmöglich.</strong>{" "}
        Dein Strom kommt immer aus demselben Netz des Netzbetreibers. Der
        Anbieterwechsel passiert rein auf dem Papier. Du merkst exakt{" "}
        <em>nichts</em> außer einer niedrigeren Rechnung.
      </>
    ),
  },
  {
    question: `„Muss ich meinen alten Vertrag selbst kündigen?"`,
    answer: (
      <>
        <strong className="font-medium text-sp-text">
          Nein. Wir erledigen das komplett.
        </strong>{" "}
        Du unterschreibst einmal digital die Vollmacht, wir kündigen
        fristgerecht und wickeln den Wechsel mit dem neuen Anbieter ab. Du musst
        niemanden anrufen.
      </>
    ),
  },
  {
    question: `„Was wenn ich es mir anders überlege?"`,
    answer: (
      <>
        <strong className="font-medium text-sp-text">
          14 Tage Widerrufsrecht.
        </strong>{" "}
        Gesetzlich garantiert nach dem österreichischen Fern- und
        Auswärtsgeschäfte-Gesetz. Ein Klick, eine E-Mail – und der Wechsel ist
        ohne Kosten rückgängig.
      </>
    ),
  },
  {
    question: `„Was kostet mich euer Service?"`,
    answer: (
      <>
        <strong className="font-medium text-sp-text">
          Für dich: 0&nbsp;€. Immer.
        </strong>{" "}
        Wir bekommen eine Provision vom neuen Anbieter – aber nur, wenn der
        Tarif für dich wirklich besser ist. Unsere Vergleichslogik ist
        E-Control-konform und unabhängig.
      </>
    ),
  },
];

export default function Myths() {
  return (
    <section className="border-t border-sp-border py-[clamp(80px,10vh,140px)]" id="mythen">
      <div className="relative z-2 mx-auto max-w-[var(--sp-container)] px-[var(--sp-gutter)]">
        <div className="reveal mb-14 max-w-[720px]">
          <span className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
            <span className="inline-block h-px w-6 bg-sp-text-muted" />
            <span className="text-sp-accent">03</span> / Einwände
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] font-medium leading-none tracking-[-0.03em]">
            Was{" "}
            <span className="text-sp-text-muted line-through decoration-sp-at-red decoration-[3px]">
              viele glauben
            </span>{" "}
            einfach nicht stimmt.
          </h2>
        </div>

        <div className="reveal grid grid-cols-2 gap-4 max-[780px]:grid-cols-1">
          {MYTHS.map((myth, i) => (
            <div
              key={i}
              className="rounded-[14px] border border-sp-border bg-sp-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-sp-border-strong"
            >
              <div className="mb-4 flex items-start gap-3.5">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[rgba(255,92,92,0.1)] font-[family-name:var(--font-mono-family)] text-sm font-semibold text-sp-danger">
                  ?
                </div>
                <div className="text-base font-medium leading-snug">
                  {myth.question}
                </div>
              </div>
              <div className="flex items-start gap-3.5 border-t border-dashed border-sp-border pt-4">
                <div className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-sp-accent-soft font-[family-name:var(--font-mono-family)] text-sm font-semibold text-sp-accent">
                  ✓
                </div>
                <div className="text-sm leading-relaxed text-sp-text-muted">
                  {myth.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
