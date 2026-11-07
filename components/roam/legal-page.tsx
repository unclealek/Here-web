'use client';

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

const navItems = [
  { label: "Roam", href: "/roam" },
  { label: "Privacy", href: "/roam/privacy" },
  { label: "Terms", href: "/roam/terms" },
  { label: "Community", href: "/roam/community-guidelines" },
  { label: "Support", href: "/roam/support" },
  { label: "Delete account", href: "/roam/delete-account" },
];

export function RoamPageLayout({
  title,
  intro,
  children,
  lastUpdated,
}: {
  title: string;
  intro: ReactNode;
  children: ReactNode;
  lastUpdated: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#171812]">
      <header className="sticky top-0 z-40 border-b border-[#171812]/10 bg-[#F7F4EE]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/roam" className="flex items-center gap-3 text-lg font-semibold tracking-[-0.08em] text-[#171812]">
            <span className="inline-flex h-2.5 w-2.5 border-b-2 border-l-2 border-[#607B3F]" aria-hidden="true" />
            <span>Roam</span>
          </Link>

          <nav aria-label="Roam legal navigation" className="hidden items-center gap-4 text-sm md:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-[#607B3F]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/roam/support" className="hidden rounded-full bg-[#607B3F] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#4c6430] md:inline-flex">
              Support
            </Link>
            <button
              type="button"
              className="inline-flex rounded-full border border-[#171812]/10 bg-white p-2 md:hidden"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav aria-label="Mobile Roam legal navigation" className="border-t border-[#171812]/10 bg-[#F7F4EE] px-4 py-4 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl px-2 py-2 text-[#171812]/80 transition-colors hover:bg-white hover:text-[#607B3F]">
                  {item.label}
                </Link>
              ))}
              <Link href="/roam/support" onClick={() => setMenuOpen(false)} className="mt-2 rounded-full bg-[#607B3F] px-4 py-2 text-center font-medium text-white">
                Support
              </Link>
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-[#607B3F]/20 bg-[#D5EE91]/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#324822]">
            Roam legal and support
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.06em] md:text-6xl">{title}</h1>
          <div className="mt-5 text-base leading-7 text-[#171812]/75">{intro}</div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:pt-6">
            <div className="rounded-3xl border border-[#171812]/10 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,12,0.04)]">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#607B3F]">Sections</p>
              <nav aria-label="Document sections" className="space-y-2 text-sm">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-xl px-2 py-2 text-[#171812]/75 transition-colors hover:bg-[#F7F4EE] hover:text-[#607B3F]">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <article className="rounded-[32px] border border-[#171812]/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,12,0.04)] md:p-8 lg:p-10">
            <div className="prose prose-neutral max-w-none space-y-6 text-[15px] leading-7 text-[#171812]">
              {children}
            </div>
            <p className="mt-10 border-t border-[#171812]/10 pt-4 text-sm text-[#171812]/65">
              Effective date / last updated: {lastUpdated}
            </p>
          </article>
        </div>
      </main>

      <footer className="border-t border-[#171812]/10 bg-[#171812] text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-white/75 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>Roam legal and support information.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/roam/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/roam/terms" className="hover:text-white">Terms</Link>
            <Link href="/roam/support" className="hover:text-white">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-[#171812]">{title}</h2>
      <div className="space-y-3 text-[15px] leading-7 text-[#171812]/75">{children}</div>
    </section>
  );
}
