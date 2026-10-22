import type { Metadata } from "next";
import Link from "next/link";
import topics from "./topics.json";

export const metadata: Metadata = {
  title: "Help Center | HERE",
  description: "Help with HERE visibility, location, gatherings, safety and account settings.",
};

export default function HelpPage() {
  return <main className="min-h-screen bg-[#F7F4EE] text-[#171812]">
    <header className="border-b border-[#607B3F]/20 px-6 py-5 md:px-12">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
        <Link href="/" className="text-2xl font-semibold tracking-[-0.08em]">HERE.</Link>
        <Link href="/" className="text-sm text-[#607B3F] hover:underline">← Back to HERE</Link>
      </div>
    </header>
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-16 md:pt-24">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#607B3F]">A little guidance</p>
      <h1 className="mt-5 text-[clamp(3.2rem,9vw,6.5rem)] font-medium leading-[0.98] tracking-[-0.075em]">Help Center</h1>
      <p className="mt-7 text-lg leading-relaxed text-[#596653]">For your next moment HERE. Find answers about the app, your privacy and getting connected.</p>
      <div className="mt-12 space-y-4">
        {topics.map(topic => <details key={topic.question} className="group rounded-2xl border border-[#607B3F]/20 bg-white/50 open:bg-white/80">
          <summary className="cursor-pointer rounded-2xl p-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#607B3F]">
            <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-[#607B3F]">{topic.category}</span>
            <span className="text-lg font-medium tracking-tight">{topic.question}</span>
          </summary>
          <p className="px-6 pb-6 text-[15px] leading-7 text-[#505D49]">{topic.answer}</p>
        </details>)}
      </div>
      <nav aria-label="Policies" className="mt-12 flex flex-wrap gap-5 border-t border-[#607B3F]/20 pt-8 text-sm text-[#607B3F]">
        <Link href="/terms" className="hover:underline">Terms</Link>
        <Link href="/privacy" className="hover:underline">Privacy</Link>
        <Link href="/community-guidelines" className="hover:underline">Community guidelines</Link>
      </nav>
    </article>
  </main>;
}
