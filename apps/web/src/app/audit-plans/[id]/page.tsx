import Link from "next/link";

type RiskLevel = "low" | "medium" | "high";

const RISK_STYLES: Record<RiskLevel, string> = {
  low: "bg-risk-low",
  medium: "bg-risk-medium",
  high: "bg-risk-high",
};

const STATUS_STYLES: Record<string, string> = {
  DONE: "bg-risk-low/20 text-warm-900",
  PENDING: "bg-warm-100 text-warm-600",
};

// Placeholder data only — real tasks for this plan arrive via fetch in a later phase.
const PLACEHOLDER_TASKS = [
  { id: "task-1", binCode: "A1-R2-B03", risk: "high" as RiskLevel, score: 76, status: "DONE" },
  { id: "task-2", binCode: "A5-R5-B01", risk: "high" as RiskLevel, score: 71, status: "DONE" },
  { id: "task-3", binCode: "A5-R3-B01", risk: "high" as RiskLevel, score: 69, status: "PENDING" },
  { id: "task-4", binCode: "A1-R5-B01", risk: "high" as RiskLevel, score: 68, status: "PENDING" },
  { id: "task-5", binCode: "A1-R1-B01", risk: "high" as RiskLevel, score: 67, status: "PENDING" },
];

export default async function AuditPlanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const pending = PLACEHOLDER_TASKS.filter((t) => t.status === "PENDING").length;
  const done = PLACEHOLDER_TASKS.filter((t) => t.status === "DONE").length;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link
          href="/audit-plans"
          className="text-sm text-warm-600 transition hover:text-warm-900"
        >
          ← Audit Plans
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-warm-900 sm:text-3xl">
          Plan {id}
        </h1>
        <p className="mt-1 text-sm text-warm-600">
          Top {PLACEHOLDER_TASKS.length} bins · {pending} pending · {done} done
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {PLACEHOLDER_TASKS.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between gap-4 rounded-xl border border-warm-200 bg-warm-50 p-4"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-9 w-9 shrink-0 rounded-lg ${RISK_STYLES[task.risk]}`}
              />
              <span className="font-mono text-sm font-semibold text-warm-900">
                {task.binCode}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-warm-500">
                score {task.score}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[task.status]}`}
              >
                {task.status}
              </span>
              <button className="whitespace-nowrap rounded-lg border border-warm-300 bg-warm-50 px-3 py-1.5 text-sm font-medium text-warm-900 transition hover:bg-warm-100">
                {task.status === "DONE" ? "Ver conteo" : "Contar"}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
