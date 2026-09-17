"use client";

import { useState } from "react";
import { Drawer } from "@/components/Drawer";

type RiskLevel = "low" | "medium" | "high";

const RISK_STYLES: Record<RiskLevel, string> = {
  low: "bg-risk-low",
  medium: "bg-risk-medium",
  high: "bg-risk-high",
};

const RISK_LABELS: Record<RiskLevel, string> = {
  low: "Riesgo bajo",
  medium: "Riesgo medio",
  high: "Riesgo alto",
};

// Placeholder data only — real bins/scores arrive via fetch in a later phase.
const PLACEHOLDER_BINS = Array.from({ length: 30 }, (_, i) => {
  const risk: RiskLevel = i % 3 === 0 ? "high" : i % 3 === 1 ? "medium" : "low";
  return {
    code: `A${(i % 6) + 1}-R${Math.floor(i / 6) + 1}-B${String((i % 4) + 1).padStart(2, "0")}`,
    risk,
  };
});

export default function HeatmapPage() {
  const [selectedBin, setSelectedBin] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-xl font-semibold text-warm-900 sm:text-2xl">
          Heatmap del almacén
        </h1>
        <p className="mt-1 text-sm text-warm-600">
          Vista placeholder — la carga real de bins y scores llega en una fase
          posterior.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-warm-700">
        {(Object.keys(RISK_LABELS) as RiskLevel[]).map((risk) => (
          <div key={risk} className="flex items-center gap-2">
            <span className={`h-3 w-3 rounded-sm ${RISK_STYLES[risk]}`} />
            {RISK_LABELS[risk]}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3 md:grid-cols-8 lg:grid-cols-10">
        {PLACEHOLDER_BINS.map((bin) => (
          <button
            key={bin.code}
            onClick={() => setSelectedBin(bin.code)}
            title={bin.code}
            className={`aspect-square rounded-md text-[10px] font-medium text-warm-900/70 transition hover:opacity-80 hover:ring-2 hover:ring-warm-400 sm:text-xs ${RISK_STYLES[bin.risk]}`}
          >
            {bin.code}
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
