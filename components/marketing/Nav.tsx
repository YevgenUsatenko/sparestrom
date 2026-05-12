"use client";

import Link from "next/link";
import { useState } from "react";

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

const NAV_LINKS = [
  { label: "Rechner", href: "#rechner" },
  { label: "So funktioniert's", href: "#wie" },
  { label: "FAQ", href: "#mythen" },
  { label: "Bewertungen", href: "#bewertungen" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-sp-border bg-[rgba(8,9,12,0.72)] backdrop-blur-[18px] backdrop-saturate-[140%]">
      <div className="mx-auto flex h-16 max-w-[var(--sp-container)] items-center justify-between px-[var(--sp-gutter)]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.02em]"
        >
          <span className="inline-grid h-6 w-6 place-items-center rounded-[5px] bg-sp-accent text-black shadow-[0_0_20px_var(--sp-accent-glow)]">
            <span className="h-3.5 w-3.5">
              <BoltIcon />
            </span>
          </span>
          sparestrom<span className="text-sp-accent">.at</span>
        </Link>

        <ul className="hidden items-center gap-8 min-[860px]:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-sp-text-muted transition-colors duration-200 hover:text-sp-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="inline-flex items-center gap-2.5">
          <span className="hidden items-center gap-1.5 rounded-full border border-sp-border-strong px-2.5 py-[5px] font-[family-name:var(--font-mono-family)] text-[10px] tracking-[0.1em] text-sp-text-muted min-[520px]:inline-flex">
            <span className="h-2.5 w-2.5 rounded-[2px] bg-[linear-gradient(to_bottom,var(--sp-at-red)_0_33%,#fff_33%_66%,var(--sp-at-red)_66%_100%)]" />
            MADE IN AT
          </span>
          <a
            href="#rechner"
            className="hidden items-center gap-2.5 rounded-lg bg-sp-accent px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_var(--sp-accent),0_8px_32px_-8px_var(--sp-accent-glow)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_0_0_1px_var(--sp-accent),0_16px_48px_-12px_var(--sp-accent-glow)] min-[860px]:inline-flex"
          >
            Jetzt sparen →
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="inline-grid h-10 w-10 place-items-center rounded-lg border border-sp-border-strong text-sp-text-muted transition-colors hover:text-sp-text min-[860px]:hidden"
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-sp-border bg-sp-bg px-[var(--sp-gutter)] pb-6 pt-4 min-[860px]:hidden">
          <ul className="mb-4 list-none space-y-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-sp-text-muted transition-colors hover:bg-sp-surface hover:text-sp-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#rechner"
            onClick={() => setMobileOpen(false)}
            className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-sp-accent px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_var(--sp-accent),0_8px_32px_-8px_var(--sp-accent-glow)]"
          >
            Jetzt sparen →
          </a>
        </div>
      )}
    </nav>
  );
}
