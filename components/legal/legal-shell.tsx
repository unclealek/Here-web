import Link from "next/link";
import type { ReactNode } from "react";

type Section = { title: string; content: ReactNode };
export function LegalShell({ eyebrow, title, intro, sections, summary }: { eyebrow: string; title: string; intro: string; sections: Section[]; summary?: { title: string; description: string }[] }) {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#171812]">
      <header className="border-b border-[#607B3F]/20 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
          <Link href="/" className="text-2xl font-semibold tracking-[-0.08em]">HERE.</Link>
          <Link href="/" className="text-sm text-[#607B3F] hover:underline">← Back to HERE</Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#607B3F]">{eyebrow}</p>
        <h1 className="mt-5 text-[clamp(3.2rem,9vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.075em]">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#596653]">{intro}</p>
        <div className="mt-10 rounded-2xl border border-[#607B3F]/30 bg-[#D5EE91]/30 p-6 text-sm leading-relaxed">
          <strong>Pre-launch draft — not final legal terms.</strong> This page is provided to help prepare HERE for launch. The policies, company details, contact information, third-party providers and retention periods must be checked against the actual mobile app and reviewed before they are treated as final.
        </div>
        {summary && <>
          <section aria-label={`${title} at a glance`} className="mt-12 grid gap-4 sm:grid-cols-3">
            {summary.map((item) => <div key={item.title} className="rounded-2xl border border-[#607B3F]/20 bg-white/50 p-5">
              <h2 className="text-base font-medium tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#505D49]">{item.description}</p>
            </div>)}
          </section>
          <nav aria-label="On this page" className="mt-10 rounded-2xl bg-[#607B3F]/5 p-6">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#607B3F]">On this page</h2>
            <ol className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              {sections.map((section, index) => <li key={section.title}><a href={`#section-${index + 1}`} className="rounded-sm text-[#505D49] underline decoration-[#607B3F]/30 underline-offset-4 hover:text-[#171812] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#607B3F]">{section.title}</a></li>)}
            </ol>
          </nav>
        </>}
        <div className="mt-12 space-y-12">
          {sections.map((section, index) => (
            <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-8 border-t border-[#607B3F]/20 pt-8">
              <h2 className="mb-4 text-2xl font-medium tracking-[-0.04em]">{section.title}</h2>
              <div className="space-y-4 text-[15px] leading-7 text-[#505D49]">{section.content}</div>
            </section>
          ))}
        </div>
        <div className="mt-16 border-t border-[#607B3F]/20 pt-8 text-sm text-[#607B3F]">
          <div className="flex flex-wrap gap-5">
            <Link href="/help" className="hover:underline">Help Center</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/community-guidelines" className="hover:underline">Community guidelines</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
