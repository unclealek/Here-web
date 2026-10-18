import { ArrowDownRight, EyeOff, MapPin, Radar, ShieldCheck } from "lucide-react";

const principles = [
  { icon: EyeOff, title: "No profile photos", body: "What makes you interesting isn't a picture on a screen." },
  { icon: MapPin, title: "No exact location shared", body: "Discover a nearby area or venue — not somebody's coordinates." },
  { icon: ShieldCheck, title: "Visibility on your terms", body: "Choose when to appear. Go invisible whenever you want." },
];

export function EditorialSection() {
  return (
    <section id="privacy" className="bg-[#F7F4EE] px-6 py-28 text-[#171812] md:px-12 md:py-40 lg:px-20">
      <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
        <div><p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.23em] text-[#607B3F]"><Radar size={16}/> Thoughtful by design</p><h2 className="max-w-xl text-[clamp(2.8rem,6vw,6rem)] leading-[1.02] tracking-[-0.07em]">Less exposure.<br/><span className="text-[#607B3F]">More life.</span></h2><p className="mt-8 max-w-md text-base leading-relaxed text-[#65705D] md:text-lg">HERE is built around a simple idea: you should be able to enjoy the energy of a place without feeling like you're putting your private life on display.</p><a className="mt-9 inline-flex items-center gap-2 text-sm font-semibold underline decoration-[#607B3F] underline-offset-8" href="#join">A new way to be social <ArrowDownRight size={16}/></a></div>
        <div className="divide-y divide-[#D5DCCF] border-t border-[#D5DCCF]">{principles.map(({icon:Icon,title,body},i) => <div key={title} className="grid grid-cols-[38px_1fr] gap-5 py-8 md:py-10"><Icon className="mt-1 text-[#607B3F]" size={27} strokeWidth={1.3}/><div><div className="flex items-baseline justify-between gap-3"><h3 className="text-2xl font-medium tracking-[-0.04em] md:text-3xl">{title}</h3><span className="text-xs text-[#899583]">0{i+1}</span></div><p className="mt-3 max-w-md text-sm leading-relaxed text-[#64715D] md:text-base">{body}</p></div></div>)}</div>
      </div>
    </section>
  );
}
