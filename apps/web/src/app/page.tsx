"use client";

import { useState } from "react";
import { Drawer } from "@/components/Drawer";

type RiskLevel = "low" | "medium" | "high";

const RISK_STYLES: Record<RiskLevel, string> = {
  low: "bg-risk-low",
  medium: "bg-risk-medium",
  high: "bg-risk-high",
};

const RISK_LEGEND: { level: RiskLevel; label: string; range: string }[] = [
  { level: "low", label: "Riesgo bajo", range: "0-39" },
  { level: "medium", label: "Riesgo medio", range: "40-64" },
  { level: "high", label: "Riesgo alto", range: "65-100" },
];

function scoreForRisk(risk: RiskLevel, seed: number): number {
  const [min, max] =
    risk === "low" ? [10, 38] : risk === "medium" ? [40, 64] : [65, 96];
  return min + (seed % (max - min));
}

// Placeholder data only — real bins/scores arrive via fetch in a later phase.
const PLACEHOLDER_BINS = Array.from({ length: 30 }, (_, i) => {
  const risk: RiskLevel = i % 3 === 0 ? "high" : i % 3 === 1 ? "medium" : "low";
  return {
    code: `A${(i % 6) + 1}-R${Math.floor(i / 6) + 1}-B${String((i % 4) + 1).padStart(2, "0")}`,
    risk,
    score: scoreForRisk(risk, i * 7 + 3),
  };
});

export default function HeatmapPage() {
  const [selectedBin, setSelectedBin] = useState<string | null>(null);

  const legendCounts = RISK_LEGEND.map((entry) => ({
    ...entry,
    count: PLACEHOLDER_BINS.filter((bin) => bin.risk === entry.level).length,
  }));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-warm-500">
            Dashboard
          </p>
          <h1 className="mt-1 text-2xl font-bold text-warm-900 sm:text-3xl">
            Heatmap del almacén
          </h1>
          <p className="mt-2 max-w-xl text-sm text-warm-600">
            Los bins con mayor riesgo de discrepancia aparecen en terracota.
            Toca un bin para ver su score y por qué lo tiene.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-warm-600">
            Top N
            <input
              type="number"
              defaultValue={10}
              className="w-16 rounded-lg border border-warm-200 bg-warm-50 px-2 py-1.5 text-center font-mono text-warm-900"
            />
          </label>
          <button className="whitespace-nowrap rounded-lg bg-warm-900 px-4 py-2 text-sm font-medium text-warm-50 transition hover:bg-warm-800">
            Generate Audit Plan
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-warm-200 bg-warm-50 px-5 py-3">
        <span className="font-mono text-xs uppercase tracking-wide text-warm-500">
          Risk score
        </span>
        {legendCounts.map((entry) => (
          <div key={entry.level} className="flex items-center gap-2 text-sm">
            <span
              className={`h-3 w-3 rounded-sm ${RISK_STYLES[entry.level]}`}
            />
            <span className="text-warm-700">{entry.label}</span>
            <span className="text-warm-400">{entry.range}</span>
            <span className="rounded-full bg-warm-100 px-2 py-0.5 text-xs font-medium text-warm-600">
              {entry.count}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3 md:grid-cols-8 lg:grid-cols-10">
        {PLACEHOLDER_BINS.map((bin) => (
          <button
            key={bin.code}
            onClick={() => setSelectedBin(bin.code)}
            title={bin.code}
            className={`flex aspect-square flex-col justify-between rounded-xl p-2 text-left transition hover:opacity-90 hover:ring-2 hover:ring-warm-900/20 sm:p-3 ${RISK_STYLES[bin.risk]}`}
          >
            <span className="font-mono text-[10px] font-medium text-warm-900/70 sm:text-xs">
              {bin.code}
            </span>
            <span className="font-mono text-lg font-bold text-warm-900 sm:text-2xl">
              {bin.score}
              <span className="text-xs font-normal text-warm-900/50">
                /100
              </span>
            </span>
          </button>
        ))}
      </div>

      <Drawer
        open={selectedBin !== null}
        onClose={() => setSelectedBin(null)}
        title={selectedBin ?? undefined}
      >
        <p className="text-sm text-warm-600">
          Detalle del bin — score, breakdown y pallets llegarán en la fase de
          integración con la API.
        </p>
      </Drawer>
    </div>
  );
}
