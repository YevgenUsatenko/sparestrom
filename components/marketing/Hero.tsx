import LiveTicker from "./LiveTicker";

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5 transition-transform duration-200"
    >
      <path d="M7.05 3.05l5 5-5 5-1.4-1.4 3.6-3.6-3.6-3.6 1.4-1.4z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-[clamp(80px,14vh,160px)] pb-[clamp(60px,8vh,100px)]">
      {/* Glow effects */}
      <div
        className="pointer-events-none absolute -right-[200px] -top-[200px] z-0 h-[700px] w-[700px] rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle, var(--sp-accent-glow) 0%, transparent 60%)",
          filter: "blur(80px)",
          animation: "float 18s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute -left-[300px] top-[20%] z-0 h-[500px] w-[500px] rounded-full opacity-80"
        style={{
          background:
            "radial-gradient(circle, rgba(72, 180, 255, 0.18) 0%, transparent 65%)",
          filter: "blur(90px)",
          animation: "float 22s ease-in-out infinite reverse",
        }}
      />

      <div className="relative z-2 mx-auto grid max-w-[var(--sp-container)] grid-cols-[1fr_auto] items-start gap-20 px-[var(--sp-gutter)] max-[960px]:grid-cols-1 max-[960px]:gap-12">
        <div>
          <div
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[rgba(197,255,46,0.22)] bg-sp-accent-soft px-3 py-1.5 font-[family-name:var(--font-mono-family)] text-[11px] font-medium tracking-[0.05em] text-sp-accent"
            style={{ animation: "fadeSlide 0.8s var(--ease-sp) 0.1s both" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sp-accent shadow-[0_0_8px_var(--sp-accent)] animate-[pulse_2s_ease-in-out_infinite]" />
            E-CONTROL-VERIFIZIERT · 100% UNABHÄNGIG
          </div>

          <h1
            className="mb-7 max-w-[920px] font-[family-name:var(--font-display)] text-[clamp(44px,7vw,96px)] font-semibold leading-[0.95] tracking-[-0.035em]"
            style={{ animation: "fadeSlide 0.9s var(--ease-sp) 0.2s both" }}
          >
            <span className="text-sp-text-muted line-through decoration-sp-at-red decoration-[4px]">
              Ein Leben lang zahlen.
            </span>
            <br />
            10 Minuten. Und{" "}
            <span className="font-[family-name:var(--font-display)] font-medium italic text-sp-accent">
              ein&nbsp;Leben&nbsp;lang sparen.
            </span>
          </h1>

          <p
            className="mb-10 max-w-[560px] text-[clamp(16px,1.5vw,19px)] leading-relaxed text-sp-text-muted"
            style={{ animation: "fadeSlide 0.9s var(--ease-sp) 0.3s both" }}
          >
            Österreichs schnellster Stromvergleich.{" "}
            <strong className="font-medium text-sp-text">
              Ø 487&nbsp;€ Ersparnis
            </strong>{" "}
            pro Haushalt und Jahr. Keine Papierformulare. Kein Anruf beim alten
            Anbieter. Kein Stromausfall. Nur ein besserer Tarif – für immer.
          </p>

          <div
            className="mb-12 flex flex-wrap items-center gap-4"
            style={{ animation: "fadeSlide 0.9s var(--ease-sp) 0.4s both" }}
          >
            <a
              href="#rechner"
              className="group inline-flex items-center gap-2.5 rounded-lg bg-sp-accent px-7 py-4 text-[15px] font-semibold text-black shadow-[0_0_0_1px_var(--sp-accent),0_8px_32px_-8px_var(--sp-accent-glow)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_0_1px_var(--sp-accent),0_16px_48px_-12px_var(--sp-accent-glow)]"
            >
              Ersparnis in 12&nbsp;Sek berechnen
              <ChevronIcon />
            </a>
            <a
              href="#wie"
              className="inline-flex items-center gap-2.5 rounded-lg border border-sp-border-strong bg-transparent px-5 py-3 text-sm font-medium text-sp-text transition-all duration-200 hover:border-sp-text-muted hover:bg-sp-surface"
            >
              Wie funktioniert&apos;s?
            </a>
          </div>

          <div
            className="flex flex-wrap items-center gap-6 font-[family-name:var(--font-mono-family)] text-xs text-sp-text-subtle"
            style={{ animation: "fadeSlide 0.9s var(--ease-sp) 0.5s both" }}
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-grid h-3.5 w-3.5 place-items-center rounded-full bg-sp-accent-soft text-[9px] text-sp-accent">
                ✓
              </span>
              Kein Stromausfall
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-grid h-3.5 w-3.5 place-items-center rounded-full bg-sp-accent-soft text-[9px] text-sp-accent">
                ✓
              </span>
              Wir kündigen für dich
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="inline-grid h-3.5 w-3.5 place-items-center rounded-full bg-sp-accent-soft text-[9px] text-sp-accent">
                ✓
              </span>
              Kostenlos &amp; unverbindlich
            </span>
          </div>
        </div>

        <LiveTicker />
      </div>
    </section>
  );
}
