import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavTabs } from "@/components/NavTabs";
import { RecomputeButton } from "@/components/RecomputeButton";
import { ScoringProvider } from "@/components/ScoringProvider";
import { api } from "@/lib/api";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Smart Cycle Count Scoring",
  description: "Prioritize which bins to audit first based on their risk score.",
};

async function getWarehouseSummary() {
  try {
    const warehouses = await api.getWarehouses();
    return warehouses[0] ?? null;
  } catch {
    // API unreachable — the header falls back to a placeholder rather than
    // taking the whole app down, since this is a best-effort display value.
    return null;
  }
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const warehouse = await getWarehouseSummary();

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScoringProvider>
          <header className="border-b border-warm-200 bg-warm-50">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warm-900 font-mono text-sm font-semibold text-warm-50">
                  SC
                </div>
                <div>
                  <p className="text-sm font-semibold leading-tight text-warm-900">
                    Smart Cycle Count
                  </p>
                  <p className="text-xs leading-tight text-warm-500">
                    {warehouse
                      ? `${warehouse.name} · ${warehouse.binCount} bins`
                      : "API unavailable"}
                  </p>
                </div>
              </div>

              <NavTabs />

              <div className="flex items-center gap-3">
                <RecomputeButton />
              </div>
            </div>
          </header>

          <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
            {children}
          </main>
        </ScoringProvider>
      </body>
    </html>
  );
}
