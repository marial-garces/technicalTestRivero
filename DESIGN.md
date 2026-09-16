# Smart Cycle Count Scoring — Design Document

## 1. Overview

An app that helps warehouse teams prioritize which bins to audit first by assigning
each bin a **risk score (0–100)**, visualizing it on a color-coded heatmap, and
letting users generate audit plans, record counts, and recompute scores.

**Stack:** Next.js + NestJS + Prisma + PostgreSQL

---

## 2. Architecture

Monorepo with two apps:

- `apps/web` — Next.js frontend (heatmap dashboard, bin detail, audit plan view,
  mobile-friendly count flow)
- `apps/api` — NestJS backend (REST API for bins, scoring, plans, tasks)
- Shared Prisma schema + seed script

Next.js communicates with NestJS via REST. Score recomputation is handled
synchronously (no queues/websockets needed for this MVP scope).

---

## 3. Design Decisions

| # | Topic | Decision |
|---|---|---|
| 1 | **Scoring method** | Weighted sum of normalized (min-max, 0–100) factors: **Adjustments 40%**, **Days since last audit 35%**, **Movements (picks + putaways + moves) 25%**. If `lastAuditedAt` is null, a high sentinel value (e.g. 999 days) is used before normalization. Weights are fixed constants in the scoring service (not configurable in this MVP). |
| 2 | **Score history** | Each recompute creates a `ScoreSnapshot` (score + factor breakdown as JSON + timestamp). `Bin` does not store a duplicate score field — the current score is always the most recent snapshot for that bin. |
| 3 | **Recompute triggers** | Manual "Recompute Scores" button → recalculates **all** bins. Completing a count → recalculates **only** the audited bin. |
| 4 | **Seed audit history** | Seed generates realistic, staggered `lastAuditedAt` values (some recent, some weeks old, some `null`) so the heatmap shows visual variety from the start. |
| 5 | **Pass/Fail logic** | Automatic: `countedQuantity == expectedQuantity` → PASS, any mismatch → FAIL. A FAIL automatically creates a `Movement` of type `ADJUSTMENT`, feeding back into the scoring factor. |
| 6 | **Multiple audit plans** | Multiple `AuditPlan` records can exist in parallel. Generating a new plan excludes bins that already have a `PENDING` task in another active plan. |
| 7 | **Authentication** | None in this MVP — out of scope for the requested deliverables. |
| 8 | **Bin lookup (Count Flow)** | Text input with search/autocomplete by bin code — no camera/barcode scanning. |
| 9 | **Seed volume** | ~30 bins, 5–40 movements per bin over the simulated month, 0–3 adjustments per bin, randomly distributed. |
| 10 | **Bin capacity** | No pallet limit per bin — not required by the MVP scope. |
| 11 | **Count/Task relationship** | Count fields (`expectedQuantity`, `countedQuantity`, `passed`, `countedAt`) live directly on `AuditTask` instead of a separate `CountRecord` table, since the relationship is strictly 1:1. |
| 12 | **Counting without a plan** | Counting is only allowed against an existing `PENDING` AuditTask. Free-form counting (no prior task) is out of scope for this MVP, left as a possible future extension. |

---

## 4. Data Model

### Warehouse
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| name | String | |
| createdAt | DateTime | |

### Aisle
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| warehouseId | String | FK → Warehouse |
| code | String | e.g. "A1" |

### Rack
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| aisleId | String | FK → Aisle |
| code | String | e.g. "R3" |

### Bin
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| rackId | String | FK → Rack |
| code | String | unique, e.g. "A1-R3-B05" |
| lastAuditedAt | DateTime? | nullable |
| createdAt | DateTime | |

*No `score` field — current score is resolved via the most recent `ScoreSnapshot`.*

### Product
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| sku | String | unique |
| name | String | |

### Pallet
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| productId | String | FK → Product |
| binId | String | FK → Bin (current location) |
| quantity | Int | current expected quantity |
| createdAt | DateTime | |

### Movement
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| binId | String | FK → Bin |
| palletId | String? | FK → Pallet (nullable) |
| type | Enum | `PUTAWAY`, `PICK`, `MOVE`, `ADJUSTMENT` |
| quantity | Int? | delta if applicable |
| occurredAt | DateTime | used for scoring factors |

### ScoreSnapshot
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| binId | String | FK → Bin |
| score | Float | 0–100 |
| breakdown | Json | per-factor raw value, normalized value, and weight |
| calculatedAt | DateTime | |

### AuditPlan
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| createdAt | DateTime | |
| topN | Int | number of bins requested |

### AuditTask
| Field | Type | Notes |
|---|---|---|
| id | String | PK |
| auditPlanId | String | FK → AuditPlan |
| binId | String | FK → Bin |
| status | Enum | `PENDING`, `DONE` |
| createdAt | DateTime | |
| expectedQuantity | Int? | filled when counted |
| countedQuantity | Int? | filled when counted |
| passed | Boolean? | null until completed |
| countedAt | DateTime? | |

---

## 5. API Endpoints

### Warehouse / Heatmap
| Method | Route | Description |
|---|---|---|
| GET | `/warehouses/:id/heatmap` | Full aisle → rack → bin structure with each bin's latest score |

### Bin
| Method | Route | Description |
|---|---|---|
| GET | `/bins/:id` | Bin detail: current score + breakdown, last audit date, current pallets |
| GET | `/bins/search?q=` | Search/autocomplete by bin code |

### Scoring
| Method | Route | Description |
|---|---|---|
| POST | `/scoring/recompute` | Recomputes all bins, creates a new `ScoreSnapshot` for each |
| POST | `/scoring/recompute/:binId` | Recomputes a single bin (used internally after a count) |

### Audit Plan
| Method | Route | Description |
|---|---|---|
| POST | `/audit-plans` | Body: `{ topN }`. Creates plan + tasks (excludes bins with an existing PENDING task) |
| GET | `/audit-plans` | List of plans with pending/completed task counts |
| GET | `/audit-plans/:id/tasks` | Tasks for a specific plan |

### Audit Task / Count Flow
| Method | Route | Description |
|---|---|---|
| GET | `/audit-tasks?status=PENDING` | All pending tasks (general table view) |
| GET | `/audit-tasks/:id` | Task detail with bin and expected pallets (for the Count Flow UI) |
| PATCH | `/audit-tasks/:id/count` | Body: `{ countedQuantity }`. Computes `passed`, marks `DONE`, triggers a recompute for that bin |

---

## 6. End-to-End Flow

1. `GET /warehouses/:id/heatmap` → renders the colored grid
2. Click a bin → `GET /bins/:id` → drawer with score, breakdown, and pallets
3. "Generate Audit Plan" → `POST /audit-plans` → tasks created
4. Task views → `GET /audit-plans/:id/tasks` or `GET /audit-tasks?status=PENDING`
5. Mobile flow: search bin → `GET /bins/search?q=` → resolve its PENDING task via
   `GET /audit-tasks/:id` → submit count → `PATCH /audit-tasks/:id/count`
6. Manual recompute → `POST /scoring/recompute` → heatmap refreshes via
   `GET /warehouses/:id/heatmap`