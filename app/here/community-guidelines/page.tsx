import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Community Guidelines (Draft) | HERE",
  description: "Pre-launch community guidelines for respectful, safe use of HERE.",
  robots: { index: false, follow: false },
};

export default function CommunityGuidelinesPage() {
  return <LegalShell
    eyebrow="Good company starts here"
    title="Community Guidelines"
    intro="HERE is for real places and genuine social discovery. These proposed guidelines set clear expectations for everyone who participates."
    summary={[
      { title: "Respect boundaries", description: "An invitation to connect is always optional. Give people space and accept a no." },
      { title: "Protect each other", description: "Keep other people’s identity, location and attendance private unless they choose to share." },
      { title: "Be a thoughtful host", description: "Set clear expectations, describe costs honestly and respect the place you meet." },
    ]}
    sections={[
      { title: "1. Respect people and boundaries", content: <><p>Be courteous. Respect personal space and a person's choice not to interact. No harassment, intimidation, stalking, threats, hateful conduct or unwanted sexual behaviour. HERE is not intended as a dating or matchmaking platform.</p></> },
      { title: "2. Protect privacy", content: <><p>Do not reveal another person's identity, home address, contact details, live location, photos or attendance without consent. Never use HERE to track someone who has hidden their presence or opted out of discovery.</p></> },
      { title: "3. Keep gatherings safe and truthful", content: <><p>Describe gatherings accurately, including the venue, date and expectations. Only create gatherings you have the right to organise. Respect venue staff, legal capacity limits and venue rules. Do not claim a gathering is sponsored by a location unless it is.</p><p>Use shareable invitations responsibly. Anyone who receives a public link may be able to forward it, so keep sensitive details out of the invitation.</p></> },
      { title: "4. No scams or impersonation", content: <><p>Don't impersonate people, misrepresent affiliations, solicit money deceptively, distribute malware or promote illegal activity. Avoid unsolicited advertising and repeated invitations.</p></> },
      { title: "5. Adults only", content: <><p>HERE is intended for people aged 18 and older. Do not encourage minors to participate or create an account on someone else's behalf.</p></> },
      { title: "6. Reporting and enforcement", content: <><p>Users should be able to report abusive profiles, inappropriate gatherings or safety concerns. HERE may investigate, remove content, restrict features or suspend accounts as appropriate. <strong>Before launch:</strong> confirm an accessible reporting workflow, safety contact and appeals mechanism.</p></> },
      { title: "7. Offline safety", content: <><p>Meet in public places when possible, tell someone you trust about plans, and leave whenever you feel uncomfortable. In an emergency, contact local emergency services; HERE cannot provide emergency assistance.</p></> },
    ]}
  />;
}
