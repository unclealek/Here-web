"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { EyeOff, MapPin, Radio, ShieldCheck } from "lucide-react";

export function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const update = useCallback(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setProgress(1); return; }
    const box = ref.current.getBoundingClientRect();
    const travel = Math.max(1, ref.current.offsetHeight - window.innerHeight);
    setProgress(Math.min(1, Math.max(0, -box.top / travel)));
  }, []);
  useEffect(() => {
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [update]);

  return (
    <section id="how-it-works" className="bg-[#F7F4EE]">
      <div ref={ref} className="relative h-[175vh] motion-reduce:h-auto">
        <div className="sticky top-0 flex h-[100svh] min-h-[560px] items-center justify-center overflow-hidden motion-reduce:relative">
          <h2 className="pointer-events-none absolute z-0 px-6 text-center text-[clamp(3rem,9vw,10rem)] font-medium leading-none tracking-[-0.085em] text-[#171812]" style={{ opacity: 1 - progress }}>
            Show up.<br />Stay you.
          </h2>
          <div className="relative z-10 grid w-full max-w-7xl grid-cols-2 gap-3 px-4 md:gap-6 md:px-12">
            <div className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-[#607B3F] p-5 text-white shadow-2xl md:aspect-[4/3] md:rounded-[2rem] md:p-10" style={{ transform: `translate3d(${-100 * (1 - progress)}%, 0, 0)` }}>
              <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-white/75"><Radio size={15} /> Presence</span>
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-[#D5EE91]/30 md:h-44 md:w-44">
                <div className="flex h-[75%] w-[75%] items-center justify-center rounded-full border border-[#D5EE91]/60"><div className="h-9 w-9 rounded-full bg-[#D5EE91] shadow-[0_0_38px_rgba(213,238,145,.55)] md:h-12 md:w-12" /></div>
              </div>
              <div><h3 className="text-[clamp(1.3rem,3vw,2.6rem)] font-medium leading-tight tracking-tight">Go visible.<br/>Be discoverable.</h3><p className="mt-3 hidden max-w-sm text-sm leading-relaxed text-white/75 md:block">Let others know someone is open to connection nearby — without revealing who you are.</p></div>
            </div>
            <div className="relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-[1.5rem] border border-[#D7DDC8] bg-[#E6EED8] p-5 text-[#171812] shadow-2xl md:aspect-[4/3] md:rounded-[2rem] md:p-10" style={{ transform: `translate3d(${100 * (1 - progress)}%, 0, 0)` }}>
              <span className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#607B3F]"><ShieldCheck size={15} /> In control</span>
              <div className="mx-auto flex w-full max-w-60 flex-col gap-3 rounded-2xl border border-white/80 bg-white/70 p-4 shadow-lg backdrop-blur-xl">
                <span className="flex items-center gap-2 text-xs font-semibold text-[#34452D]"><MapPin size={14} /> Near you</span>
                <span className="flex items-center gap-2 rounded-xl bg-[#F7F4EE] p-3 text-xs"><span className="h-2 w-2 rounded-full bg-[#607B3F]" /> Someone is here</span>
                <span className="flex items-center gap-2 text-xs text-[#68765D]"><EyeOff size={14} /> Identity stays private</span>
              </div>
              <div><h3 className="text-[clamp(1.3rem,3vw,2.6rem)] font-medium leading-tight tracking-tight">Stay anonymous.<br/>Stay in control.</h3><p className="mt-3 hidden max-w-sm text-sm leading-relaxed text-[#68765D] md:block">No profile photos. No public identity. You choose when and where you are visible.</p></div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-6 pb-36 pt-14 text-center md:pb-48">
        <p className="mx-auto max-w-3xl text-[clamp(1.6rem,3.5vw,3.25rem)] leading-snug tracking-[-0.04em] text-[#65705D]">Not another feed. Not a dating app. <span className="text-[#171812]">A gentle nudge toward the people and places already around you.</span></p>
      </div>
    </section>
  );
}
