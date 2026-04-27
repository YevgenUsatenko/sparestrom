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

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden border-t border-sp-border py-[clamp(100px,14vh,180px)] text-center">
      <div
        className="pointer-events-none absolute left-1/2 top-[40%] z-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35"
        style={{
          background:
            "radial-gradient(circle, var(--sp-accent-glow) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
      <div className="relative z-2">
        <span className="mb-5 inline-flex items-center gap-2.5 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
          <span className="inline-block h-px w-6 bg-sp-text-muted" />
          <span className="text-sp-accent">05</span> / Los geht&apos;s
        </span>
        <h2 className="mx-auto mb-7 max-w-[880px] font-[family-name:var(--font-display)] text-[clamp(40px,7vw,88px)] font-medium leading-[0.95] tracking-[-0.035em]">
          Dein Stromanbieter verdient
          <br />
          an deiner{" "}
          <span className="italic text-sp-accent">Trägheit.</span>
        </h2>
        <p className="mx-auto mb-10 max-w-[520px] text-lg text-sp-text-muted">
          Zeit, das zu ändern. 10 Minuten jetzt. Hunderte Euro jedes Jahr. Für
          immer.
        </p>
        <a
          href="#rechner"
          className="group inline-flex items-center gap-2.5 rounded-lg bg-sp-accent px-7 py-4 text-[15px] font-semibold text-black shadow-[0_0_0_1px_var(--sp-accent),0_8px_32px_-8px_var(--sp-accent-glow)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_0_1px_var(--sp-accent),0_16px_48px_-12px_var(--sp-accent-glow)]"
        >
          Meine Ersparnis jetzt berechnen
          <ChevronIcon />
        </a>
      </div>
    </section>
  );
}
