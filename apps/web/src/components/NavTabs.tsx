"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { href: "/", label: "Heatmap" },
  { href: "/audit-plans", label: "Audit Plans" },
  { href: "/count", label: "Count" },
];

export function NavTabs() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-1 rounded-full border border-warm-200 bg-warm-100/60 p-1">
      {TABS.map((tab) => {
        const active =
          tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              active
                ? "bg-warm-50 text-warm-900 shadow-sm ring-1 ring-warm-200"
                : "text-warm-500 hover:text-warm-900"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
