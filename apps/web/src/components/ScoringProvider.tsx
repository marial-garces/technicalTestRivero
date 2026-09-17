"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { api } from "@/lib/api";

interface ScoringContextValue {
  /** Timestamp of the most recent known successful recompute (from this session's action, or reported by a page after loading real data). */
  lastRecomputedAt: Date | null;
  recomputing: boolean;
  /** Bumped after every successful recompute — pages can use it as a refetch trigger. */
  version: number;
  recomputeAll: () => Promise<void>;
  /** Lets a page report a recompute time it discovered from real data (e.g. the heatmap's most recent score snapshot), without overwriting a more recent known value. */
  reportRecomputeTime: (date: Date) => void;
}

const ScoringContext = createContext<ScoringContextValue | null>(null);

export function ScoringProvider({ children }: { children: React.ReactNode }) {
  const [lastRecomputedAt, setLastRecomputedAt] = useState<Date | null>(null);
  const [recomputing, setRecomputing] = useState(false);
  const [version, setVersion] = useState(0);

  const recomputeAll = useCallback(async () => {
    setRecomputing(true);
    try {
      await api.recomputeAll();
      setLastRecomputedAt(new Date());
      setVersion((v) => v + 1);
    } finally {
      setRecomputing(false);
    }
  }, []);

  const reportRecomputeTime = useCallback((date: Date) => {
    setLastRecomputedAt((prev) => (prev && prev > date ? prev : date));
  }, []);

  const value = useMemo(
    () => ({
      lastRecomputedAt,
      recomputing,
      version,
      recomputeAll,
      reportRecomputeTime,
    }),
    [lastRecomputedAt, recomputing, version, recomputeAll, reportRecomputeTime],
  );

  return (
    <ScoringContext.Provider value={value}>{children}</ScoringContext.Provider>
  );
}

export function useScoring() {
  const ctx = useContext(ScoringContext);
  if (!ctx) {
    throw new Error("useScoring must be used within a ScoringProvider");
  }
  return ctx;
}
