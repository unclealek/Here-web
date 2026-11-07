import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../release.css";

const supportEmail = "moredata.roam@support.com";

const pages = {
  privacy: "Privacy Policy",
  support: "Support",
  terms: "Terms of Use",
  "delete-account": "Delete your account",
} as const;

type PageKey = keyof typeof pages;
type Props = { params: Promise<{ info: string }> };

function pageKey(info: string): PageKey {
  if (!Object.hasOwn(pages, info)) notFound();
  return info as PageKey;
}

export function generateStaticParams() {
  return Object.keys(pages).map((info) => ({ info }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const key = pageKey((await params).info);
  return {
    title: `Roam | ${pages[key]}`,
    description: `${pages[key]} for the Roam app.`,
    robots: { index: true, follow: true },
  };
}

function Contact({ deletion = false }: { deletion?: boolean }) {
  return <a href={`mailto:${supportEmail}${deletion ? "?subject=Delete%20my%20Roam%20account" : ""}`}>{supportEmail}</a>;
}

function Content({ page }: { page: PageKey }) {
  switch (page) {
    case "support":
      return <>
        <p>Get help with sign-in, groups, and Secret Santa.</p>
        <h2>Contact Roam</h2>
        <p><Contact /></p>
        <p>Tell us what happened and which device you use. Keep passwords, invite codes, and gift assignments private.</p>
        <h2>Join a game</h2>
        <p>Ask your host for a current invite. For a group game, join the group first, then join the game.</p>
        <h2>Manage your account</h2>
        <p>Open Profile → Privacy &amp; account in Roam. See <Link href="/roam/delete-account">account deletion</Link> for more help.</p>
      </>;
    case "privacy":
      return <>
        <p>This policy explains how Roam uses your information. Roam is a MoreData app.</p>
        <h2>What Roam collects and why</h2>
        <ul>
          <li>Apple or Google sign-in information, an account identifier, and your display name to sign you in and identify you to the people you play with.</li>
          <li>Group and game details you enter, memberships, invite records, gift assignments, activity and rewards to run your games and show your progress.</li>
          <li>Notification settings and, if you enable push alerts, a device token to send those alerts.</li>
        </ul>
        <h2>Who sees it</h2>
        <p>People in your groups and games can see your display name. Invite previews show limited group or game details. Roam reveals each Secret Santa assignment only to the person who drew that recipient.</p>
        <p>Supabase provides account and app data services. Apple and Google handle their sign-in services. Expo and platform push services deliver enabled device alerts. Providers receive the information needed for their service.</p>
        <h2>Retention and your choices</h2>
        <p>Roam keeps account and game information while it is needed to provide the service. You can change your name or notification settings in Profile and turn off push access in device settings.</p>
        <p><Link href="/roam/delete-account">Deleting your account</Link> removes the account and profile. A matched gift exchange may retain an anonymous membership reference to keep existing assignments intact.</p>
        <h2>Privacy requests</h2>
        <p>Contact <Contact /> to ask about your data or request access, correction or deletion.</p>
      </>;
    case "terms":
      return <>
        <p>Roam is a MoreData app.</p>
        <h2>Play respectfully</h2>
        <p>Keep your account secure and use Roam lawfully. Keep private invite codes and gift assignments within the intended group. Do not harass, impersonate, spam, or try to access private information without permission.</p>
        <h2>Gift exchanges</h2>
        <p>Players and hosts arrange gifts themselves. Suggested budgets are guidance. Roam does not collect payments for gifts or arrange delivery.</p>
        <h2>Leaving Roam</h2>
        <p>You can leave groups and <Link href="/roam/delete-account">delete your account</Link>. If you own a group, you may need to hand it over first.</p>
        <h2>Questions and reports</h2>
        <p><Contact /></p>
      </>;
    case "delete-account":
      return <>
        <p>You can delete your Roam account from the app.</p>
        <ol>
          <li>Open <strong>Profile → Privacy &amp; account</strong>.</li>
          <li>Tap <strong>Delete account</strong>.</li>
          <li>Follow the confirmation steps.</li>
        </ol>
        <p>A vice owner can take over your groups. If there is no vice owner, arrange a handover first. A group with games cannot be deleted.</p>
        <h2>Can’t open Roam?</h2>
        <p>Request deletion with the subject “Delete my Roam account.” Tell us how you sign in. We may need to confirm that you own the account. Never send passwords or sign-in codes.</p>
        <p><Contact deletion /></p>
        <h2>What is removed</h2>
        <p>Deletion permanently removes your account and profile. A matched exchange may keep a reference without your name or email so existing assignments stay intact.</p>
      </>;
  }
}

export default async function RoamInformation({ params }: Props) {
  const page = pageKey((await params).info);
  return (
    <div className="roam-release">
      <header><Link href="/roam">Roam</Link><Link href="/roam/support">Get help</Link></header>
      <main>
        <h1>{pages[page]}</h1>
        <Content page={page} />
      </main>
      <footer aria-label="Roam information">
        {Object.entries(pages).map(([key, title]) => (
          <Link key={key} href={`/roam/${key}`} aria-current={key === page ? "page" : undefined}>{title}</Link>
        ))}
      </footer>
    </div>
  );
}
