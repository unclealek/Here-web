import { Coffee, Headphones, Lightbulb, Shield, Users, ArrowUpRight } from "lucide-react";

const vibes = [
  { icon: Coffee, name: "Coffee & a conversation", sub: "The little everyday moments" },
  { icon: Lightbulb, name: "Ideas & inspiration", sub: "Meet the unexpected" },
  { icon: Headphones, name: "Quiet company", sub: "Together, at your own pace" },
  { icon: Users, name: "Your next community", sub: "Find your people, naturally" },
];

export function VibesSection() {
  return (
    <section className="bg-[#E8EDDD] px-6 py-28 text-[#171812] md:px-12 md:py-36 lg:px-20">
      <div className="mx-auto max-w-[1440px]"><div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="mb-6 text-xs font-semibold uppercase tracking-[0.23em] text-[#607B3F]">Made for many kinds of moments</p><h2 className="max-w-3xl text-[clamp(2.6rem,6vw,6rem)] leading-[1.03] tracking-[-0.07em]">There&apos;s more than<br/>one way to be HERE.</h2></div><p className="max-w-sm text-base leading-relaxed text-[#66735F]">A shared space is sometimes all you need. Whether you want to explore, think, study, or simply feel part of something.</p></div>
      <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[#CED8C2] bg-[#CED8C2] md:grid-cols-2">{vibes.map(({icon:Icon,name,sub}) => <div key={name} className="group flex min-h-56 flex-col justify-between bg-[#F7F4EE] p-8 transition-colors duration-300 hover:bg-[#D5EE91] md:min-h-72 md:p-10"><div className="flex justify-between"><Icon size={31} strokeWidth={1.3}/><ArrowUpRight className="opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={21}/></div><div><h3 className="text-[clamp(1.5rem,2.8vw,2.6rem)] tracking-[-0.04em]">{name}</h3><p className="mt-2 text-sm text-[#69775F]">{sub}</p></div></div>)}</div>
      <div className="mt-7 flex items-center gap-2 text-xs text-[#65705D]"><Shield size={14} /> HERE is for social discovery, not in-app chatting or dating.</div>
      </div>
    </section>
  );
}
