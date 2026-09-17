import Link from "next/link";

// Placeholder data only — real plans arrive via fetch in a later phase.
const PLACEHOLDER_PLANS = [
  { id: "plan-1", topN: 5, pending: 3, done: 2 },
  { id: "plan-2", topN: 10, pending: 10, done: 0 },
];

export default function AuditPlansPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-warm-900 sm:text-2xl">
            Audit Plans
          </h1>
          <p className="mt-1 text-sm text-warm-600">
            Vista placeholder — la creación y el listado real llegan en una
            fase posterior.
          </p>
        </div>
        <button
          disabled
          className="rounded-md bg-warm-800 px-4 py-2 text-sm font-medium text-warm-50 opacity-50"
        >
          Generate Audit Plan
        </button>
      </div>

      <ul className="flex flex-col gap-3">
        {PLACEHOLDER_PLANS.map((plan) => (
          <li
            key={plan.id}
            className="rounded-lg border border-warm-200 bg-warm-50 p-4"
          >
            <Link
              href={`/audit-plans/${plan.id}`}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm font-medium text-warm-900">
                Plan {plan.id} — top {plan.topN}
              </span>
              <span className="flex gap-4 text-xs text-warm-600">
                <span>{plan.pending} pending</span>
                <span>{plan.done} done</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
