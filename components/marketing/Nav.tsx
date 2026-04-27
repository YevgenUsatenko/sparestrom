import Link from "next/link";

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-sp-border bg-[rgba(8,9,12,0.72)] backdrop-blur-[18px] backdrop-saturate-[140%]">
      <div className="mx-auto flex h-16 max-w-[var(--sp-container)] items-center justify-between px-[var(--sp-gutter)]">
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

        <ul className="hidden items-center gap-8 md-[860px]:flex">
          <li>
            <a
              href="#rechner"
              className="text-sm text-sp-text-muted transition-colors duration-200 hover:text-sp-text"
            >
              Rechner
            </a>
          </li>
          <li>
            <a
              href="#wie"
              className="text-sm text-sp-text-muted transition-colors duration-200 hover:text-sp-text"
            >
              So funktioniert&apos;s
            </a>
          </li>
          <li>
            <a
              href="#mythen"
              className="text-sm text-sp-text-muted transition-colors duration-200 hover:text-sp-text"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#bewertungen"
              className="text-sm text-sp-text-muted transition-colors duration-200 hover:text-sp-text"
            >
              Bewertungen
            </a>
          </li>
        </ul>

        <div className="inline-flex items-center gap-2.5">
          <span className="hidden items-center gap-1.5 rounded-full border border-sp-border-strong px-2.5 py-[5px] font-[family-name:var(--font-mono-family)] text-[10px] tracking-[0.1em] text-sp-text-muted min-[520px]:inline-flex">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[linear-gradient(to_bottom,var(--sp-at-red)_0_33%,#fff_33%_66%,var(--sp-at-red)_66%_100%)]" />
            MADE IN AT
          </span>
          <a
            href="#rechner"
            className="inline-flex items-center gap-2.5 rounded-lg bg-sp-accent px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_var(--sp-accent),0_8px_32px_-8px_var(--sp-accent-glow)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_0_1px_var(--sp-accent),0_16px_48px_-12px_var(--sp-accent-glow)]"
          >
            Jetzt sparen →
          </a>
        </div>
      </div>
    </nav>
  );
}
