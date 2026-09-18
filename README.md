# Smart Cycle Count Scoring

## 1. Overview

Smart Cycle Count Scoring helps warehouse teams decide which bins to audit
next. Every bin is assigned a risk score (0–100) based on its history of
inventory discrepancies, movement activity, and time since its last audit.
Scores are visualized on a color-coded heatmap, and users can generate audit
plans from the highest-risk bins, record counts in the field, and recompute
scores as new activity comes in.

## 2. Tech Stack

- **Frontend:** Next.js (App Router), Tailwind CSS
- **Backend:** NestJS (REST API)
- **Database:** PostgreSQL, accessed via Prisma ORM
- **Monorepo:** npm workspaces (`apps/web`, `apps/api`)

## 3. Installation & Setup

### Prerequisites

- Node.js 18.18 or later (Prisma 6's minimum requirement)
- A running local PostgreSQL server — [Postgres.app](https://postgresapp.com/)
  is an easy option on macOS, but any local Postgres instance works

### Install dependencies

From the project root (npm workspaces install both apps in one pass):

```bash
npm install
```

> If this fails with an internal npm Arborist error, it's a known
> compatibility issue between npm 10.x and newer Node versions. Retry with:
>
> ```bash
> npm install --legacy-peer-deps
> ```

### Environment setup

Copy the example env file in `apps/api` and fill in your local database
credentials:

```bash
cp apps/api/.env.example apps/api/.env
```

`DATABASE_URL` follows the standard Postgres connection string format:

```
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public
```

For a local Postgres.app instance with no password, this is typically just:

```
postgresql://your-macos-username@localhost:5432/smart_cycle_count?schema=public
```

Do the same for the frontend:

```bash
cp apps/web/.env.example apps/web/.env.local
```

`NEXT_PUBLIC_API_URL` should point at the running API (`http://localhost:3000`
by default).

### Run database migrations

From `apps/api`:

```bash
cd apps/api
npx prisma migrate dev
```

This applies the committed migrations and creates the schema in your local
database.

### Seed the database

Still from `apps/api`:

```bash
npx prisma db seed
```

This creates one warehouse with an organic aisle/rack/bin layout (~30 bins),
a product catalog, random pallets, a month of simulated movement history, and
staggered audit dates — enough data for the heatmap and scoring to be
meaningful immediately.

### Run both apps

In one terminal, from `apps/api`:

```bash
npm run start:dev
```

Runs the NestJS API on **http://localhost:3000**.

In another terminal, from `apps/web`:

```bash
npm run dev
```

Runs the Next.js app on **http://localhost:3001**.

## 4. Testing / Demo Data

`db:randomize` is a testing/demo utility — **it is not part of the
production MVP flow or its API endpoints**. It exists to quickly reset and
regenerate varied test data without manually failing counts one by one.

Run it from `apps/api`:

```bash
npm run db:randomize
```

What it does:

- Wipes `Movement`, `ScoreSnapshot`, `AuditPlan`, and `AuditTask` — it does
  **not** touch the physical structure (`Warehouse`, `Aisle`, `Rack`, `Bin`,
  `Product`, `Pallet`), reusing whatever already exists. If the database is
  completely empty, it bootstraps the structure first, using the same logic
  as the seed script.
- Regenerates movements with a random 40% quiet / 40% moderate / 20% hot
  activity distribution per bin — a fresh, different mix every run.
- Deliberately forces 2–3 bins into a high-risk state (a fixed high count of
  `ADJUSTMENT` movements and a never-audited date), so the heatmap always has
  something in the red zone to click through during a demo, even though the
  rest of the data is random.
- Recomputes scores automatically at the end (via `ScoringService`), so
  there's no need to hit the recompute endpoint by hand afterwards.

## 5. Scoring System — Factors & Formula

Each bin's risk score is a weighted sum of three normalized factors:

| Factor | Weight | Raw value |
|---|---|---|
| **Adjustments** | 40% | Count of `Movement` records of type `ADJUSTMENT` for the bin |
| **Days since last audit** | 35% | Days since `Bin.lastAuditedAt`; if never audited, a sentinel value of 999 days is used |
| **Movements** | 25% | Count of `PICK` + `PUTAWAY` + `MOVE` movements for the bin |

**Why these weights:** Adjustments are weighted highest because they're
direct historical evidence that a bin has actually had discrepancies before
— the strongest available signal of risk. Days since last audit is weighted
second because uncertainty accumulates over time even without any known
issue. Movements are weighted lowest: high activity is an *opportunity* for
human error, but activity alone isn't inherently risky — a bin can be busy
and still accurate.

### Normalization

Each factor is min-max normalized to a 0–100 scale **relative to all bins in
the warehouse**, recalculated on every recompute:

```
normalized = (raw - min) / (max - min) * 100
```

- **Edge case:** if every bin has the same raw value for a factor (`min ===
  max`), all bins get `50` for that factor instead of dividing by zero.
- A bin with `lastAuditedAt = null` uses the 999-day sentinel *before*
  normalization, so it reliably lands at (or near) the top of that factor's
  range.

### Combining the factors

```
score = (adjustments_normalized × 0.40)
      + (daysSinceAudit_normalized × 0.35)
      + (movements_normalized × 0.25)
```

### Score history

Every recompute creates a **new** `ScoreSnapshot` — it never overwrites a
previous one. A bin's current score is simply its most recent snapshot, and
the full history of past scores is preserved for free.

### Single-bin recompute behavior

`POST /scoring/recompute/:binId` (triggered automatically after a count) still
recalculates the raw factors for **all** bins, since min/max normalization
needs the full picture to be correct — but it only persists a new snapshot
for the audited bin. The other bins' snapshots are left as-is, even though
the global min/max technically shifted slightly.

This is an accepted MVP simplification, not a bug: recomputing and
persisting snapshots for every bin on every single count would be
statistically purer, but adds negligible value at this scale (~30 bins).

## 6. How the System Gets Smarter

The scoring formula creates a feedback loop without any machine learning:

1. A count fails (`countedQuantity !== expectedQuantity`).
2. The system automatically creates an `ADJUSTMENT` movement for that bin.
3. Adjustments are the highest-weighted factor (40%).
4. On the next recompute, that bin's score rises.
5. It becomes more likely to be selected in the next audit plan's Top N.

In other words, every real audit outcome directly feeds back into future
prioritization — bins that turn out to have real problems keep surfacing to
the top until they're fixed, purely as a consequence of the scoring formula
itself.

## 7. Design Decisions Worth Noting

- **The heatmap tile shows only the risk color, not the numeric score.** The
  score and its full factor breakdown are revealed only inside the bin's
  drawer, on click — this nudges users to actually check *why* a bin is
  risky instead of just skimming numbers on a grid.
- **Bin detail is a drawer/overlay, not a separate page**, so users keep the
  heatmap's context (and their scroll position) while inspecting a bin.
- **The heatmap groups bins by aisle → rack**, satisfying the original
  brief's "simple grid layout per aisle/rack" requirement rather than a flat,
  unstructured grid.
- **The Count Flow is responsive/mobile-friendly by design** — it's the
  screen warehouse staff are expected to use from a phone while walking the
  floor.
- **No authentication in this MVP** — out of scope for the requested
  deliverables.

## 8. API Endpoints Reference

| Method | Route | Description |
|---|---|---|
| GET | `/warehouses` | List warehouses (used by the frontend to resolve which warehouse to load) |
| GET | `/warehouses/:id/heatmap` | Full aisle → rack → bin structure with each bin's latest score |
| GET | `/bins/:id` | Bin detail: current score + breakdown, last audit date, current pallets |
| GET | `/bins/search?q=` | Search/autocomplete by bin code |
| POST | `/scoring/recompute` | Recomputes all bins, creates a new `ScoreSnapshot` for each |
| POST | `/scoring/recompute/:binId` | Recomputes a single bin (used internally after a count) |
| POST | `/audit-plans` | Body: `{ topN }`. Creates a plan + tasks (excludes bins with an existing PENDING task) |
| GET | `/audit-plans` | List of plans with pending/done task counts |
| GET | `/audit-plans/:id/tasks` | Tasks for a specific plan |
| GET | `/audit-tasks?status=PENDING` | All tasks, optionally filtered by status |
| GET | `/audit-tasks/:id` | Task detail with bin and expected pallets (for the Count Flow UI) |
| PATCH | `/audit-tasks/:id/count` | Body: `{ countedQuantity }`. Computes `passed`, marks the task `DONE`, triggers a recompute for that bin |

## 9. Project Structure

```
.
├── apps/
│   ├── web/                     # Next.js frontend
│   │   └── src/
│   │       ├── app/              # App Router pages (heatmap, audit-plans, count)
│   │       ├── components/       # Drawer, NavTabs, RecomputeButton, ScoringProvider
│   │       └── lib/               # API client, formatting and risk-level helpers
│   │
│   └── api/                     # NestJS backend
│       ├── prisma/
│       │   ├── schema.prisma     # Data model
│       │   ├── seed.ts           # Initial data seed
│       │   ├── seed-lib.ts       # Shared seed/randomize logic
│       │   └── reset-and-randomize.ts  # db:randomize script (testing/demo only)
│       └── src/
│           ├── warehouses/       # Heatmap endpoint
│           ├── bins/             # Bin detail + search
│           ├── scoring/          # Scoring formula + recompute
│           ├── audit-plans/      # Audit plan generation/listing
│           ├── audit-tasks/      # Count flow
│           └── prisma/           # Prisma client provider
│
└── package.json                 # npm workspaces root
```
