"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { BinDetailDrawer } from "@/components/BinDetailDrawer";
import { useScoring } from "@/components/ScoringProvider";
import { api, type Heatmap, type HeatmapBin } from "@/lib/api";
import { riskLevel, RISK_BG } from "@/lib/risk";

const RISK_LEGEND = [
  { level: "low", label: "Riesgo bajo", range: "0-39" },
  { level: "medium", label: "Riesgo medio", range: "40-64" },
  { level: "high", label: "Riesgo alto", range: "65-100" },
] as const;

function allBins(heatmap: Heatmap): HeatmapBin[] {
  return heatmap.aisles.flatMap((aisle) =>
    aisle.racks.flatMap((rack) => rack.bins),
  );
}

export default function HeatmapPage() {
  const router = useRouter();
  const { version, reportRecomputeTime } = useScoring();

  const [heatmap, setHeatmap] = useState<Heatmap | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedBinId, setSelectedBinId] = useState<string | null>(null);

  const [topN, setTopN] = useState(10);
  const [generating, setGenerating] = useState(false);
  const [generateError, setGenerateError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setLoadError(null);
      try {
        const warehouses = await api.getWarehouses();
        const warehouse = warehouses[0];
        if (!warehouse) throw new Error("No warehouses found");
        const data = await api.getHeatmap(warehouse.id);
        if (!cancelled) setHeatmap(data);
      } catch {
        if (!cancelled) {
          setLoadError("No se pudo cargar el heatmap. ¿Está la API corriendo?");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [version]);

  // Once real data loads, tell the navbar when scores were actually last computed.
  useEffect(() => {
    if (!heatmap) return;
    const dates = allBins(heatmap)
      .map((b) => b.scoreCalculatedAt)
      .filter((d): d is string => d !== null);
    if (dates.length > 0) {
      reportRecomputeTime(new Date(dates.reduce((a, b) => (a > b ? a : b))));
    }
  }, [heatmap, reportRecomputeTime]);

  const legendCounts = useMemo(() => {
    if (!heatmap) return { low: 0, medium: 0, high: 0 };
    const counts = { low: 0, medium: 0, high: 0 };
    for (const bin of allBins(heatmap)) {
      const level = riskLevel(bin.score);
      if (level !== "none") counts[level]++;
    }
    return counts;
  }, [heatmap]);

  async function handleGenerate() {
    setGenerating(true);
    setGenerateError(null);
    try {
      const plan = await api.createAuditPlan(topN);
      router.push(`/audit-plans/${plan.id}`);
    } catch {
      setGenerateError("No se pudo crear el plan.");
    } finally {
      setGenerating(false);
    }
  }

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

        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-sm text-warm-600">
              Top N
              <input
                type="number"
                min={1}
                value={topN}
                onChange={(e) => setTopN(Number(e.target.value) || 1)}
                className="w-16 rounded-lg border border-warm-200 bg-warm-50 px-2 py-1.5 text-center font-mono text-warm-900"
              />
            </label>
            <button
              onClick={handleGenerate}
              disabled={generating}
              className="whitespace-nowrap rounded-lg bg-warm-900 px-4 py-2 text-sm font-medium text-warm-50 transition hover:bg-warm-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {generating ? "Generando…" : "Generate Audit Plan"}
            </button>
          </div>
          {generateError && (
            <p className="text-xs text-risk-high">{generateError}</p>
          )}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-warm-200 bg-warm-50 px-5 py-3">
        <span className="font-mono text-xs uppercase tracking-wide text-warm-500">
          Risk score
        </span>
        {RISK_LEGEND.map((entry) => (
          <div key={entry.level} className="flex items-center gap-2 text-sm">
            <span className={`h-3 w-3 rounded-sm ${RISK_BG[entry.level]}`} />
            <span className="text-warm-700">{entry.label}</span>
            <span className="text-warm-400">{entry.range}</span>
            <span className="rounded-full bg-warm-100 px-2 py-0.5 text-xs font-medium text-warm-600">
              {legendCounts[entry.level]}
            </span>
          </div>
        ))}
      </div>

      {loading && <p className="text-sm text-warm-500">Cargando heatmap…</p>}
      {loadError && <p className="text-sm text-risk-high">{loadError}</p>}

      {heatmap && !loading && (
        <div className="flex flex-col gap-8">
          {heatmap.aisles.map((aisle) => (
            <div key={aisle.id}>
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-warm-500">
                Aisle {aisle.code}
              </p>
              <div className="flex flex-col gap-4">
                {aisle.racks.map((rack) => (
                  <div key={rack.id}>
                    <p className="mb-2 text-xs text-warm-400">
                      Rack {rack.code}
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {rack.bins.map((bin) => (
                        <button
                          key={bin.id}
                          onClick={() => setSelectedBinId(bin.id)}
                          title={bin.code}
                          className={`flex h-20 w-20 flex-col justify-center rounded-xl p-2 text-left transition hover:opacity-90 hover:ring-2 hover:ring-warm-900/20 sm:h-24 sm:w-24 sm:p-3 ${RISK_BG[riskLevel(bin.score)]}`}
                        >
                          <span className="font-mono text-[10px] font-medium text-warm-900/70">
                            {bin.code}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      <BinDetailDrawer
        binId={selectedBinId}
        onClose={() => setSelectedBinId(null)}
        refreshKey={version}
      />
    </div>
  );
}
