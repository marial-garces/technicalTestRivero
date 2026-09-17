const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";

export class ApiError extends Error {
  constructor(
    message: string,
    public status: number,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function request<T>(
  path: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options?.headers },
    cache: "no-store",
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    throw new ApiError(body || res.statusText, res.status);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

// ---- Types (mirror the NestJS response shapes) ----

export interface FactorBreakdown {
  raw: number;
  normalized: number;
  weight: number;
}

export interface ScoreBreakdown {
  adjustments: FactorBreakdown;
  daysSinceAudit: FactorBreakdown;
  movements: FactorBreakdown;
}

export interface HeatmapBin {
  id: string;
  code: string;
  lastAuditedAt: string | null;
  score: number | null;
  breakdown: ScoreBreakdown | null;
  scoreCalculatedAt: string | null;
}

export interface HeatmapRack {
  id: string;
  code: string;
  bins: HeatmapBin[];
}

export interface HeatmapAisle {
  id: string;
  code: string;
  racks: HeatmapRack[];
}

export interface Heatmap {
  id: string;
  name: string;
  aisles: HeatmapAisle[];
}

export interface Warehouse {
  id: string;
  name: string;
  createdAt: string;
  binCount: number;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
}

export interface Pallet {
  id: string;
  productId: string;
  binId: string;
  quantity: number;
  createdAt: string;
  product: Product;
}

export interface BinDetail {
  id: string;
  code: string;
  rackId: string;
  lastAuditedAt: string | null;
  createdAt: string;
  score: number | null;
  breakdown: ScoreBreakdown | null;
  scoreCalculatedAt: string | null;
  pallets: Pallet[];
}

export interface BinSearchResult {
  id: string;
  code: string;
  rackId: string;
  lastAuditedAt: string | null;
  createdAt: string;
}

export interface AuditPlanSummary {
  id: string;
  createdAt: string;
  topN: number;
  pendingCount: number;
  doneCount: number;
}

export interface AuditTaskBin {
  id: string;
  code: string;
  rackId: string;
  lastAuditedAt: string | null;
  createdAt: string;
  score: number | null;
}

export interface AuditTask {
  id: string;
  auditPlanId: string;
  binId: string;
  status: "PENDING" | "DONE";
  createdAt: string;
  expectedQuantity: number | null;
  countedQuantity: number | null;
  passed: boolean | null;
  countedAt: string | null;
  bin: AuditTaskBin;
}

export interface AuditTaskDetail extends Omit<AuditTask, "bin"> {
  bin: AuditTaskBin & { pallets: Pallet[] };
}

export interface AuditPlanDetail {
  id: string;
  createdAt: string;
  topN: number;
  auditTasks: AuditTask[];
}

export interface ScoreSnapshotResult {
  id: string;
  binId: string;
  score: number;
  breakdown: ScoreBreakdown;
  calculatedAt: string;
  bin: { code: string };
}

export interface CountResult {
  task: {
    id: string;
    auditPlanId: string;
    binId: string;
    status: "DONE";
    createdAt: string;
    expectedQuantity: number;
    countedQuantity: number;
    passed: boolean;
    countedAt: string;
  };
  score: ScoreSnapshotResult;
}

// ---- API functions ----

export const api = {
  getWarehouses: () => request<Warehouse[]>("/warehouses"),
  getHeatmap: (warehouseId: string) =>
    request<Heatmap>(`/warehouses/${warehouseId}/heatmap`),

  getBin: (id: string) => request<BinDetail>(`/bins/${id}`),
  searchBins: (q: string) =>
    request<BinSearchResult[]>(`/bins/search?q=${encodeURIComponent(q)}`),

  getAuditPlans: () => request<AuditPlanSummary[]>("/audit-plans"),
  createAuditPlan: (topN: number) =>
    request<AuditPlanDetail>("/audit-plans", {
      method: "POST",
      body: JSON.stringify({ topN }),
    }),
  getAuditPlanTasks: (id: string) =>
    request<AuditTask[]>(`/audit-plans/${id}/tasks`),

  getAuditTasks: (status?: "PENDING" | "DONE") =>
    request<AuditTask[]>(`/audit-tasks${status ? `?status=${status}` : ""}`),
  getAuditTask: (id: string) => request<AuditTaskDetail>(`/audit-tasks/${id}`),
  submitCount: (id: string, countedQuantity: number) =>
    request<CountResult>(`/audit-tasks/${id}/count`, {
      method: "PATCH",
      body: JSON.stringify({ countedQuantity }),
    }),

  recomputeAll: () => request<ScoreSnapshotResult[]>("/scoring/recompute", { method: "POST" }),
  recomputeOne: (binId: string) =>
    request<ScoreSnapshotResult>(`/scoring/recompute/${binId}`, { method: "POST" }),
};
