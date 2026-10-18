import { ArrowUpRight, Compass, Eye, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  { number: "01", title: "Find your kind of place.", overline: "Discover", text: "From lively cafés to tucked-away study spots, see what the city has to offer beyond the usual search results.", icon: Compass, background: "bg-[#DFE8D1]", color: "text-[#607B3F]" },
  { number: "02", title: "Feel the atmosphere.", overline: "Sense", text: "Get a sense of a place's social energy, so you can choose a moment that feels right for you.", icon: Sparkles, background: "bg-[#D5EE91]", color: "text-[#34492C]" },
  { number: "03", title: "Be present, privately.", overline: "Connect", text: "Make your presence discoverable when you want to. Real-world possibility without profile pictures or unwanted attention.", icon: Eye, background: "bg-[#D8E0D3]", color: "text-[#4B6240]" },
];

export function DiscoverSection() {
  return (
    <section className="bg-[#F7F4EE] px-6 pb-36 md:px-12 lg:px-20">
      <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
        <div><p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#607B3F]">Made for real life</p><h2 className="max-w-3xl text-[clamp(2.8rem,6vw,6rem)] font-medium leading-[1.02] tracking-[-0.065em]">A little more<br/>life, out there.</h2></div>
        <p className="max-w-sm text-base leading-relaxed text-[#65705D]">Three simple ways to make the everyday feel a little more connected.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <article key={feature.number} className={`group flex aspect-[4/4.5] flex-col justify-between overflow-hidden rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-2 md:p-8 ${feature.background}`}>
              <div className={`flex items-center justify-between text-sm font-semibold ${feature.color}`}><span>{feature.number} / {feature.overline}</span><ArrowUpRight size={21} /></div>
              <div className={`flex h-30 items-center justify-center ${feature.color}`}><Icon className="h-23 w-23 stroke-[0.8] opacity-65 transition-transform duration-500 group-hover:scale-110" /></div>
              <div><h3 className="max-w-sm text-[clamp(1.6rem,2.7vw,2.7rem)] leading-tight tracking-[-0.045em] text-[#171812]">{feature.title}</h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-[#48583C]">{feature.text}</p></div>
            </article>
          );
        })}
      </div>
      <div className="mt-10 flex items-center justify-center gap-2 text-sm text-[#65705D]"><ShieldCheck size={17} /> Designed around privacy and choice</div>
    </section>
  );
}
