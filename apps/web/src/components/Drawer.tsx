"use client";

import { useEffect } from "react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

/**
 * Reusable drawer/modal shell. Slides up from the bottom on small screens
 * and in from the right on larger ones. Purely presentational — no data
 * fetching or business logic lives here.
 */
export function Drawer({ open, onClose, title, children }: DrawerProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-stretch sm:justify-end">
      {/* Backdrop */}
      <button
        aria-label="Cerrar"
        onClick={onClose}
        className="absolute inset-0 bg-warm-900/40 backdrop-blur-[1px]"
      />

      {/* Panel: bottom sheet on mobile, right-side panel from sm: up */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative flex max-h-[85vh] w-full flex-col overflow-y-auto rounded-t-2xl bg-warm-50 p-5 shadow-xl sm:h-full sm:max-h-none sm:w-[420px] sm:rounded-none sm:rounded-l-2xl md:w-[480px]"
      >
        <div className="mb-4 flex items-center justify-between gap-4">
          {title ? (
            <h2 className="text-lg font-semibold text-warm-900">{title}</h2>
          ) : (
            <span />
          )}
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="rounded-full px-2 py-1 text-warm-500 transition hover:bg-warm-100 hover:text-warm-900"
          >
            ✕
          </button>
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
