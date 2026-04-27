"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  target: number;
  duration?: number;
}

function CountUp({ target, duration = 1400 }: CountUpProps) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            const t0 = performance.now();

            function tick(t: number) {
              const progress = Math.min(1, (t - t0) / duration);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.floor(target * eased));
              if (progress < 1) requestAnimationFrame(tick);
              else setValue(target);
            }
            requestAnimationFrame(tick);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{value.toLocaleString("de-AT")}</span>;
}

export default function TrustStrip() {
  return (
    <section className="relative z-2 border-y border-sp-border bg-sp-bg-2 py-9">
      <div className="mx-auto grid max-w-[var(--sp-container)] grid-cols-4 gap-6 px-[var(--sp-gutter)] max-[820px]:grid-cols-2">
        <div className="border-r border-sp-border px-2 max-[820px]:border-b max-[820px]:pb-6">
          <div className="mb-1.5 font-[family-name:var(--font-display)] text-[clamp(28px,3.5vw,38px)] font-medium leading-none tracking-[-0.025em]">
            <CountUp target={12847} />+
          </div>
          <div className="font-[family-name:var(--font-mono-family)] text-[13px] tracking-[0.02em] text-sp-text-muted">
            Haushalte gewechselt
          </div>
        </div>

        <div className="border-r border-sp-border px-2 max-[820px]:border-b max-[820px]:border-r-0 max-[820px]:pb-6">
          <div className="mb-1.5 font-[family-name:var(--font-display)] text-[clamp(28px,3.5vw,38px)] font-medium leading-none tracking-[-0.025em]">
            Ø <CountUp target={487} />
            <span className="text-[0.7em] text-sp-accent">€</span>
          </div>
          <div className="font-[family-name:var(--font-mono-family)] text-[13px] tracking-[0.02em] text-sp-text-muted">
            Ersparnis pro Jahr
          </div>
        </div>

        <div className="border-r border-sp-border px-2">
          <div className="mb-1.5 font-[family-name:var(--font-display)] text-[clamp(28px,3.5vw,38px)] font-medium leading-none tracking-[-0.025em]">
            <CountUp target={10} />
            <span className="text-[0.7em] text-sp-accent">min</span>
          </div>
          <div className="font-[family-name:var(--font-mono-family)] text-[13px] tracking-[0.02em] text-sp-text-muted">
            Durchschnittliche Wechseldauer
          </div>
        </div>

        <div className="px-2">
          <div className="mb-1.5 font-[family-name:var(--font-display)] text-[clamp(28px,3.5vw,38px)] font-medium leading-none tracking-[-0.025em]">
            4,9<span className="text-[0.7em] text-sp-accent">/5</span>
          </div>
          <div className="font-[family-name:var(--font-mono-family)] text-[13px] tracking-[0.02em] text-sp-text-muted">
            2.341 verifizierte Bewertungen
          </div>
        </div>
      </div>
    </section>
  );
}
