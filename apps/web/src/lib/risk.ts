export type RiskLevel = "low" | "medium" | "high" | "none";

/** Mirrors the legend on the heatmap: <40 low, 40-64 medium, >=65 high. */
export function riskLevel(score: number | null): RiskLevel {
  if (score === null) return "none";
  if (score < 40) return "low";
  if (score < 65) return "medium";
  return "high";
}

export const RISK_BG: Record<RiskLevel, string> = {
  low: "bg-risk-low",
  medium: "bg-risk-medium",
  high: "bg-risk-high",
  none: "bg-warm-100",
};
