import Link from "next/link";

// Placeholder data only — real plans arrive via fetch in a later phase.
const PLACEHOLDER_PLANS = [
  { id: "plan-1", topN: 5, pending: 3, done: 2, createdLabel: "Creado hace 2 dias" },
  { id: "plan-2", topN: 10, pending: 10, done: 0, createdLabel: "Creado ayer · 14:20" },
];

export default function AuditPlansPage() {
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

      <ul className="flex flex-col gap-3">
        {PLACEHOLDER_PLANS.map((plan) => {
          const total = plan.pending + plan.done;
          const pct = total === 0 ? 0 : Math.round((plan.done / total) * 100);
          return (
            <li
              key={plan.id}
              className="rounded-xl border border-warm-200 bg-warm-50 p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm font-semibold text-warm-900">
                      {plan.id}
                    </span>
                    <span className="rounded-full bg-warm-100 px-2 py-0.5 text-xs font-medium text-warm-600">
                      top {plan.topN}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-warm-500">
                    {plan.createdLabel}
                  </p>
                </div>

                <div className="flex items-center gap-4 sm:w-72">
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-xs text-warm-600">
                      <span>
                        {plan.done} done · {plan.pending} pending
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
