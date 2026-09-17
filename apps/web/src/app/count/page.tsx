type RiskLevel = "low" | "medium" | "high";

const RISK_STYLES: Record<RiskLevel, string> = {
  low: "bg-risk-low",
  medium: "bg-risk-medium",
  high: "bg-risk-high",
};

// Placeholder data only — real pending tasks arrive via fetch in a later phase.
const PLACEHOLDER_PENDING = [
  { binCode: "A1-R2-B03", risk: "high" as RiskLevel, score: 76 },
  { binCode: "A5-R5-B01", risk: "high" as RiskLevel, score: 71 },
  { binCode: "A5-R3-B01", risk: "high" as RiskLevel, score: 69 },
  { binCode: "A1-R5-B01", risk: "high" as RiskLevel, score: 68 },
];

export default function CountPage() {
  return (
    <div className="flex max-w-md flex-col gap-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-warm-500">
          Count flow
        </p>
        <h1 className="mt-1 text-2xl font-bold text-warm-900 sm:text-3xl">
          Registrar conteo
        </h1>
        <p className="mt-2 text-sm text-warm-600">
          Busca el bin por código, ingresa la cantidad contada y envía. El
          resultado pass/fail se calcula automáticamente.
        </p>
      </div>

      <label className="flex flex-col gap-1.5 text-sm text-warm-700">
        Buscar bin por código
        <input
          type="text"
          disabled
          placeholder="Ej. A2-R2-B04"
          className="rounded-lg border border-warm-200 bg-warm-50 px-3 py-2.5 font-mono text-warm-900 placeholder:text-warm-400 disabled:opacity-60"
        />
      </label>

      <ul className="flex flex-col gap-3">
        {PLACEHOLDER_PENDING.map((task) => (
          <li
            key={task.binCode}
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
            <span className="text-xs text-warm-500">
              score {task.score} · task pendiente
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
