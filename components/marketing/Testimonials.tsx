const TESTIMONIALS = [
  {
    amount: 612,
    body: `„Ich dachte, 10 Minuten ist ein Marketing-Spruch. War's nicht. Um 20:04 Uhr begonnen, um 20:13 Uhr fertig. Drei Monate später läuft alles normal, nur meine Rechnung ist halb so hoch."`,
    initials: "MS",
    name: "Markus S.",
    location: "Salzburg · Einfamilienhaus",
    time: "VOR 2 WO.",
  },
  {
    amount: 389,
    body: `„Skeptisch war ich wegen den Vergleichsportalen, die einem immer die teureren Tarife andrehen. sparestrom.at hat mir offen gesagt, dass ich bei meinem Bestandstarif bleiben soll, weil der Bonus läuft. Danach gewechselt. Vertrauenswürdig."`,
    initials: "AK",
    name: "Andrea K.",
    location: "Wien 1030 · 2-Zimmer",
    time: "VOR 1 MO.",
  },
  {
    amount: 728,
    body: `„Ich hab 14 Jahre lang beim selben Anbieter gezahlt, weil ich dachte: Stromwechsel = Aufwand. Das war das teuerste Missverständnis meines Lebens. Familie mit 3 Kindern, Haus – über 10 Jahre hätte ich ein Auto gespart."`,
    initials: "RH",
    name: "Robert H.",
    location: "Linz · Haus mit 4 Pers.",
    time: "VOR 3 TG.",
  },
];

export default function Testimonials() {
  return (
    <section
      className="overflow-hidden border-t border-sp-border bg-sp-bg-2 py-[clamp(80px,10vh,140px)]"
      id="bewertungen"
    >
      <div className="relative z-2 mx-auto max-w-[var(--sp-container)] px-[var(--sp-gutter)]">
        <div className="reveal mb-14 flex flex-wrap items-end justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
              <span className="inline-block h-px w-6 bg-sp-text-muted" />
              <span className="text-sp-accent">04</span> / Echte Stimmen
            </span>
            <h2 className="mt-4 max-w-[600px] font-[family-name:var(--font-display)] text-[clamp(32px,4.5vw,52px)] font-medium leading-none tracking-[-0.03em]">
              Österreicher, die{" "}
              <span className="italic text-sp-accent">aufgehört haben</span>,
              zu viel zu zahlen.
            </h2>
          </div>
          <div className="flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[13px] text-sp-text-muted">
            <span className="text-base tracking-wider text-sp-accent">
              ★★★★★
            </span>
            <span>4,9 / 5 · 2.341 Bewertungen</span>
          </div>
        </div>

        <div className="reveal grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.initials}
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
              <div className="flex items-center justify-between border-t border-dashed border-sp-border pt-4">
                <div className="flex items-center gap-2.5">
                  <div className="grid h-8 w-8 place-items-center rounded-full border border-sp-border-strong bg-[linear-gradient(135deg,var(--sp-surface-2),var(--sp-bg))] text-xs font-semibold">
                    {t.initials}
                  </div>
                  <div className="font-[family-name:var(--font-mono-family)] text-xs leading-tight">
                    <div className="text-sp-text">{t.name}</div>
                    <div className="text-sp-text-muted">{t.location}</div>
                  </div>
                </div>
                <div className="font-[family-name:var(--font-mono-family)] text-[10px] tracking-[0.1em] text-sp-text-subtle">
                  {t.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
