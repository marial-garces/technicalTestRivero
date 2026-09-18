"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  api,
  type AuditTask,
  type AuditTaskDetail,
  type BinSearchResult,
} from "@/lib/api";
import { riskLevel, RISK_BG } from "@/lib/risk";
import { formatDate } from "@/lib/format";

function CountFlow() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTaskId = searchParams.get("taskId");

  const [pendingTasks, setPendingTasks] = useState<AuditTask[] | null>(null);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<BinSearchResult[] | null>(
    null,
  );
  const [searching, setSearching] = useState(false);

  const [selectedTask, setSelectedTask] = useState<AuditTaskDetail | null>(
    null,
  );
  const [selecting, setSelecting] = useState(false);
  const [selectError, setSelectError] = useState<string | null>(null);

  const [countedQuantity, setCountedQuantity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Pending tasks list — both the default view and the source used to
  // resolve "does this bin have a PENDING task?" after a search match.
  useEffect(() => {
    api
      .getAuditTasks("PENDING")
      .then(setPendingTasks)
      .catch(() => setPendingTasks([]));
  }, []);

  // Deep link from Audit Plan detail: /count?taskId=X preselects the task.
  useEffect(() => {
    if (initialTaskId) selectTaskById(initialTaskId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialTaskId]);

  // Debounced search against GET /bins/search?q=
  useEffect(() => {
    if (!query.trim()) {
      setSearchResults(null);
      return;
    }
    setSearching(true);
    const timeout = setTimeout(() => {
      api
        .searchBins(query)
        .then(setSearchResults)
        .catch(() => setSearchResults([]))
        .finally(() => setSearching(false));
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  async function selectTaskById(taskId: string) {
    setSelecting(true);
    setSelectError(null);
    try {
      const task = await api.getAuditTask(taskId);
      setSelectedTask(task);
      setCountedQuantity("");
      setSubmitError(null);
    } catch {
      setSelectError("Could not load the task.");
    } finally {
      setSelecting(false);
    }
  }

  function selectBinFromSearch(bin: BinSearchResult) {
    const match = pendingTasks?.find((t) => t.binId === bin.id);
    if (!match) {
      setSelectedTask(null);
      setSelectError(`Bin ${bin.code} doesn't have a pending task.`);
      return;
    }
    selectTaskById(match.id);
  }

  function reset() {
    setSelectedTask(null);
    setSelectError(null);
    setQuery("");
    setSearchResults(null);
    router.replace("/count");
  }

  async function handleSubmit() {
    if (!selectedTask) return;
    const qty = Number(countedQuantity);
    if (!Number.isFinite(qty) || qty < 0) {
      setSubmitError("Enter a valid quantity.");
      return;
    }
    setSubmitting(true);
    setSubmitError(null);
    try {
      const result = await api.submitCount(selectedTask.id, qty);
      setSelectedTask((prev) =>
        prev
          ? {
              ...prev,
              status: "DONE",
              expectedQuantity: result.task.expectedQuantity,
              countedQuantity: result.task.countedQuantity,
              passed: result.task.passed,
              countedAt: result.task.countedAt,
              bin: { ...prev.bin, score: result.score.score },
            }
          : prev,
      );
      setPendingTasks((prev) => prev?.filter((t) => t.id !== selectedTask.id) ?? prev);
    } catch {
      setSubmitError("Could not record the count.");
    } finally {
      setSubmitting(false);
    }
  }

  const expectedFromPallets =
    selectedTask?.bin.pallets.reduce((sum, p) => sum + p.quantity, 0) ?? 0;

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-6">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-warm-500">
          Count flow
        </p>
        <h1 className="mt-1 text-2xl font-bold text-warm-900 sm:text-3xl">
          Record Count
        </h1>
        <p className="mt-2 text-sm text-warm-600">
          Search for the bin by code, enter the counted quantity, and submit.
          The pass/fail result is calculated automatically.
        </p>
      </div>

      {!selectedTask && (
        <>
          <label className="flex flex-col gap-1.5 text-sm text-warm-700">
            Search bin by code
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="E.g. A2-R2-B04"
              className="rounded-lg border border-warm-200 bg-warm-50 px-3 py-2.5 font-mono text-warm-900 placeholder:text-warm-400"
            />
          </label>

          {selectError && <p className="text-sm text-risk-high">{selectError}</p>}

          {query.trim() && (
            <div className="flex flex-col gap-2">
              {searching && <p className="text-sm text-warm-500">Searching…</p>}
              {!searching && searchResults?.length === 0 && (
                <p className="text-sm text-warm-500">No results.</p>
              )}
              {searchResults?.map((bin) => (
                <button
                  key={bin.id}
                  onClick={() => selectBinFromSearch(bin)}
                  className="flex items-center justify-between gap-4 rounded-xl border border-warm-200 bg-warm-50 p-4 text-left transition hover:bg-warm-100"
                >
                  <span className="font-mono text-sm font-semibold text-warm-900">
                    {bin.code}
                  </span>
                  <span className="text-xs text-warm-500">
                    {pendingTasks?.some((t) => t.binId === bin.id)
                      ? "pending task"
                      : "no pending task"}
                  </span>
                </button>
              ))}
            </div>
          )}

          {!query.trim() && (
            <ul className="flex flex-col gap-3">
              {pendingTasks === null && (
                <p className="text-sm text-warm-500">Loading pending tasks…</p>
              )}
              {pendingTasks?.length === 0 && (
                <p className="text-sm text-warm-500">
                  No pending tasks right now.
                </p>
              )}
              {pendingTasks?.map((task) => (
                <li key={task.id}>
                  <button
                    onClick={() => selectTaskById(task.id)}
                    className="flex w-full items-center justify-between gap-4 rounded-xl border border-warm-200 bg-warm-50 p-4 text-left transition hover:bg-warm-100"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-9 w-9 shrink-0 rounded-lg ${RISK_BG[riskLevel(task.bin.score)]}`}
                      />
                      <span className="font-mono text-sm font-semibold text-warm-900">
                        {task.bin.code}
                      </span>
                    </div>
                    <span className="text-xs text-warm-500">
                      score {task.bin.score !== null ? Math.round(task.bin.score) : "—"} ·
                      pending task
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      )}

      {selecting && <p className="text-sm text-warm-500">Loading…</p>}

      {selectedTask && (
        <div className="flex flex-col gap-4">
          <button
            onClick={reset}
            className="self-start text-sm text-warm-600 transition hover:text-warm-900"
          >
            ← Search another bin
          </button>

          <div className="rounded-xl border border-warm-200 bg-warm-50 p-4">
            <div className="flex items-center gap-3">
              <span
                className={`h-9 w-9 shrink-0 rounded-lg ${RISK_BG[riskLevel(selectedTask.bin.score)]}`}
              />
              <div>
                <p className="font-mono text-sm font-semibold text-warm-900">
                  {selectedTask.bin.code}
                </p>
                <p className="text-xs text-warm-500">
                  score {selectedTask.bin.score !== null ? Math.round(selectedTask.bin.score) : "—"} · last audit: {formatDate(selectedTask.bin.lastAuditedAt)}
                </p>
              </div>
            </div>

            <div className="mt-4">
              <p className="mb-2 text-sm font-medium text-warm-700">
                Expected pallets ({selectedTask.bin.pallets.length})
              </p>
              {selectedTask.bin.pallets.length === 0 ? (
                <p className="text-sm text-warm-500">This bin is empty.</p>
              ) : (
                <ul className="flex flex-col gap-1.5">
                  {selectedTask.bin.pallets.map((pallet) => (
                    <li
                      key={pallet.id}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-warm-900">{pallet.product.name}</span>
                      <span className="font-mono text-warm-500">
                        {pallet.quantity} units
                      </span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-2 border-t border-warm-200 pt-2 text-sm font-medium text-warm-900">
                Expected quantity: {expectedFromPallets} units
              </p>
            </div>
          </div>

          {selectedTask.status === "PENDING" ? (
            <div className="flex flex-col gap-3">
              <label className="flex flex-col gap-1.5 text-sm text-warm-700">
                Counted quantity
                <input
                  type="number"
                  min={0}
                  value={countedQuantity}
                  onChange={(e) => setCountedQuantity(e.target.value)}
                  className="rounded-lg border border-warm-200 bg-warm-50 px-3 py-2.5 font-mono text-warm-900"
                />
              </label>
              {submitError && (
                <p className="text-sm text-risk-high">{submitError}</p>
              )}
              <button
                onClick={handleSubmit}
                disabled={submitting || countedQuantity === ""}
                className="whitespace-nowrap rounded-lg bg-warm-900 px-4 py-2 text-sm font-medium text-warm-50 transition hover:bg-warm-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Submitting…" : "Submit count"}
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <div
                className={`rounded-xl border p-4 text-sm font-medium text-warm-900 ${
                  selectedTask.passed
                    ? "border-risk-low bg-risk-low/15"
                    : "border-risk-high bg-risk-high/15"
                }`}
              >
                {selectedTask.passed
                  ? "PASS — the count matches what was expected."
                  : "FAIL — there was a discrepancy; an adjustment was recorded."}
              </div>
              <p className="text-sm text-warm-600">
                Expected: {selectedTask.expectedQuantity} units · Counted:{" "}
                {selectedTask.countedQuantity} units
              </p>
              <p className="text-xs text-warm-500">
                Counted on {formatDate(selectedTask.countedAt)}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function CountPage() {
  return (
    <Suspense fallback={<p className="text-sm text-warm-500">Loading…</p>}>
      <CountFlow />
    </Suspense>
  );
}
