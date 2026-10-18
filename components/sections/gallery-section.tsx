"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const moments = [
  { img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1200&q=82", place: "The café around the corner", note: "Sometimes all it takes is a change of scene.", label: "01 / Places" },
  { img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&q=82", place: "A room full of possibility", note: "Being together starts by showing up.", label: "02 / Moments" },
  { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=82", place: "The evening unfolding", note: "Find the energy you're looking for.", label: "03 / Atmosphere" },
  { img: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=82", place: "Your familiar new spot", note: "The city feels smaller when you explore it.", label: "04 / Discovery" },
  { img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1200&q=82", place: "An unexpected conversation", note: "The next great moment might be near you.", label: "05 / Connection" },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("150vh");
  const [translateX, setTranslateX] = useState(0);

  const recalc = useCallback(() => {
    if (!trackRef.current || !sectionRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setHeight("auto"); setTranslateX(0); return; }
    const extraWidth = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
    setHeight(`${window.innerHeight + extraWidth}px`);
    const traveled = Math.max(0, -sectionRef.current.getBoundingClientRect().top);
    setTranslateX(-Math.min(extraWidth, traveled));
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(recalc); };
    recalc();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, [recalc]);

  return (
    <section id="moments" className="bg-[#F7F4EE] py-28">
      <div className="mb-16 flex flex-col justify-between gap-5 px-6 md:flex-row md:items-end md:px-12 lg:px-20"><div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#607B3F]">A city worth stepping into</p><h2 className="text-[clamp(2.8rem,6vw,6.3rem)] font-medium leading-[1.04] tracking-[-0.067em]">Moments happen<br/><span className="text-[#607B3F]">out there.</span></h2></div><p className="max-w-xs text-base leading-relaxed text-[#65705D]">A little curiosity can change an ordinary day. Follow it.</p></div>
      <div ref={sectionRef} className="relative" style={{ height }}>
        <div className="sticky top-0 flex h-[100svh] min-h-[590px] items-center overflow-hidden motion-reduce:relative motion-reduce:overflow-x-auto">
          <div ref={trackRef} className="flex gap-5 px-6 will-change-transform md:gap-7 md:px-12 lg:px-20" style={{ transform:`translate3d(${translateX}px,0,0)` }}>
            {moments.map((moment, index) => (
              <article key={moment.label} className="group relative h-[70svh] min-h-[460px] w-[82vw] max-w-[680px] shrink-0 overflow-hidden rounded-[1.75rem] bg-[#607B3F] md:w-[53vw] md:rounded-[2rem]">
                <Image src={moment.img} alt={moment.place} fill unoptimized sizes="(max-width: 768px) 82vw, 53vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80" />
                <div className="absolute inset-x-0 top-0 flex justify-between p-7 text-sm font-medium text-white md:p-9"><span>HERE.</span><span className="text-xs uppercase tracking-[0.16em]">{moment.label}</span></div>
                <div className="absolute bottom-0 left-0 max-w-lg p-7 text-white md:p-10"><h3 className="text-[clamp(1.9rem,3.4vw,3.5rem)] leading-[1.08] tracking-[-0.055em]">{moment.place}</h3><p className="mt-3 text-sm text-white/75 md:text-base">{moment.note}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3 px-6 text-right text-xs uppercase tracking-[0.18em] text-[#65705D] md:px-12 lg:px-20">Scroll to explore the moments ↗</div>
    </section>
  );
}
