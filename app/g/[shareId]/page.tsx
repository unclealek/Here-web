import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, LockKeyhole, Smartphone } from "lucide-react";
import { InviteActions } from "./invite-actions";

// All invitation metadata is deliberately generic. No Supabase query is made here.
// This page never discloses event titles, venues, times, attendance or status.
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "You've been invited | HERE",
  description: "Someone invited you to a gathering on HERE. Open the app to see the details.",
  robots: { index: false, follow: false, noarchive: true },
  openGraph: {
    title: "You've been invited to HERE",
    description: "Open the HERE app to see your gathering invitation.",
    type: "website",
  },
};

function isInvitationCode(value: string) {
  if (!/^[A-Za-z0-9_-]{22}$/.test(value)) return false;
  const bytes = Buffer.from(value, "base64url");
  return bytes.length === 16 && bytes.toString("base64url") === value;
}

type Props = { params: Promise<{ shareId: string }> };

export default async function GatheringPage({ params }: Props) {
  const { shareId } = await params;
  const valid = isInvitationCode(shareId);
  // A custom-scheme fallback for browsers that didn't automatically open a verified Universal/App Link.
  // Matches LEFT's existing parser: host "g" and a canonical 22-character code.
  const appUrl = valid ? `left://g/${shareId}` : null;
  const iosUrl = process.env.NEXT_PUBLIC_IOS_APP_URL || null;
  const androidUrl = process.env.NEXT_PUBLIC_ANDROID_APP_URL || null;

  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#171812]">
      <header className="border-b border-[#607B3F]/20 px-6 py-5 md:px-12">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link href="/" className="text-2xl font-semibold tracking-[-0.08em]">HERE.</Link>
          <Link href="/" className="flex items-center gap-2 text-sm text-[#607B3F]"><ArrowLeft size={16} /> About HERE</Link>
        </div>
      </header>
      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center md:py-28">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#D5EE91]/70 text-[#40572A]">
          <Smartphone size={34} strokeWidth={1.6} />
        </div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[.25em] text-[#607B3F]">A little more happens HERE</p>
        <h1 className="max-w-2xl text-[clamp(3.1rem,8vw,6rem)] font-medium leading-[1.03] tracking-[-.065em]">
          {valid ? "You've been invited." : "This link doesn't look right."}
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-[#586450]">
          {valid
            ? "A gathering is waiting for you in HERE. Open the app to see where, when, and what it's all about."
            : "Check the invitation link or ask the host to share it again."}
        </p>
        {valid && (
          <div className="mt-10 w-full max-w-lg rounded-3xl border border-[#607B3F]/20 bg-white/90 p-6 shadow-sm md:p-8">
            <InviteActions
              appUrl={appUrl!}
              iosUrl={iosUrl}
              androidUrl={androidUrl}
              shareId={shareId}
            />
          </div>
        )}
        <div className="mt-10 flex max-w-md items-start gap-3 rounded-2xl bg-[#D5EE91]/30 p-5 text-left text-sm leading-6 text-[#4B5C3C]">
          <LockKeyhole size={20} className="mt-1 shrink-0" />
          <span>Gathering details are only shown inside the HERE app. This website does not display the venue, time, or attendees.</span>
        </div>
        <div className="mt-16 flex flex-wrap justify-center gap-5 border-t border-[#607B3F]/20 pt-6 text-sm text-[#607B3F]">
          <Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/community-guidelines">Community guidelines</Link>
        </div>
      </section>
    </main>
  );
}
