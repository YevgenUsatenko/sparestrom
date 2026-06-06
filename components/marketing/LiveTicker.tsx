"use client";

import { useEffect, useState } from "react";

const EXAMPLES = [
  { label: "1-Personen-Haushalt", saving: "bis € 280" },
  { label: "2–3 Personen", saving: "bis € 490" },
  { label: "Familie (4+)", saving: "bis € 620" },
  { label: "Einfamilienhaus", saving: "bis € 840" },
];

export default function LiveTicker() {
  const [time, setTime] = useState("— · —");

  useEffect(() => {
    function updateTime() {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} MEZ`);
    }
    updateTime();
    const id = setInterval(updateTime, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <aside
      className="relative w-[340px] overflow-hidden rounded-2xl border border-sp-border bg-[linear-gradient(180deg,var(--sp-surface)_0%,var(--sp-bg-2)_100%)] p-7 max-[960px]:w-full max-[960px]:max-w-[420px]"
      style={{ animation: "fadeSlide 1s var(--ease-sp) 0.5s both" }}
      aria-label="Ersparnis-Beispiele"
    >
      <div className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--sp-accent),transparent)] opacity-60" />

      <div className="mb-[18px] flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono-family)] text-[10px] uppercase tracking-[0.15em] text-sp-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-sp-accent shadow-[0_0_6px_var(--sp-accent)]" />
          ERSPARNIS-BEISPIELE
        </span>
        <span className="font-[family-name:var(--font-mono-family)] text-[10px] text-sp-text-subtle">
          {time}
        </span>
      </div>

      <div className="mb-1.5 font-[family-name:var(--font-display)] text-4xl font-medium leading-none tracking-[-0.03em]">
        <span className="text-sp-accent">Ø</span> € 487
      </div>
      <p className="mb-6 text-[13px] text-sp-text-muted">
        durchschnittliche Ersparnis pro Haushalt / Jahr
      </p>

      <ul className="list-none text-xs">
        {EXAMPLES.map((entry) => (
          <li
            key={entry.label}
            className="flex items-center justify-between border-t border-dashed border-sp-border py-2.5 font-[family-name:var(--font-mono-family)]"
          >
            <span className="text-sp-text-muted">{entry.label}</span>
            <span className="font-medium text-sp-accent">{entry.saving}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
