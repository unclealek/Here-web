import type { Metadata } from "next";
import { LegalShell } from "@/components/legal/legal-shell";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft) | HERE",
  description: "Pre-launch draft of HERE's privacy policy. Not final until reviewed.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return <LegalShell
    eyebrow="Presence on your terms"
    title="Privacy Policy"
    intro="Being present should feel comfortable. Understand how location, visibility and shared invitations are intended to work, and the choices you should have over your information."
    summary={[
      { title: "Location is a choice", description: "Device location permission and sharing your presence are separate choices in HERE’s proposed design." },
      { title: "Know what you share", description: "A shared gathering link may reveal its title, place and time to anyone who receives it." },
      { title: "Your information, your rights", description: "This draft outlines access, correction and deletion rights. Contact details and request procedures still need verification." },
    ]}
    sections={[
      { title: "1. Who controls your data", content: <><p>The organisation legally responsible for HERE's personal-data processing, its registered address, support email and privacy contact must be supplied and verified before publishing this policy.</p></> },
      { title: "2. Information HERE may process", content: <><p>Based on the product design, categories include account identifiers from Apple or Google sign-in (such as name and email), venue discovery requests, approximate and—when permission is granted—device location information, optional visibility and presence sessions, and gathering content such as titles, venue names, times and availability.</p><p>Device diagnostics, analytics, push-notification tokens and other categories must be added if used in the actual implementation. HERE's intended design does not require profile photos or in-app direct messaging.</p></> },
      { title: "3. Location and visibility", content: <><p>Location permissions and sharing presence are separate choices. HERE is designed to avoid showing precise personal coordinates to other users, instead presenting venue-level or approximate context. If the app uses background location, disclose when it is collected, why it is necessary, the controls available, and how to turn it off. Never assume a public invitation is private just because precise GPS coordinates are hidden.</p></> },
      { title: "4. What an invitation shares", content: <><p>If a host makes a gathering shareable, anyone with the invitation link may be able to see its public title, general venue or area, scheduled time and availability. Other attendees' identities, private presence, precise coordinates and contact information should not be included in a public preview.</p></> },
      { title: "5. Why information is used", content: <><p>Information may be needed to provide sign-in, show relevant places, display user-controlled presence, operate gatherings, prevent abuse, assist support, and secure the service. The relevant GDPR legal basis must be identified for each distinct purpose before launch; consent and legitimate interests are not interchangeable.</p></> },
      { title: "6. Partners and international transfers", content: <><p>Review and list each provider actually used by HERE, such as hosting/database, sign-in, maps or venues, analytics, notifications and support. Explain what data each receives, where it is processed and what safeguards apply to international transfers. Names mentioned during development are not confirmation that those providers are active.</p></> },
      { title: "7. Retention and security", content: <><p>HERE's proposed presence-session design uses short-lived records. Confirm the deployed retention period for each data type, including account information, event invitations, telemetry and backups. Explain deletion, access controls, and what happens to shared invitations after cancellation or expiry. No storage system can guarantee absolute security.</p></> },
      { title: "8. Your choices and rights", content: <><p>Explain how users can withdraw location/visibility permission, request access, correction, export and deletion, object where applicable, and contact a relevant data-protection authority. A functioning account-deletion process and verified privacy contact must be in place before launch.</p></> },
      { title: "9. Children and changes", content: <><p>HERE is designed for adults aged 18+. Explain age eligibility enforcement and the process for material privacy-notice updates. Add the effective date once this policy is complete.</p></> },
    ]}
  />;
}
