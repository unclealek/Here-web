import Link from "next/link";
import { LegalSection, RoamPageLayout } from "@/components/roam/legal-page";

export default function CommunityGuidelinesPage() {
  return (
    <RoamPageLayout
      title="Community Guidelines"
      lastUpdated="November 7, 2026"
      intro={
        <>
          Roam is a social multiplayer platform for friends, families, and teams. A respectful, inclusive, and privacy-conscious community helps everyone enjoy the experience. These guidelines are designed to support safe group play, healthy interactions, and clear expectations for social behavior.
        </>
      }
    >
      <LegalSection title="Respectful group participation">
        <p>
          Participate in groups with respect for other members&apos; time, boundaries, privacy, and comfort. Be mindful of the tone of your messages, the expectations of the host, and the purpose of the event or game.
        </p>
        <p>
          Members should avoid pressure, manipulation, or repeated unwanted contact. If a conversation or game flow is not comfortable or helpful, leaving the group or contacting support is preferable to escalating the situation.
        </p>
      </LegalSection>

      <LegalSection title="Appropriate display names">
        <p>
          Choose a display name that is accurate, respectful, and appropriate for a social platform. Do not use misleading names, impersonating names, or names intended to defraud, embarrass, or harass another person.
        </p>
        <p>
          Roam may ask a user to change their display name or remove account data where it creates confusion, harm, or an unsafe environment.
        </p>
      </LegalSection>

      <LegalSection title="Appropriate group names and descriptions">
        <p>
          Group names and descriptions should reflect the real purpose of the group and should be clear, respectful, and relevant to the event or activity. Avoid names or descriptions that are insulting, threatening, discriminatory, or deceptive.
        </p>
        <p>
          Hosts should create group rules that reflect a respectful environment and avoid coercive or manipulative behavior.
        </p>
      </LegalSection>

      <LegalSection title="Prohibition of harassment and bullying">
        <p>
          Harassment, bullying, targeted insults, repeated unwanted contact, and intimidation are not allowed. Do not use Roam to shame, embarrass, belittle, or escalate conflict toward another participant.
        </p>
        <p>
          If a group or game becomes hostile, members should disengage and, where available, use the reporting process or contact support.
        </p>
      </LegalSection>

      <LegalSection title="Prohibition of threats and hate speech">
        <p>
          Threats, violent language, intimidation, or hateful content based on protected characteristics are not permitted. This includes content intended to intimidate, degrade, or target a person or community.
        </p>
        <p>
          Roam should act quickly to remove harmful content and may restrict accounts if a credible threat or hate-based activity is identified.
        </p>
      </LegalSection>

      <LegalSection title="Prohibition of impersonation">
        <p>
          Do not impersonate another user, another person, a public figure, an organization, or a host in a way that confuses or misleads others. Creating fake accounts or posing as someone else for deception is not allowed.
        </p>
        <p>
          Impersonation is especially serious where it is used to gain access to a game, manipulate trust, or target a private group experience.
        </p>
      </LegalSection>

      <LegalSection title="Prohibition of scams and spam">
        <p>
          Do not use Roam to scam, defraud, mislead, or spam other users. This includes fake reward offers, phishing attempts, requests for money or personal data, deceptive group invites, or manipulative tactics designed to gain trust.
        </p>
        <p>
          If a user asks for private account details, payment information, or other sensitive data without clear need, treat it as suspicious and contact support.
        </p>
      </LegalSection>

      <LegalSection title="Protection of participant privacy">
        <p>
          Respect other people&apos;s privacy and do not share personal information, private assignments, contact details, or sensitive group information outside the relevant group or exchange context.
        </p>
        <p>
          Do not screenshot, repost, record, or distribute private content without permission. This includes secret assignments, direct messages, or any content meant to remain within a limited group or game event.
        </p>
      </LegalSection>

      <LegalSection title="Respect for private Secret Santa assignments">
        <p>
          Secret Santa assignments are private by design. Do not share, reveal, or discuss another person&apos;s assigned recipient without consent or without the authority of the game rules.
        </p>
        <p>
          Users may coordinate gift planning within the appropriate group or message channel, but private assignment information should remain limited to the intended recipient and the relevant game context.
        </p>
      </LegalSection>

      <LegalSection title="Reporting inappropriate content">
        <p>
          If you see abusive, misleading, harmful, or private content that should not be shared, report it through the reporting workflow if the feature exists in the app. Where no dedicated tool is available, contact Roam support at <a href="mailto:support@moredata.app" className="text-[#607B3F] underline underline-offset-4">support@moredata.app</a>.
        </p>
        <p>
          Include enough detail to explain what happened, when it happened, who was affected, and what action is needed. Reports are more useful when they contain the relevant group or user context and the nature of the problem.
        </p>
      </LegalSection>

      <LegalSection title="Reporting abusive users">
        <p>
          If another user is threatening, bullying, impersonating, scamming, or otherwise creating an unsafe experience, report the account through the app if that flow is implemented. If reporting tools are not yet built, this should be treated as infrastructure work before public launch.
        </p>
        <p>
          If the issue is urgent or involves immediate safety risk, contact support and provide the relevant details as soon as possible.
        </p>
      </LegalSection>

      <LegalSection title="Moderation and enforcement">
        <p>
          Roam may review accounts, content, and game activity to ensure that users remain safe, respectful, and compliant with platform rules. Moderation actions may include warnings, content removal, group changes, or account restrictions depending on the seriousness of the issue.
        </p>
        <p>
          The exact moderation workflow, review procedures, and escalation process should be validated by the owner before public launch. Human review, appeal procedures, and a fully staffed moderation system are not guaranteed unless confirmed.
        </p>
      </LegalSection>

      <LegalSection title="Possible account restrictions">
        <p>
          Accounts may be restricted or removed when a user violates these guidelines, undermines a group or game, or creates a risk for others. This may include temporary suspension, removal from a group, or full account deactivation depending on the circumstances.
        </p>
        <p>
          Group owners or moderators may also remove users from a group if the app supports that functionality, but any moderation action should be consistent with the actual platform capabilities and local legal requirements.
        </p>
      </LegalSection>

      <LegalSection title="Appeals or review requests">
        <p>
          If a user believes that a moderation action or account restriction was incorrect, a request for review may be submitted through the available support or appeals process. Roam should provide a clear route for review where the functionality exists.
        </p>
        <p>
          Owner verification required: confirm whether an appeals process is available, whether it is human-reviewed, and what the expected response path is before claiming that users can appeal restrictions.
        </p>
      </LegalSection>

      <LegalSection title="Contact information">
        <p>
          For questions about safety, reporting, or moderation, contact <a href="mailto:support@moredata.app" className="text-[#607B3F] underline underline-offset-4">support@moredata.app</a>.
        </p>
        <p>
          If a feature is not yet implemented, it should be treated as part of the product roadmap and not described as present functionality.
        </p>
      </LegalSection>

      <p className="rounded-2xl border border-[#607B3F]/20 bg-[#D5EE91]/30 p-4 text-sm leading-6 text-[#171812]/80">
        These guidelines are intentionally written to be friendly and understandable. Before launch, the product owner should verify that the app actually has the reporting, blocking, moderation, and review tools described here, or explicitly label any missing elements as implementation work.
      </p>

      <p className="text-sm text-[#171812]/70">
        Continue to <Link href="/roam/support" className="text-[#607B3F] underline underline-offset-4">Support</Link> or return to <Link href="/roam" className="text-[#607B3F] underline underline-offset-4">Roam</Link>.
      </p>
    </RoamPageLayout>
  );
}
