import Link from "next/link";
import { api, type AuditTask } from "@/lib/api";
import { riskLevel, RISK_BG } from "@/lib/risk";
import { shortId } from "@/lib/format";

const STATUS_STYLES: Record<AuditTask["status"], string> = {
  DONE: "bg-risk-low/20 text-warm-900",
  PENDING: "bg-warm-100 text-warm-600",
};

export default async function AuditPlanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let tasks: AuditTask[] | null = null;
  let loadError: string | null = null;
  try {
    tasks = await api.getAuditPlanTasks(id);
  } catch {
    loadError = "Could not load this plan.";
  }

  const pending = tasks?.filter((t) => t.status === "PENDING").length ?? 0;
  const done = tasks?.filter((t) => t.status === "DONE").length ?? 0;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link
          href="/audit-plans"
          className="text-sm text-warm-600 transition hover:text-warm-900"
        >
          ← Audit Plans
        </Link>
        <h1 className="mt-2 text-2xl font-bold text-warm-900 sm:text-3xl" title={id}>
          Plan plan-{shortId(id)}
        </h1>
        {tasks && (
          <p className="mt-1 text-sm text-warm-600">
            Top {tasks.length} bins · {pending} pending · {done} done
          </p>
        )}
      </div>

      {loadError && <p className="text-sm text-risk-high">{loadError}</p>}

      <ul className="flex flex-col gap-3">
        {tasks?.map((task) => (
          <li
            key={task.id}
            className="flex flex-col gap-3 rounded-xl border border-warm-200 bg-warm-50 p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-9 w-9 shrink-0 rounded-lg ${RISK_BG[riskLevel(task.bin.score)]}`}
              />
              <span className="font-mono text-sm font-semibold text-warm-900">
                {task.bin.code}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-warm-500">
                score {task.bin.score !== null ? Math.round(task.bin.score) : "—"}
              </span>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold ${STATUS_STYLES[task.status]}`}
              >
                {task.status}
              </span>
              <Link
                href={`/count?taskId=${task.id}`}
                className="whitespace-nowrap rounded-lg border border-warm-300 bg-warm-50 px-3 py-1.5 text-sm font-medium text-warm-900 transition hover:bg-warm-100"
              >
                {task.status === "DONE" ? "View count" : "Count"}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
