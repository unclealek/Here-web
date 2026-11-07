import Link from "next/link";

const links = [
  { href: "/roam/privacy", title: "Privacy Policy", description: "How Roam handles account data, group content, notifications, and privacy requests." },
  { href: "/roam/terms", title: "Terms of Use", description: "Service rules, group participation, game mechanics, and account responsibilities." },
  { href: "/roam/community-guidelines", title: "Community Guidelines", description: "How to participate respectfully and what behavior is not allowed in Roam groups." },
  { href: "/roam/support", title: "Support", description: "Help with login, groups, Secret Santa participation, notifications, and report flows." },
  { href: "/roam/delete-account", title: "Delete account", description: "How to request personal account removal and what to check before deleting a group or session." },
];

export default function RoamLandingPage() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#171812]">
      <header className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-3 rounded-full border border-[#607B3F]/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#324822]">
          <span className="inline-flex h-2.5 w-2.5 border-b-2 border-l-2 border-[#607B3F]" aria-hidden="true" />
          Roam
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="text-4xl font-semibold tracking-[-0.07em] md:text-6xl lg:text-7xl">
              Social multiplayer, designed for friends, families, and teams.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#171812]/75">
              Roam brings people together around games, group coordination, and seasonal activities such as Secret Santa while keeping participation, privacy, and trust at the center of the experience.
            </p>
          </div>

          <div className="rounded-[32px] border border-[#171812]/10 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,12,0.04)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#607B3F]">Roam basics</p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#171812]/75">
              <li>• Create or join groups for shared experiences.</li>
              <li>• Participate in games like Secret Santa and future Roam activities.</li>
              <li>• Manage account settings, privacy preferences, and support requests.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="group rounded-[28px] border border-[#171812]/10 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,12,0.03)] transition-transform duration-200 hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#607B3F]">Roam</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.05em]">{link.title}</h2>
              <p className="mt-3 text-sm leading-6 text-[#171812]/70">{link.description}</p>
              <span className="mt-6 inline-flex text-sm font-medium text-[#324822] group-hover:text-[#607B3F]">
                Open page →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
