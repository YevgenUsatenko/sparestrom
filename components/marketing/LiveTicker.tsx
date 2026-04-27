"use client";

import { useEffect, useRef, useState } from "react";

const INITIAL_ENTRIES = [
  { user: "M. S. · Salzburg", amount: 612 },
  { user: "A. K. · Wien 1030", amount: 389 },
  { user: "J. L. · Graz", amount: 541 },
  { user: "R. H. · Linz", amount: 728 },
];

export default function LiveTicker() {
  const [tickerVal, setTickerVal] = useState(48394);
  const [time, setTime] = useState("— · —");
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const timeRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    function updateTime() {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, "0");
      const mm = String(d.getMinutes()).padStart(2, "0");
      setTime(`${hh}:${mm} MEZ`);
    }
    updateTime();
    timeRef.current = setInterval(updateTime, 30000);

    intervalRef.current = setInterval(() => {
      setTickerVal((v) => v + Math.floor(Math.random() * 450) + 120);
    }, 4200);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeRef.current) clearInterval(timeRef.current);
    };
  }, []);

  return (
    <aside
      className="relative w-[340px] overflow-hidden rounded-2xl border border-sp-border bg-[linear-gradient(180deg,var(--sp-surface)_0%,var(--sp-bg-2)_100%)] p-7 max-[960px]:w-full max-[960px]:max-w-[420px]"
      style={{ animation: "fadeSlide 1s var(--ease-sp) 0.5s both" }}
      aria-label="Live Ersparnis-Ticker"
    >
      {/* Top accent line */}
      <div className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--sp-accent),transparent)] opacity-60" />

      <div className="mb-[18px] flex items-center justify-between">
        <span className="inline-flex items-center gap-2 font-[family-name:var(--font-mono-family)] text-[10px] uppercase tracking-[0.15em] text-sp-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-sp-accent shadow-[0_0_6px_var(--sp-accent)] animate-[pulse_1.8s_ease-in-out_infinite]" />
          LIVE · LETZTE 24H
        </span>
        <span className="font-[family-name:var(--font-mono-family)] text-[10px] text-sp-text-subtle">
          {time}
        </span>
      </div>

      <div className="mb-1.5 font-[family-name:var(--font-display)] text-5xl font-medium leading-none tracking-[-0.03em]">
        <span className="text-sp-accent">€</span>
        {tickerVal.toLocaleString("de-AT")}
      </div>
      <p className="mb-6 text-[13px] text-sp-text-muted">
        von österreichischen Haushalten heute gespart
      </p>

      <ul className="list-none text-xs">
        {INITIAL_ENTRIES.map((entry) => (
          <li
            key={entry.user}
            className="flex items-center justify-between border-t border-dashed border-sp-border py-2.5 font-[family-name:var(--font-mono-family)]"
          >
            <span className="text-sp-text-muted">{entry.user}</span>
            <span className="font-medium text-sp-accent">
              + €{entry.amount}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
