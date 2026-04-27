import Link from "next/link";

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
    </svg>
  );
}

const SERVICE_LINKS = [
  { label: "Stromrechner", href: "#rechner" },
  { label: "So funktioniert's", href: "#wie" },
  { label: "Anbieter-Vergleich", href: "#" },
  { label: "Wechsel-Status", href: "#" },
];

const ABOUT_LINKS = [
  { label: "Das Team", href: "#" },
  { label: "Kundenstimmen", href: "#bewertungen" },
  { label: "Presse", href: "#" },
  { label: "Kontakt", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Impressum", href: "/legal/impressum" },
  { label: "Datenschutz", href: "/legal/datenschutz" },
  { label: "AGB", href: "/legal/agb" },
  { label: "Cookie-Einstellungen", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-sp-border bg-sp-bg pb-10 pt-[60px]">
      <div className="relative z-2 mx-auto max-w-[var(--sp-container)] px-[var(--sp-gutter)]">
        <div className="mb-12 grid grid-cols-[1.3fr_1fr_1fr_1fr] gap-12 max-[780px]:grid-cols-2 max-[780px]:gap-8 max-[480px]:grid-cols-1">
          <div>
            <Link
              href="#"
              className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.02em]"
            >
              <span className="inline-grid h-6 w-6 place-items-center rounded-[5px] bg-sp-accent text-black shadow-[0_0_20px_var(--sp-accent-glow)]">
                <span className="h-3.5 w-3.5">
                  <BoltIcon />
                </span>
              </span>
              sparestrom<span className="text-sp-accent">.at</span>
            </Link>
            <p className="mt-4 max-w-[320px] text-[13px] leading-relaxed text-sp-text-muted">
              Österreichs transparenter Stromvergleich. 100% unabhängig,
              E-Control-konform, lokales Team in Salzburg. Kein Schnickschnack –
              nur echte Ersparnis.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
              Service
            </h4>
            <ul className="list-none">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-sm text-sp-text transition-colors duration-200 hover:text-sp-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
              Über uns
            </h4>
            <ul className="list-none">
              {ABOUT_LINKS.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <a
                    href={link.href}
                    className="text-sm text-sp-text transition-colors duration-200 hover:text-sp-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-[family-name:var(--font-mono-family)] text-[11px] font-medium uppercase tracking-[0.12em] text-sp-text-muted">
              Rechtliches
            </h4>
            <ul className="list-none">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label} className="mb-2.5">
                  <Link
                    href={link.href}
                    className="text-sm text-sp-text transition-colors duration-200 hover:text-sp-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-sp-border pt-7 font-[family-name:var(--font-mono-family)] text-xs text-sp-text-subtle">
          <div>© 2026 SPARESTROM.AT · MADE IN SALZBURG, AUSTRIA</div>
          <div className="flex gap-6">
            <span className="inline-flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-sp-accent shadow-[0_0_6px_var(--sp-accent)] animate-[pulse_2s_ease-in-out_infinite]" />
              ALLE SYSTEME ONLINE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
