export default function HomePage() {
  return (
    <main>
      <section className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1
            className="mb-4 text-[clamp(44px,7vw,96px)] font-semibold leading-[0.95] tracking-[-0.035em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            spare<span className="text-sp-accent">strom</span>.at
          </h1>
          <p className="text-sp-text-muted text-lg">
            Phase 1 — Setup complete. Landing Page kommt in Phase 2.
          </p>
        </div>
      </section>
    </main>
  );
}
