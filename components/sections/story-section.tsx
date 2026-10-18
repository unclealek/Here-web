import Image from "next/image";

export function StorySection() {
  return <section id="our-story" className="relative overflow-hidden bg-[#1C281D] text-white">
    <div className="mx-auto grid max-w-[1700px] md:grid-cols-[0.95fr_1.05fr]">
      <div className="flex flex-col justify-center px-6 py-28 md:px-14 md:py-40 lg:px-24"><p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#D5EE91]">Why HERE exists</p><h2 className="max-w-2xl text-[clamp(2.6rem,5.3vw,5.9rem)] leading-[1.07] tracking-[-0.07em]">Surrounded by people.<br/><span className="text-[#D5EE91]">Missing the moment.</span></h2><p className="mt-8 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">Cities are full of places and people we walk past every day. HERE is an invitation to stop passing through and start being part of what&apos;s around us.</p><div className="mt-12 flex items-center gap-4 border-t border-white/15 pt-7"><span className="text-3xl font-medium tracking-[-0.1em]">HERE.</span><span className="text-xs uppercase leading-relaxed tracking-[0.18em] text-[#D5EE91]">People.<br/>Places.<br/>Presence.</span></div></div>
      <div className="relative min-h-[420px] overflow-hidden md:min-h-[750px]"><Image src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1600&q=85" alt="People gathered at a table enjoying the moment together" fill unoptimized sizes="(max-width: 768px) 100vw, 55vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-[#1C281D]/50 to-transparent" /><div className="absolute bottom-8 left-8 right-8 text-xs uppercase tracking-[0.2em] text-white/80">The good stuff happens in real life.</div></div>
    </div>
  </section>;
}
