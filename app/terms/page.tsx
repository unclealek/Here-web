import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Use (Draft) | HERE",
  description: "Pre-launch draft of HERE's Terms of Use. Not final until reviewed.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return <LegalShell
    eyebrow="Respectful, real-world connection"
    title="Terms of Use"
    intro="These proposed terms outline the rules for using HERE, including social discovery, venue presence and small gatherings."
    summary={[
      { title: "For adults", description: "HERE is intended for people aged 18 and over. Keep your account secure and your information accurate." },
      { title: "Gather responsibly", description: "Share accurate plans, respect venue rules and keep private information out of invitations." },
      { title: "Respect the community", description: "Follow the community guidelines and respect everyone’s choice about when and how to connect." },
    ]}
    sections={[
      { title: "1. About HERE", content: <><p>HERE is being developed as a social-discovery service that helps adults discover public places and optional opportunities for connection. HERE is not a dating service, emergency service, or guarantee of anyone's identity, location, or intentions.</p><p><strong>Before launch:</strong> Confirm the full legal name, registered address and contact email of the company operating HERE. The intended operator is More Data, subject to legal confirmation.</p></> },
      { title: "2. Eligibility and accounts", content: <><p>HERE is intended for people aged 18 and over. Users may sign in using supported identity providers such as Apple or Google. They are responsible for keeping access to their account secure and for using accurate account information.</p></> },
      { title: "3. Presence and gatherings", content: <><p>Joining a venue's social presence or creating a gathering is voluntary. Hosts must share accurate, lawful event details; respect venue rules; and avoid implying a venue endorses a gathering without permission.</p><p>A public share link may allow anyone holding the URL to see the limited gathering details chosen for sharing. Hosts should not publish private home addresses, personal contact details, or sensitive information in an invitation.</p></> },
      { title: "4. Conduct and safety", content: <><p>Users must follow the <a className="underline" href="/community-guidelines">Community Guidelines</a> and applicable laws. Harassment, stalking, impersonation, threats, fraud, discrimination and disclosure of another person's private location or identity without permission are prohibited. You are responsible for your own offline interactions and personal safety.</p></> },
      { title: "5. Availability and moderation", content: <><p>Features may change, and HERE may remove reported content, restrict accounts, or suspend features when reasonably necessary for safety, security, or legal compliance. Gatherings can be changed, filled, cancelled or removed.</p></> },
      { title: "6. Your content", content: <><p>Users remain responsible for the gathering titles, descriptions and other content they provide. A limited permission to display and distribute that content is needed to operate in-app discovery and invitations. Details of the content licence, takedown and appeals process require legal review.</p></> },
      { title: "7. Disclaimers and liability", content: <><p>HERE does not organise, supervise or verify every user-created gathering. Availability, limits on liability, consumer rights, dispute resolution, applicable law and any arbitration language must be confirmed by qualified legal counsel for the countries where HERE operates.</p></> },
      { title: "8. Changes and contact", content: <><p>Users should be notified of material changes as required by law. <strong>Before launch:</strong> supply a functioning support email, legal contact address, effective date and appropriate jurisdiction-specific consumer disclosures.</p></> },
    ]}
  />;
}
