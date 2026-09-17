import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavTabs } from "@/components/NavTabs";
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
  description: "Prioriza qué bins auditar primero según su score de riesgo.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
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
                  Warehouse A · 30 bins
                </p>
              </div>
            </div>

            <NavTabs />

            <div className="flex items-center gap-3">
              <span className="hidden font-mono text-xs text-warm-400 sm:inline">
                recompute hace 12 min
              </span>
              <button className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-warm-900 px-4 py-2 text-sm font-medium text-warm-50 transition hover:bg-warm-800">
                <span className="h-1.5 w-1.5 rounded-full bg-risk-low" />
                Recompute Scores
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
