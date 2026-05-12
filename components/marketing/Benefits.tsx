function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
    </svg>
  );
}

function EuroIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h12M4 14h12M17.5 7.5A5 5 0 0 0 12 4c-3.59 0-6 2.69-6 6v4c0 3.31 2.41 6 6 6a5 5 0 0 0 5.5-3.5" />
    </svg>
  );
}

const BENEFITS = [
  {
    icon: <ShieldIcon />,
    title: "100% unabhängig",
    body: "Kein Anbieter bezahlt für bessere Platzierung. Wir zeigen dir immer den günstigsten Tarif — E-Control-konform.",
  },
  {
    icon: <ClockIcon />,
    title: "10 Minuten — fertig",
    body: "Drei Eingaben, ein Klick. Wir erledigen den Rest: Kündigung, Vertrag, Umstellung. Du merkst nur die niedrigere Rechnung.",
  },
  {
    icon: <ZapIcon />,
    title: "Kein Stromausfall",
    body: "Physisch unmöglich. Dein Strom kommt immer aus demselben Netz. Nur der Name auf der Rechnung ändert sich.",
  },
  {
    icon: <EuroIcon />,
    title: "0 € Kosten für dich",
    body: "Unser Service ist und bleibt kostenlos. Wir werden vom neuen Anbieter vergütet — nur wenn du tatsächlich sparst.",
  },
];

export default function Benefits() {
  return (
    <section className="border-t border-sp-border py-[clamp(80px,10vh,140px)]">
      <div className="relative z-2 mx-auto max-w-[var(--sp-container)] px-[var(--sp-gutter)]">
        <div className="reveal mb-14 text-center">
          <span className="inline-flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
            <span className="text-sp-accent">◆</span> Warum sparestrom.at
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(36px,5vw,60px)] font-medium leading-none tracking-[-0.03em]">
            Ehrlich.{" "}
            <span className="italic text-sp-accent">Schnell.</span>{" "}
            Kostenlos.
          </h2>
        </div>

        <div className="reveal grid grid-cols-4 gap-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1">
          {BENEFITS.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-[14px] border border-sp-border bg-sp-surface p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-sp-border-strong"
            >
              <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-[10px] bg-sp-accent-soft text-sp-accent transition-colors duration-200 group-hover:bg-sp-accent group-hover:text-black">
                {benefit.icon}
              </div>
              <h3 className="mb-2.5 font-[family-name:var(--font-display)] text-[17px] font-medium tracking-[-0.01em]">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-sp-text-muted">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
