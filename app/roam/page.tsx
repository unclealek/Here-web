import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { StudioNav } from "@/components/studio-nav";
import "../studio.css";

const description = "Roam is a social games app for friends and groups. Set up a Secret Santa exchange, invite your people, and draw names privately.";

export const metadata: Metadata = {
  title: "Roam — Social games for your group",
  description,
  applicationName: "Roam",
  openGraph: { title: "Roam — Social games for your group", description, type: "website" },
  icons: { icon: "/apps/roam.png" },
};

const steps = [
  { title: "Invite your people", description: "Invite friends to an exchange, or create a group you can play with again." },
  { title: "Plan your exchange", description: "Set a gift budget and pick a date so everyone knows what to plan for." },
  { title: "Draw names privately", description: "Each participant sees their own recipient in Roam when the draw is ready." },
];

export default function RoamPage() {
  return (
    <div className="studio">
      <StudioNav active="roam" />
      <main className="studio-wrap">
        <section className="studio-hero studio-hero-roam">
          <div>
            <p className="roam-name">Roam</p>
            <h1>Get the group together.</h1>
            <p>Roam is a social games app for friends and groups. It gives everyone one place to join in and see what’s next.</p>
          </div>
          <Image src="/apps/roam.png" alt="" width={256} height={256} className="roam-hero-icon" />
        </section>

        <section className="studio-apps" aria-labelledby="first-game">
          <h2 id="first-game">First up: Secret Santa</h2>
          <ol className="roam-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span aria-hidden="true">{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <footer className="studio-footer studio-wrap">
        <Link href="/">Back to HERE</Link>
      </footer>
    </div>
  );
}
