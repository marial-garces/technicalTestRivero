"use client";

import { useEffect, useState } from "react";
import { Drawer } from "./Drawer";
import { api, type BinDetail, type ScoreBreakdown } from "@/lib/api";
import { formatDate } from "@/lib/format";

interface BinDetailDrawerProps {
  binId: string | null;
  onClose: () => void;
  /** Bump this (e.g. with the global recompute version) to force a refetch while the drawer is open. */
  refreshKey?: number;
}

const FACTOR_LABELS: Record<keyof ScoreBreakdown, string> = {
  adjustments: "Adjustments",
  daysSinceAudit: "Days since audit",
  movements: "Movements",
};

export function BinDetailDrawer({
  binId,
  onClose,
  refreshKey,
}: BinDetailDrawerProps) {
  const [bin, setBin] = useState<BinDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!binId) {
      setBin(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setError(null);
    api
      .getBin(binId)
      .then((data) => {
        if (!cancelled) setBin(data);
      })
      .catch(() => {
        if (!cancelled) setError("Could not load the bin.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [binId, refreshKey]);

  return (
    <Drawer open={binId !== null} onClose={onClose} title={bin?.code}>
      {loading && <p className="text-sm text-warm-500">Loading…</p>}
      {error && <p className="text-sm text-risk-high">{error}</p>}

      {bin && !loading && (
        <div className="flex flex-col gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-warm-500">
              Current score
            </p>
            <p className="mt-1 font-mono text-4xl font-bold text-warm-900">
              {bin.score !== null ? Math.round(bin.score) : "—"}
              <span className="text-base font-normal text-warm-400">/100</span>
            </p>
            <p className="mt-1 text-xs text-warm-500">
              Last audit: {formatDate(bin.lastAuditedAt)}
            </p>
          </div>

          {bin.breakdown && (
            <div>
              <p className="mb-2 text-sm font-medium text-warm-700">
                Why this score
              </p>
              <div className="flex flex-col gap-2">
                {(
                  Object.keys(bin.breakdown) as (keyof ScoreBreakdown)[]
                ).map((key) => {
                  const factor = bin.breakdown![key];
                  return (
                    <div
                      key={key}
                      className="rounded-lg border border-warm-200 p-3 text-sm"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-warm-900">
                          {FACTOR_LABELS[key]}
                        </span>
                        <span className="font-mono text-xs text-warm-500">
                          weight {Math.round(factor.weight * 100)}%
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between font-mono text-xs text-warm-500">
                        <span>raw {factor.raw}</span>
                        <span>norm {factor.normalized.toFixed(1)}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-warm-100">
                        <div
                          className="h-full rounded-full bg-warm-600"
                          style={{ width: `${factor.normalized}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <p className="mb-2 text-sm font-medium text-warm-700">
              Current pallets ({bin.pallets.length})
            </p>
            {bin.pallets.length === 0 ? (
              <p className="text-sm text-warm-500">This bin is empty.</p>
            ) : (
              <ul className="flex flex-col gap-2">
                {bin.pallets.map((pallet) => (
                  <li
                    key={pallet.id}
                    className="flex items-center justify-between rounded-lg border border-warm-200 p-3 text-sm"
                  >
                    <span className="text-warm-900">
                      {pallet.product.name}
                    </span>
                    <span className="font-mono text-warm-500">
                      {pallet.quantity} units
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </Drawer>
  );
}
