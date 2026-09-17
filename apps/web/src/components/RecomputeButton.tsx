"use client";

import { useEffect, useState } from "react";
import { useScoring } from "./ScoringProvider";

function formatRelative(date: Date | null): string {
  if (!date) return "sin recompute aún";
  const diffMin = Math.floor((Date.now() - date.getTime()) / 60_000);
  if (diffMin < 1) return "recompute hace instantes";
  if (diffMin === 1) return "recompute hace 1 min";
  if (diffMin < 60) return `recompute hace ${diffMin} min`;
  const diffHr = Math.floor(diffMin / 60);
  return `recompute hace ${diffHr}h`;
}

export function RecomputeButton() {
  const { lastRecomputedAt, recomputing, recomputeAll } = useScoring();
  // Ticks the relative-time label forward without a full recompute.
  const [, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 30_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <span className="hidden font-mono text-xs text-warm-400 sm:inline">
        {formatRelative(lastRecomputedAt)}
      </span>
      <button
        onClick={() => recomputeAll()}
        disabled={recomputing}
        className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-warm-900 px-4 py-2 text-sm font-medium text-warm-50 transition hover:bg-warm-800 disabled:cursor-not-allowed disabled:opacity-60"
      >
        <span
          className={`h-1.5 w-1.5 rounded-full bg-risk-low ${recomputing ? "animate-pulse" : ""}`}
        />
        {recomputing ? "Recomputando…" : "Recompute Scores"}
      </button>
    </>
  );
}
