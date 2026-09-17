import Link from "next/link";

// Placeholder data only — real tasks for this plan arrive via fetch in a later phase.
const PLACEHOLDER_TASKS = [
  { id: "task-1", binCode: "A2-R2-B04", status: "PENDING" },
  { id: "task-2", binCode: "A4-R1-B01", status: "DONE" },
];

export default async function AuditPlanDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="flex flex-col gap-6">
      <div>
        <Link href="/audit-plans" className="text-sm text-warm-600 hover:text-warm-900">
          ← Audit Plans
        </Link>
        <h1 className="mt-2 text-xl font-semibold text-warm-900 sm:text-2xl">
          Plan {id}
        </h1>
        <p className="mt-1 text-sm text-warm-600">
          Vista placeholder — las tasks reales de este plan llegan en una fase
          posterior.
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {PLACEHOLDER_TASKS.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between rounded-lg border border-warm-200 bg-warm-50 p-4 text-sm"
          >
            <span className="font-medium text-warm-900">{task.binCode}</span>
            <span className="text-xs text-warm-600">{task.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
