import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "HERE",
    category: "Social discovery",
    description:
      "A new way to notice places, discover what's happening nearby, and choose when to connect.",
    href: "/here",
    mark: "H",
  },
  {
    name: "Roam",
    category: "Social games",
    description:
      "A multiplayer platform for friends, families, and teams to play together, starting with Secret Santa.",
    href: "/roam",
    mark: "R",
  },
];

export default function MoreDataHome() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#171812]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link href="/" aria-label="More Data home" className="text-xl font-semibold tracking-[-0.08em]">
          more data<span className="text-[#607B3F]">.</span>
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm sm:gap-8">
          <a href="#about" className="hidden transition-colors hover:text-[#607B3F] sm:inline">About</a>
          <a href="#products" className="hidden transition-colors hover:text-[#607B3F] sm:inline">Products</a>
          <a href="mailto:support@moredata.app" className="rounded-full border border-[#171812]/15 px-4 py-2 transition-colors hover:border-[#607B3F] hover:text-[#607B3F]">
            Get in touch
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-16 sm:px-8 md:pt-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-12 lg:pb-32">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#607B3F]">
            Products by More Data
          </p>
          <h1 className="max-w-4xl text-[clamp(3.6rem,10vw,8.5rem)] font-medium leading-[0.9] tracking-[-0.09em]">
            Good ideas,<br />made for people.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#596653] md:text-xl">
            More Data creates digital products for shared experiences—from finding your place in the world to bringing your people together for a game.
          </p>
        </div>
        <div id="about" className="rounded-[2rem] border border-[#171812]/10 bg-white/70 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#607B3F]">What we do</p>
          <p className="mt-5 text-xl leading-8 tracking-[-0.03em]">
            We shape ideas into thoughtful apps and online experiences, with a focus on connection, play, and the moments people share.
          </p>
          <p className="mt-5 text-sm leading-6 text-[#596653]">
            More Data is the home for products including HERE and Roam.
          </p>
        </div>
      </section>

      <section id="products" className="border-t border-[#171812]/10 bg-white/50 px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#607B3F]">Our products</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.07em] md:text-6xl">Made to bring people together.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#596653]">
              Explore the products we&apos;re building. Each has its own purpose, community, and experience.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group flex min-h-72 flex-col justify-between rounded-[2rem] border border-[#171812]/10 bg-[#F7F4EE] p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#607B3F]">{product.category}</p>
                    <h3 className="mt-4 text-4xl font-semibold tracking-[-0.08em]">{product.name}</h3>
                  </div>
                  <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D5EE91] text-xl font-semibold text-[#324822]">
                    {product.mark}
                  </span>
                </div>
                <div className="mt-10 flex items-end justify-between gap-6">
                  <p className="max-w-md text-base leading-7 text-[#596653]">{product.description}</p>
                  <span className="shrink-0 rounded-full bg-[#171812] p-3 text-white transition-colors group-hover:bg-[#607B3F]">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex flex-col justify-between gap-4 bg-[#171812] px-5 py-8 text-sm text-white/65 sm:flex-row sm:items-center sm:px-8 lg:px-12">
        <p>© {new Date().getFullYear()} More Data</p>
        <a href="mailto:support@moredata.app" className="transition-colors hover:text-white">support@moredata.app</a>
      </footer>
    </main>
  );
}
