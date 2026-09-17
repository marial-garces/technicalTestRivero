import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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

const NAV_LINKS = [
  { href: "/", label: "Heatmap" },
  { href: "/audit-plans", label: "Audit Plans" },
  { href: "/count", label: "Count" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="border-b border-warm-200 bg-warm-50">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3 sm:px-6">
            <span className="text-sm font-semibold text-warm-900">
              Smart Cycle Count
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-warm-600 transition hover:text-warm-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
