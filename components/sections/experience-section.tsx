"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Coffee, Compass, MapPin, Shield, Sparkles, Users } from "lucide-react";

const stages = [
  { n: "01", tag: "Look around", title: "Find the place.", body: "Discover the cafés, corners, and places that make your city feel alive.", icon: Compass },
  { n: "02", tag: "Read the room", title: "Feel the moment.", body: "Get a feel for a venue’s atmosphere before you decide to head out.", icon: Sparkles },
  { n: "03", tag: "Your call", title: "Choose to be HERE.", body: "Turn on visibility only when you want. Your presence, never your identity.", icon: Shield },
];

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setProgress(0); return; }
      const rect = sectionRef.current.getBoundingClientRect();
      const distance = Math.max(1, rect.height - window.innerHeight);
      setProgress(Math.max(0, Math.min(1, -rect.top / distance)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = Math.min(2, Math.floor(progress * 3));

  return (
    <section id="experience" ref={sectionRef} className="relative h-[300vh] bg-[#172218] text-white motion-reduce:h-auto">
      <div className="sticky top-0 flex h-[100svh] min-h-[620px] items-center overflow-hidden motion-reduce:relative motion-reduce:h-auto">
        <div aria-hidden className="pointer-events-none absolute -right-48 top-0 h-[820px] w-[820px] rounded-full bg-[radial-gradient(circle,rgba(142,180,104,0.23),transparent_67%)]" />
        <div className="mx-auto grid h-full w-full max-w-[1500px] items-center gap-8 px-6 py-20 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-12 lg:px-20">
          <div className="relative z-10 flex h-full flex-col justify-center">
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.27em] text-[#D5EE91]">A different kind of social</p>
            <h2 className="max-w-[600px] text-[clamp(2.6rem,5.5vw,6.1rem)] font-medium leading-[1.04] tracking-[-0.07em]">The world is<br /><span className="text-[#D5EE91]">right here.</span></h2>
            <p className="mt-7 max-w-md text-base leading-relaxed text-white/60 md:text-lg">No swiping. No profiles to perform for. Just a better way to discover the world on your doorstep.</p>
            <div className="mt-12 space-y-2">
              {stages.map((stage, i) => {
                const Icon = stage.icon;
                return (
                  <div key={stage.n} className={`rounded-2xl border px-5 py-4 transition-all duration-500 ${active === i ? "border-[#D5EE91]/45 bg-white/10" : "border-white/10 bg-transparent opacity-55"}`}>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-[#D5EE91]">{stage.n}</span>
                      <Icon size={20} strokeWidth={1.5}/>
                      <div className="min-w-0 flex-1"><span className="block text-[10px] uppercase tracking-[0.18em] text-white/50">{stage.tag}</span><span className="text-base font-medium md:text-lg">{stage.title}</span></div>
                      {active === i && <ArrowUpRight className="shrink-0 text-[#D5EE91]" size={18} />}
                    </div>
                    {active === i && <p className="mt-3 pl-[57px] text-sm leading-relaxed text-white/65">{stage.body}</p>}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative z-10 flex items-center justify-center md:h-full">
            <div className="relative w-full max-w-[460px]">
              <div className="absolute -inset-6 rounded-[3rem] bg-[#D5EE91]/5 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-[#F7F4EE] p-5 text-[#171812] shadow-[0_30px_100px_rgba(0,0,0,.42)] md:p-7">
                <div className="flex items-center justify-between"><span className="text-[13px] font-bold tracking-[-0.07em]">HERE.</span><span className="flex items-center gap-2 rounded-full bg-[#DDE8CF] px-3 py-1.5 text-[11px] font-medium"><span className="h-1.5 w-1.5 rounded-full bg-[#607B3F]" /> Exploring</span></div>
                <div className="mt-10"><span className="text-[11px] uppercase tracking-widest text-[#66735B]">Your city, in the moment</span><h3 className="mt-1 text-[32px] font-semibold leading-[1.05] tracking-[-0.06em]">Somewhere good<br />is close by.</h3></div>
                <div className="relative mt-7 flex h-[230px] items-center justify-center overflow-hidden rounded-[1.5rem] border border-[#D8DEC9] bg-[#E5EBD9] md:h-[280px]">
                  <div className="absolute inset-0 opacity-45" style={{backgroundImage:"linear-gradient(#bbc9b1 1px,transparent 1px),linear-gradient(90deg,#bbc9b1 1px,transparent 1px)", backgroundSize:"42px 42px", transform:"rotate(-13deg) scale(1.4)"}} />
                  <div className="absolute left-[18%] top-[20%] flex h-10 w-10 items-center justify-center rounded-full border border-white bg-[#FBF7F5] shadow-lg"><Coffee size={18} /></div>
                  <div className="absolute right-[19%] top-[19%] flex h-10 w-10 items-center justify-center rounded-full border border-white bg-[#FBF7F5] shadow-lg"><Users size={18} /></div>
                  <div className="absolute bottom-[14%] right-[22%] flex h-10 w-10 items-center justify-center rounded-full border border-white bg-[#FBF7F5] shadow-lg"><MapPin size={18} /></div>
                  <div className="absolute flex h-44 w-44 items-center justify-center rounded-full border border-[#607B3F]/20 bg-[#607B3F]/8"><div className="flex h-28 w-28 items-center justify-center rounded-full border border-[#607B3F]/35 bg-[#607B3F]/10"><div className="h-5 w-5 rounded-full border-4 border-white bg-[#607B3F] shadow-[0_0_24px_#607B3F]" /></div></div>
                  <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-3 py-2 text-[11px] font-medium shadow-lg backdrop-blur-xl"><span className="h-2 w-2 rounded-full bg-[#607B3F]" /> Approximate area only</div>
                </div>
                <div className="mt-4 flex items-center justify-between rounded-[1.25rem] border border-[#DFE4D4] bg-white p-4"><div><span className="text-xs font-semibold">Presence is a choice</span><p className="mt-1 text-[11px] text-[#6C7464]">Anonymous by design</p></div><div className={`relative h-8 w-14 rounded-full transition-colors duration-500 ${active === 2 ? "bg-[#607B3F]" : "bg-[#DCE3D6]"}`}><div className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all duration-500 ${active === 2 ? "left-7" : "left-1"}`} /></div></div>
                <p className="mt-4 text-center text-[10px] tracking-wide text-[#8B9184]">Illustrative concept · No personal locations shown</p>
              </div>
              <div className="absolute -bottom-3 -right-6 hidden rounded-full border border-white/20 bg-white/15 px-5 py-3 text-xs text-white shadow-2xl backdrop-blur-xl md:block">People. Places. Presence.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
