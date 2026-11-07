import Link from "next/link";
import { LegalSection, RoamPageLayout } from "@/components/roam/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <RoamPageLayout
      title="Privacy Policy"
      lastUpdated="November 7, 2026"
      intro={
        <>
          This Privacy Policy explains how Roam collects, uses, stores, and shares personal information in connection with the Roam service. Roam is a social multiplayer game platform for friends, families, and teams, including Secret Santa and other group-based activities. The exact legal data controller entity, local registration obligations, and support contact details should be verified by the product owner before the site is publicly launched.
        </>
      }
    >
      <LegalSection title="1. Introduction and data controller">
        <p>
          Roam is operated by MoreData or the applicable legal entity behind the MoreData brand. The exact data controller and its country of establishment should be confirmed by the owner before publication. Until that verification is complete, this notice should be treated as a draft for review and approval.
        </p>
        <p>
          Roam may process personal data when you create an account, log in with Apple or Google, join groups, participate in games, receive notifications, and request support or account deletion. If you are a resident of the EEA, UK, or another jurisdiction with data protection obligations, additional rights and local requirements may apply.
        </p>
      </LegalSection>

      <LegalSection title="2. Personal information collected">
        <p>
          Roam may collect information you provide directly, information generated through your use of the service, and information from third-party authentication providers. This may include:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Name, email address, profile display name, and account details used to create or access your Roam account.</li>
          <li>Apple or Google account identifiers, profile information, and email addresses when you authenticate with those services.</li>
          <li>Group information, including group names, descriptions, membership records, roles, invitations, and game settings.</li>
          <li>Secret Santa setup details, exchange dates, participation preferences, and recipient assignments.</li>
          <li>Profile activity such as XP, achievements, collectible rewards, and engagement metrics.</li>
          <li>Notification preferences, push token information, and device identifiers needed for in-app communication.</li>
          <li>Support requests, privacy request information, account deletion requests, and related moderation records.</li>
        </ul>
        <p>
          Owner verification required: confirm the exact fields actually stored by the app and backend before launch. Some fields may be optional and may vary by platform or feature availability.
        </p>
      </LegalSection>

      <LegalSection title="3. Apple and Google authentication">
        <p>
          If you choose to sign in with Apple or Google, Roam may receive authentication information from those providers to verify your identity and create your account. This may include your email address, account ID, and basic profile information required to sign in securely.
        </p>
        <p>
          Apple and Google are not the controllers of your Roam account data. They are third-party identity providers that help verify your identity and support sign-in. Roam uses their services in accordance with the authentication flow implemented by the app and the provider&apos;s own terms and privacy policies.
        </p>
      </LegalSection>

      <LegalSection title="4. Display names and account information">
        <p>
          Roam may store your chosen display name, profile image, and account details used for group participation. Display names are typically visible to other group members and participants in any game or exchange within the app.
        </p>
        <p>
          Users should choose display names and profile information that are accurate, respectful, and appropriate for the intended audience. Roam may restrict or remove account information that violates the Rules or creates safety risks.
        </p>
      </LegalSection>

      <LegalSection title="5. Groups, memberships, and user-created content">
        <p>
          When you create or join a group, Roam may store group membership records, roles such as owner or vice owner, group settings, and related content such as names, descriptions, messages, game configuration, and event notes.
        </p>
        <p>
          Users may create and upload content that is visible to group members or to the wider Roam community, depending on the feature and permissions configured. This may include text, images, avatars, notes, group descriptions, or information connected to a game.
        </p>
        <p>
          Roam may use group membership information for user experience features, notifications, moderation, and account administration. Group and game content may be retained for as long as the group or event remains active or until a participant removes it or requests deletion, subject to legal obligations or operational needs.
        </p>
      </LegalSection>

      <LegalSection title="6. Secret Santa settings and private assignments">
        <p>
          Secret Santa participants may create or join groups, configure exchange dates and budgets, and set participation preferences. Roam may store those preferences to manage the game flow, participant matching, and hosting controls.
        </p>
        <p>
          Roam may generate and store private recipient assignments so each participant can see only their assigned recipient. These assignments are intended to be private and should not be shared outside the relevant game or group without consent.
        </p>
        <p>
          Host and participant responsibilities for gift arrangements are separate from Roam&apos;s role as a facilitator. Roam does not operate a payment system or guarantee that gifts are purchased or delivered unless a specific feature is implemented and confirmed by the owner.
        </p>
      </LegalSection>

      <LegalSection title="7. XP, achievements, and collectible rewards">
        <p>
          Roam may track engagement metrics such as XP, achievements, streaks, milestones, and collectible rewards where those systems are implemented. This data supports gameplay progression, social validation, and achievement tracking.
        </p>
        <p>
          Roam may also store the status of rewards and achievements associated with a user account, group, or game event. These records may be used for internal personalization, moderation, or support workflows.
        </p>
        <p>
          Owner verification required: confirm whether rewards are purely virtual, whether they are user-visible, and whether any third-party services or blockchain-like features are involved.
        </p>
      </LegalSection>

      <LegalSection title="8. In-app notifications and notification preferences">
        <p>
          Roam may send in-app notifications to let users know about invites, assignments, reminders, activity, and important account events. Users may be able to control notification preferences and opt out of certain communications where the app supports that functionality.
        </p>
        <p>
          Notification data may include whether a message was delivered, opened, or dismissed if those analytics are implemented. Roam may also use this information for operational reliability, troubleshooting, and compliance review.
        </p>
      </LegalSection>

      <LegalSection title="9. Expo push tokens and installation identifiers">
        <p>
          If Roam uses Expo or a related mobile framework for push notifications, it may process device installation identifiers, notification tokens, app version information, and platform details necessary to deliver push messages and maintain app reliability.
        </p>
        <p>
          Push tokens and installation identifiers are sensitive operational data. They are used to deliver messages to the correct device, manage notification preferences, and assist with troubleshooting. They should not be collected or retained longer than necessary to deliver the relevant service.
        </p>
        <p>
          Owner verification required: confirm the exact retention period for push tokens and whether they are rotated automatically, encrypted in transit, and deleted at account closure or app reinstallation.
        </p>
      </LegalSection>

      <LegalSection title="10. Purposes and lawful bases for data processing">
        <p>
          Roam processes personal data for the purposes described in this notice, including:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Creating and managing user accounts and authentication.</li>
          <li>Operating groups, invitations, matching, and in-app gameplay.</li>
          <li>Delivering notifications and security-related communications.</li>
          <li>Moderating behavior, investigating reports, and enforcing account policies.</li>
          <li>Improving service quality, reliability, troubleshooting, and product development.</li>
          <li>Responding to support requests, privacy requests, and account deletion workflows.</li>
        </ul>
        <p>
          The lawful basis for processing may vary depending on the type of data and the applicable jurisdiction. Common bases may include contract performance, legitimate interests, legal obligations, and consent where required, such as for certain marketing or optional notification preferences. Roam should not rely on consent where the processing is necessary to provide the core service, and the applicable basis should be reviewed by the owner or legal counsel before launch.
        </p>
      </LegalSection>

      <LegalSection title="11. Data sharing and service providers">
        <p>
          Roam may share personal data with service providers who help operate the platform, such as Supabase for data hosting and backend services, Apple and Google for authentication, and Expo for notification and mobile app infrastructure. The exact provider list should be confirmed against the actual implementation before launch.
        </p>
        <p>
          Roam may also share data with trusted vendors or contractors who support hosting, customer support, moderation, security monitoring, or analytics, as required to operate the service. Service providers are expected to process personal data only on Roam&apos;s instructions and under appropriate safeguards.
        </p>
        <p>
          Roam does not sell personal data for monetary consideration. However, if the platform introduces analytics, advertising, or affiliate arrangements in the future, separate disclosures and consent mechanisms may be required.
        </p>
      </LegalSection>

      <LegalSection title="12. International data transfers and safeguards">
        <p>
          Personal data may be processed in countries outside the user&apos;s home country, including where service providers operate or store infrastructure. Where international transfers are required, Roam should apply appropriate safeguards under applicable privacy laws, such as standard contractual clauses, adequacy mechanisms, or other legally recognized transfer tools where required.
        </p>
        <p>
          Owner verification required: confirm the actual hosting location of databases, notification services, and authentication providers before describing any specific transfer mechanism or hosting region.
        </p>
      </LegalSection>

      <LegalSection title="13. Data retention and deletion">
        <p>
          Roam retains personal data only for as long as necessary to provide the service, fulfill legal obligations, resolve disputes, enforce account rules, and support legitimate operational needs. Retention periods may depend on the type of data and the feature involved.
        </p>
        <p>
          Some data may be retained for as long as an account remains active and while a user is a member of a group, participant in a game, or subject to an unresolved support or moderation issue. Once the purpose for retention ends and no legal requirement applies, personal data should be deleted or anonymized.
        </p>
        <p>
          Owner verification required: confirm the actual retention period for account records, group history, authentication records, push tokens, game assignments, and moderation logs before publication.
        </p>
      </LegalSection>

      <LegalSection title="14. GDPR user rights">
        <p>
          Where applicable, you may have rights under the GDPR and other privacy laws, including the right to:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access the personal data Roam holds about you.</li>
          <li>Rectify inaccurate or incomplete personal data.</li>
          <li>Request erasure of personal data in certain circumstances.</li>
          <li>Request restriction of processing in certain circumstances.</li>
          <li>Receive a copy of your personal data in a portable, machine-readable format.</li>
          <li>Object to processing based on legitimate interests or direct marketing.</li>
          <li>Withdraw consent for processing where consent is the legal basis.</li>
          <li>Submit a complaint to a supervisory authority if you believe your rights have been violated.</li>
        </ul>
      </LegalSection>

      <LegalSection title="15. How users exercise their rights">
        <p>
          To exercise your rights, contact Roam support at <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a>. Please include your account email address, the specific right you wish to exercise, and any relevant details that will help Roam identify your data.
        </p>
        <p>
          Roam may ask for additional information to verify your identity before fulfilling a request, especially where the request concerns account deletion, privacy rights, or support history. This is to protect against unauthorized access to personal data.
        </p>
      </LegalSection>

      <LegalSection title="16. Children&apos;s privacy and eligibility rules">
        <p>
          Roam is intended for users who meet the applicable eligibility rules for the service. A minimum age or parental consent requirement may apply depending on the jurisdiction and the nature of the platform. Users should not create accounts or provide personal information on behalf of children unless permitted by applicable law and the platform&apos;s rules.
        </p>
        <p>
          Owner verification required: confirm the exact minimum age, parental consent requirements, and any child-specific safeguards before the app is marketed or offered in child-sensitive markets.
        </p>
      </LegalSection>

      <LegalSection title="17. Security practices">
        <p>
          Roam uses reasonable technical and organizational measures designed to protect personal data from unauthorized access, disclosure, alteration, or destruction. These measures may include secure authentication, encrypted in-transit communication, access controls, monitoring, and service-provider safeguards.
        </p>
        <p>
          No system is perfectly secure, and no security measures can guarantee complete protection. Users should maintain strong account credentials and be careful about disclosing personal details in groups or public spaces.
        </p>
      </LegalSection>

      <LegalSection title="18. Privacy Policy changes">
        <p>
          Roam may update this Privacy Policy from time to time to reflect changes in features, legal requirements, or operational practices. If a material change is made, Roam may notify users in-app, by email, or through the website where appropriate.
        </p>
        <p>
          Continued use of Roam after an update constitutes acceptance of the revised policy unless otherwise required by law.
        </p>
      </LegalSection>

      <LegalSection title="19. Contact details">
        <p>
          For privacy questions, support requests, or rights requests, contact:
        </p>
        <p>
          <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a>
        </p>
        <p>
          The exact legal address and responsible contact details for the data controller should be verified by the owner before launch.
        </p>
      </LegalSection>

      <LegalSection title="20. Effective date and last updated date">
        <p>
          This Privacy Policy is effective as of November 7, 2026 and was last updated on the same date. Roam may revise this notice in the future to reflect product changes, legal developments, or operational requirements.
        </p>
        <p>
          This document is a working policy draft intended for review before public release. Final legal wording should be approved by the owner, legal counsel, or the relevant product team before launch.
        </p>
      </LegalSection>

      <p className="rounded-2xl border border-[#2039C4]/20 bg-[#E4EBFF]/30 p-4 text-sm leading-6 text-[#182348]/80">
        Need a final compliance check: verify the actual controller identity, retention periods, sign-in flows, provider list, notification stack, and deletion workflow before publishing this page publicly.
      </p>

      <p className="text-sm text-[#182348]/70">
        Return to <Link href="/roam" className="text-[#2039C4] underline underline-offset-4">Roam</Link> or review the <Link href="/roam/terms" className="text-[#2039C4] underline underline-offset-4">Terms of Use</Link>.
      </p>
    </RoamPageLayout>
  );
}
