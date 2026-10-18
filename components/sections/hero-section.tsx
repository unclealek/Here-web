"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const photographs = [
  { src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=900&q=85", alt: "A welcoming cafe", side: "left" },
  { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=85", alt: "Warm restaurant interior", side: "left" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=900&q=85", alt: "A lively gathering", side: "right" },
  { src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&q=85", alt: "Neighborhood coffee shop", side: "right" },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setProgress(0); return; }
      const scrolled = -ref.current.getBoundingClientRect().top;
      setProgress(Math.min(1, Math.max(0, scrolled / (window.innerHeight * 1.8))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const imageProgress = Math.max(0, Math.min(1, (progress - 0.2) / 0.8));
  const titleOpacity = Math.max(0, 1 - progress / 0.2);
  const gap = imageProgress * 16;
  const width = 100 - imageProgress * 58;
  const sideWidth = imageProgress * 22;
  const borderRadius = imageProgress * 23;

  return (
    <section ref={ref} id="top" className="relative bg-[#F7F4EE]">
      <div className="sticky top-0 h-[100svh] min-h-[570px] overflow-hidden motion-reduce:relative">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-full w-full items-stretch justify-center" style={{ gap: `${gap}px`, padding: `${imageProgress * 16}px`, paddingBottom: `${imageProgress * 16}px` }}>
            {(["left", "center", "right"] as const).map((column) => column === "center" ? (
              <div key="center" className="relative shrink-0 overflow-hidden bg-[#35482A]" style={{ width: `${width}%`, height: `${100 - imageProgress * 22}%`, borderRadius: `${borderRadius}px` }}>
                <Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=2000&q=88" alt="Inviting, warmly lit restaurant, where everyday connections can begin" fill priority unoptimized className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/5 to-black/60" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 pt-32 text-white md:p-12 md:pt-36" style={{ opacity: titleOpacity }}>
                  <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.20em] md:text-sm">
                    <MapPin size={15} /> Presence over profiles. Real life over scrolling.
                  </div>
                  <div>
                    <h1 className="text-[26vw] font-semibold leading-[0.72] tracking-[-0.105em] md:text-[23vw]">HERE.</h1>
                    <div className="mt-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
                      <p className="max-w-md text-lg leading-snug md:text-2xl">Be where life happens.</p>
                      <Link href="#idea" className="inline-flex items-center gap-2 rounded-full border border-white/45 bg-white/15 px-5 py-3 text-sm font-medium backdrop-blur-xl transition-colors hover:bg-white/30">
                        See what HERE is <ArrowDownRight size={17} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={column} className="flex shrink-0 flex-col" style={{ width: `${sideWidth}%`, gap: `${gap}px`, opacity: imageProgress, transform: `translateX(${column === "left" ? -100 + imageProgress * 100 : 100 - imageProgress * 100}%)` }}>
                {photographs.filter((image) => image.side === column).map((image) => (
                  <div key={image.src} className="relative min-h-0 flex-1 overflow-hidden bg-[#607B3F]" style={{ borderRadius: `${borderRadius}px` }}>
                    <Image src={image.src} alt={image.alt} fill unoptimized className="object-cover" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[180vh] motion-reduce:hidden" aria-hidden="true" />
      <div id="idea" className="px-6 pb-36 pt-28 text-center md:px-12 md:pb-44 md:pt-40">
        <p className="mx-auto mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#607B3F]">The world is already happening</p>
        <h2 className="mx-auto max-w-4xl text-[clamp(2.1rem,5vw,5rem)] font-medium leading-[1.12] tracking-[-0.055em] text-[#171812]">
          The best connections don&apos;t begin with a swipe. <span className="text-[#607B3F]">They begin with being there.</span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-[#65705D] md:text-lg">HERE helps you discover the places around you, sense what&apos;s happening, and be open to real-world connection — on your terms.</p>
      </div>
    </section>
  );
}
