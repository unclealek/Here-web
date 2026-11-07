import Link from "next/link";
import { LegalSection, RoamPageLayout } from "@/components/roam/legal-page";

export default function TermsPage() {
  return (
    <RoamPageLayout
      title="Terms of Use"
      lastUpdated="November 7, 2026"
      intro={
        <>
          These Terms of Use govern your access to and use of Roam, including group-based experiences, Secret Santa features, and other Roam activities. These terms are a working draft to be reviewed and approved by the owner before public launch. They should be read alongside the Privacy Policy and any specific game or group rules created by a host.
        </>
      }
    >
      <LegalSection title="1. Introduction and agreement to the Terms">
        <p>
          By creating an account, logging in, joining a group, or otherwise using Roam, you agree to these Terms of Use and the related policies, including the Privacy Policy and Community Guidelines.
        </p>
        <p>
          If you do not agree to these terms, you should not use Roam or create or join a group. If a specific feature or market requires additional local terms or age verification, those rules may also apply.
        </p>
      </LegalSection>

      <LegalSection title="2. Identification of the service operator">
        <p>
          Roam is operated by MoreData or the applicable legal entity behind the MoreData brand. The final legal operator name, contact information, and registration details should be confirmed before public launch.
        </p>
      </LegalSection>

      <LegalSection title="3. Eligibility and minimum age">
        <p>
          Roam may be available only to users who satisfy the minimum age and eligibility requirements established by the service and applicable law. Age requirements, parental consent obligations, and regional restrictions should be verified before the public release of the app.
        </p>
        <p>
          If you are under the minimum age or do not meet the eligibility requirements, you must not create or use a Roam account unless the service is expressly available to you under applicable law and approved consent arrangements.
        </p>
      </LegalSection>

      <LegalSection title="4. Account creation and authentication">
        <p>
          To use Roam, you may need to create an account and choose a display name. You may also sign in using supported providers such as Apple Sign-In or Google Sign-In if those options are enabled in the app.
        </p>
        <p>
          You are responsible for the accuracy of the information you provide and for keeping your account credentials secure. If you use a third-party sign-in option, you are also subject to the terms and policies of that provider.
        </p>
      </LegalSection>

      <LegalSection title="5. Account security">
        <p>
          You must keep your account secure and not share your sign-in information with others. You are responsible for all activity that occurs under your account, whether or not you authorized it.
        </p>
        <p>
          If you suspect unauthorized access, account takeover, or a breach of security, contact support promptly at <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a>.
        </p>
      </LegalSection>

      <LegalSection title="6. Acceptable use">
        <p>
          You agree to use Roam in a lawful, respectful, and appropriate manner. You may not use the platform to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Harass, bully, threaten, intimidate, or otherwise harm another person.</li>
          <li>Discriminate, bully, or target others based on protected or sensitive characteristics.</li>
          <li>Impersonate another person, organization, or public figure.</li>
          <li>Spam, scam, deceive, or manipulate others for personal gain.</li>
          <li>Share private or sensitive information about another person without consent.</li>
          <li>Attempt to bypass, exploit, or interfere with the security or integrity of Roam.</li>
        </ul>
        <p>
          Roam may restrict, suspend, or remove accounts or content that violates these rules or creates unacceptable risk for other users.
        </p>
      </LegalSection>

      <LegalSection title="7. Groups and group ownership">
        <p>
          Users may create or join groups for games, events, or social experiences. Group owners and vice owners may have administrative permissions, including inviting members, configuring settings, and managing game participation, subject to the rules implemented by Roam.
        </p>
        <p>
          Group owners remain responsible for how their group is organized and used, including the fairness and appropriateness of group rules, participation expectations, and event settings. Roam is not a substitute for the participant&apos;s own judgment or local legal compliance.
        </p>
      </LegalSection>

      <LegalSection title="8. Game participation">
        <p>
          Roam supports social multiplayer experiences, including games such as Secret Santa and other future event formats. Group members may participate in event flows that involve assignments, reminders, group coordination, and user-generated content.
        </p>
        <p>
          Participation in any game is subject to the rules and settings configured by the host or group owner. Roam may facilitate matching, assignment visibility, reminders, and event state, but the actual social behavior and gift arrangements are the responsibility of the participants.
        </p>
      </LegalSection>

      <LegalSection title="9. Secret Santa rules">
        <p>
          In Secret Santa groups, users create or join groups, and hosts configure exchange dates, budgets, and group settings. Participant matching happens according to the game rules implemented within Roam. Participants privately see their assigned recipients, and Roam facilitates the exchange experience but does not guarantee that gifts are purchased or delivered.
        </p>
        <p>
          Optional budgets are participant-organized and are not payments collected by Roam unless a specific payment feature is separately implemented and clearly disclosed. Hosts and participants are responsible for arranging their own gifting and exchange logistics.
        </p>
        <p>
          Roam may restrict or close game sessions if the host or participants violate safety, privacy, or participation rules. Personal assignment information should be treated as private and should not be shared outside the relevant group or game context.
        </p>
      </LegalSection>

      <LegalSection title="10. Host responsibilities">
        <p>
          A group host or owner is responsible for creating a fair and respectful group environment, managing participant access, setting the exchange rules, and communicating expectations to members where needed.
        </p>
        <p>
          Hosts should not use their administrative permissions to pressure, manipulate, or exclude participants or to collect personal data beyond what is reasonably needed for the game or group activity.
        </p>
      </LegalSection>

      <LegalSection title="11. User-generated content">
        <p>
          You may upload or create content in Roam, including group names, descriptions, messages, profile content, assignments, notes, and other materials associated with a group or game. You represent that you have the right to share that content and that it does not violate the rights of others.
        </p>
        <p>
          Roam may remove or restrict content that is abusive, misleading, offensive, unlawful, or inconsistent with the platform&apos;s rules. However, the platform does not guarantee monitoring or approval of every message or piece of content before it appears.
        </p>
      </LegalSection>

      <LegalSection title="12. Reporting and moderation">
        <p>
          Users may report inappropriate content or abusive behavior when the relevant reporting tools are available. Roam may review reports and take action consistent with the platform&apos;s moderation policies and user safety requirements.
        </p>
        <p>
          The exact reporting, moderation, review, and appeal procedures should be confirmed by the owner before launch. If those features are not yet implemented, this should be identified as work required before public release.
        </p>
      </LegalSection>

      <LegalSection title="13. Account suspension and termination">
        <p>
          Roam may suspend, restrict, or terminate an account if it determines that the account is violating these terms, threatening other users, or posing a risk to the integrity, security, or operation of the service.
        </p>
        <p>
          If a safety or legal issue is identified, Roam may limit access to certain features, remove content, or deactivate an account while an investigation or review is underway.
        </p>
      </LegalSection>

      <LegalSection title="14. Account deletion">
        <p>
          Users may request deletion of their personal Roam account in accordance with the relevant support and privacy procedures. Deleting a personal account is separate from deleting a group, game session, or hosting arrangement.
        </p>
        <p>
          Group owners, vice owners, and active participants may need to transfer ownership, close or leave groups, or otherwise resolve group-related responsibilities before a personal account can be fully removed. The exact behavior for those roles should be verified in the app and backend before launch.
        </p>
      </LegalSection>

      <LegalSection title="15. Rewards, XP, and virtual collectibles">
        <p>
          Where implemented, Roam may award XP, achievements, or collectible rewards for user activity. These rewards are usually virtual and remain subject to the platform&apos;s rules and moderation controls.
        </p>
        <p>
          Roam may revoke or modify virtual rewards if they are earned through abuse, rule violations, or technical errors. These items may not be exchanged for cash or transferred outside the service unless that is expressly stated and implemented.
        </p>
      </LegalSection>

      <LegalSection title="16. Service availability and changes">
        <p>
          Roam aims to provide a stable and reliable service, but no service can guarantee uninterrupted availability. Roam may suspend or change features, add new functionality, or modify the user experience to improve safety, reliability, or product quality.
        </p>
        <p>
          Roam may update or alter game mechanics, group settings, or support flows as the product evolves. Users should review the latest terms and privacy policy before continuing to use the service.
        </p>
      </LegalSection>

      <LegalSection title="17. Intellectual property">
        <p>
          Roam and its associated product, branding, software, interfaces, and content remain the property of the service operator or its licensors, unless otherwise stated. You may use Roam only for lawful personal and non-commercial use as permitted by these terms.
        </p>
        <p>
          You retain ownership of any content you create and post, but by submitting it to Roam you grant the platform the right to host, display, and operate that content as necessary to provide the service, subject to the privacy and moderation rules in place.
        </p>
      </LegalSection>

      <LegalSection title="18. Liability provisions">
        <p>
          Roam is provided on an &ldquo;as is&rdquo; basis to the extent permitted by law. The platform does not guarantee that group activities, matching, gifts, or other social exchanges will be completed successfully or that every user interaction will be free of misconduct.
        </p>
        <p>
          To the maximum extent permitted by law, Roam is not liable for indirect, incidental, or consequential damages arising from the use of the service, except where required by mandatory consumer or data protection law.
        </p>
        <p>
          These liability terms should be reviewed against applicable local law before publication. They should not be drafted to remove mandatory consumer or GDPR rights.
        </p>
      </LegalSection>

      <LegalSection title="19. Dispute handling">
        <p>
          If a dispute arises in connection with Roam, you should first try to resolve it through the support and moderation process. Where required by applicable law, disputes may be subject to jurisdiction-specific procedures or consumer protections.
        </p>
        <p>
          Owner verification required: confirm the governing law, jurisdiction, and dispute resolution process before publication. Do not include a governing law clause or arbitration process unless it has been reviewed and approved by the owner.
        </p>
      </LegalSection>

      <LegalSection title="20. Changes to the Terms">
        <p>
          Roam may update these Terms from time to time. If a material change is made, users may be informed through the app, email, or website notices, as appropriate.
        </p>
        <p>
          Continued use of the service after the effective date of a revised term means that you accept the updated terms, unless local law requires a different process.
        </p>
      </LegalSection>

      <LegalSection title="21. Contact information">
        <p>
          For questions regarding these Terms, support, moderation, account issues, or privacy concerns, contact <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a>.
        </p>
        <p>
          The final address and contact process should be verified by the owner before launch.
        </p>
      </LegalSection>

      <LegalSection title="22. Effective date">
        <p>
          These Terms of Use are effective as of November 7, 2026 and were last updated on the same date. Roam may revise these terms in the future to reflect legal changes, new product features, or operational requirements.
        </p>
      </LegalSection>

      <p className="rounded-2xl border border-[#2039C4]/20 bg-[#E4EBFF]/30 p-4 text-sm leading-6 text-[#182348]/80">
        This draft should be checked against the real app behavior, the backend, and relevant legal counsel before publication. Confirm the exact moderation, retention, deletion, and governing-law provisions before making the terms live.
      </p>

      <p className="text-sm text-[#182348]/70">
        Go back to <Link href="/roam" className="text-[#2039C4] underline underline-offset-4">Roam</Link> or view the <Link href="/roam/privacy" className="text-[#2039C4] underline underline-offset-4">Privacy Policy</Link>.
      </p>
    </RoamPageLayout>
  );
}
