import Link from "next/link";

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor" />
    </svg>
  );
}

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-sp-border bg-[rgba(8,9,12,0.72)] backdrop-blur-[18px] backdrop-saturate-[140%]">
        <div className="mx-auto flex h-16 max-w-[var(--sp-container)] items-center px-[var(--sp-gutter)]">
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
        </div>
      </nav>
      <main className="relative z-2 mx-auto max-w-[800px] px-[var(--sp-gutter)] py-16">
        {children}
      </main>
      <footer className="border-t border-sp-border py-8 text-center font-[family-name:var(--font-mono-family)] text-xs text-sp-text-subtle">
        © 2026 SPARESTROM.AT · MADE IN SALZBURG, AUSTRIA
      </footer>
    </>
  );
}
