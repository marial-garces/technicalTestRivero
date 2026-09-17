"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { api, type AuditPlanSummary } from "@/lib/api";
import { formatRelativeTime, shortId } from "@/lib/format";

export default function AuditPlansPage() {
  const router = useRouter();
  const [plans, setPlans] = useState<AuditPlanSummary[] | null>(null);
  const [loadError, setLoadError] = useState<string | null>(null);

  const [topN, setTopN] = useState(10);
  const [generating, setGenerating] = useState(false);
  const [generateError, setGenerateError] = useState<string | null>(null);

  useEffect(() => {
    api
      .getAuditPlans()
      .then(setPlans)
      .catch(() => setLoadError("No se pudieron cargar los planes."));
  }, []);

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
            Planes
          </p>
          <h1 className="mt-1 text-2xl font-bold text-warm-900 sm:text-3xl">
            Audit Plans
          </h1>
          <p className="mt-2 max-w-xl text-sm text-warm-600">
            Cada plan agrupa los top N bins con mayor score en tasks
            pendientes de conteo.
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

      {loadError && <p className="text-sm text-risk-high">{loadError}</p>}
      {plans === null && !loadError && (
        <p className="text-sm text-warm-500">Cargando planes…</p>
      )}
      {plans?.length === 0 && (
        <p className="text-sm text-warm-500">Todavía no hay planes.</p>
      )}

      <ul className="flex flex-col gap-3">
        {plans?.map((plan) => {
          const total = plan.pendingCount + plan.doneCount;
          const pct = total === 0 ? 0 : Math.round((plan.doneCount / total) * 100);
          return (
            <li
              key={plan.id}
              className="rounded-xl border border-warm-200 bg-warm-50 p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-mono text-sm font-semibold text-warm-900"
                      title={plan.id}
                    >
                      plan-{shortId(plan.id)}
                    </span>
                    <span className="rounded-full bg-warm-100 px-2 py-0.5 text-xs font-medium text-warm-600">
                      top {plan.topN}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-warm-500">
                    Creado {formatRelativeTime(plan.createdAt)}
                  </p>
                </div>

                <div className="flex items-center gap-4 sm:w-72">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-warm-600">
                      <span>
                        {plan.doneCount} done · {plan.pendingCount} pending
                      </span>
                      <span className="font-mono font-semibold text-warm-900">
                        {pct}%
                      </span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-warm-200">
                      <div
                        className="h-full rounded-full bg-risk-low"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                  <Link
                    href={`/audit-plans/${plan.id}`}
                    className="whitespace-nowrap text-sm font-medium text-warm-700 transition hover:text-warm-900"
                  >
                    Ver tasks →
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
