"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "The idea", href: "#idea" },
  { label: "How it works", href: "#how-it-works" },
  { label: "The experience", href: "#experience" },
  { label: "Our story", href: "#our-story" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 50);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2 rounded-full transition-all duration-500 ${scrolled || menuOpen ? "border border-[#607B3F]/10 bg-[#F7F4EE]/90 text-[#171812] shadow-[0_12px_35px_rgba(20,30,15,0.10)] backdrop-blur-xl" : "text-white"}`}
    >
      <div className="flex h-15 items-center justify-between px-5 md:px-7">
        <Link href="#top" aria-label="HERE home" className="flex shrink-0 items-center gap-1.5 text-xl font-semibold tracking-[-0.08em]">
          <span aria-hidden="true" className="h-2 w-2 border-b-2 border-l-2 border-current opacity-65" />
          HERE
          <span aria-hidden="true" className="h-2 w-2 border-r-2 border-t-2 border-current opacity-65" />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-[13px] font-medium opacity-75 transition-opacity hover:opacity-100">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="#experience" className={`hidden items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold transition-colors md:inline-flex ${scrolled ? "bg-[#607B3F] text-white hover:bg-[#4E6731]" : "bg-white text-[#171812] hover:bg-[#D5EE91]"}`}>
          Discover HERE <ArrowUpRight size={15} />
        </Link>
        <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} className="rounded-full p-2 md:hidden">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="flex flex-col gap-5 rounded-b-[2rem] px-7 pb-8 pt-5 md:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg font-medium">
              {link.label}
            </Link>
          ))}
          <Link href="#experience" onClick={() => setMenuOpen(false)} className="rounded-full bg-[#607B3F] px-5 py-3 text-center text-white">Discover HERE</Link>
        </nav>
      )}
    </header>
  );
}
