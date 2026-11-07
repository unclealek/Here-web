import Link from "next/link";
import { LegalSection, RoamPageLayout } from "@/components/roam/legal-page";

export default function SupportPage() {
  return (
    <RoamPageLayout
      title="Support"
      lastUpdated="November 7, 2026"
      intro={
        <>
          Need help with Roam? This page gathers the main support topics and directs you to the official support email. We do not guarantee a response time or live chat unless the owner confirms those features. Use the email below for questions, problem reports, privacy requests, or account deletion requests.
        </>
      }
    >
      <LegalSection title="Getting started">
        <p>
          If you are new to Roam, start by creating your account and checking your profile, privacy settings, and notifications. If you need help with a group, invite, or Secret Santa setup, contact <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a> and include the specific issue.
        </p>
      </LegalSection>

      <LegalSection title="Apple and Google login">
        <p>
          If you are having trouble logging in with Apple or Google, confirm that the sign-in option is enabled in your app version and that you are using the same account that was originally linked. You may need to sign out and sign back in, or contact support if your account cannot be recovered.
        </p>
        <p>
          If your Apple or Google account email address changes, or you are unable to access the original login path, contact support for help with identity verification and account recovery.
        </p>
      </LegalSection>

      <LegalSection title="Creating a group">
        <p>
          To create a Roam group, open the app and start a new group or event. Add a group name, description, and the relevant settings for your activity or game. If you are creating a Secret Santa group, check the exchange timeline, budget settings, and participant preferences before sending invites.
        </p>
        <p>
          If a group cannot be created or invites are not delivering, contact support and include the app version, platform, and any error message you received.
        </p>
      </LegalSection>

      <LegalSection title="Joining a group">
        <p>
          To join a group, use the invite link or the in-app group discovery flow if available. Make sure you have the correct invitation and that the host has allowed access or sharing as configured.
        </p>
        <p>
          If you are missing an invite, cannot find the group, or a group is unexpectedly restricted, contact support for help.
        </p>
      </LegalSection>

      <LegalSection title="Secret Santa participation">
        <p>
          Secret Santa participation may involve group setup, participant matching, reminders, and private recipient assignment. If you cannot see your assignment, the host changed the group settings, or the event is closed unexpectedly, contact support with the group name and your account details.
        </p>
        <p>
          Assignment details are private and should not be shared with others outside the relevant group or exchange context. Roam does not guarantee gift purchase or delivery, and participants are responsible for coordinating their own gifting arrangements.
        </p>
      </LegalSection>

      <LegalSection title="Notifications">
        <p>
          If you are not receiving Roam notifications, check your app notification settings, your device notification permissions, and your app notification preferences. Notification delivery also depends on your operating system and whether the app is allowed to send push messages.
        </p>
        <p>
          If you were still not receiving notifications after checking your device settings, contact support and include the device type, platform, and the relevant notification issue.
        </p>
      </LegalSection>

      <LegalSection title="Account management">
        <p>
          Need to update your account details, display name, email, or authentication options? Use the account settings available in the app if the feature is implemented. If it is not available in the app, or if you need help with a broken or inaccessible account, email support.
        </p>
        <p>
          If you are locked out of your account, the account recovery or reset process should be confirmed before public launch.
        </p>
      </LegalSection>

      <LegalSection title="Reporting problems">
        <p>
          If you experience a bug, technical issue, broken invite, incorrect assignment, app crash, or unexpected behavior in Roam, report it to support with as much detail as possible.
        </p>
        <p>
          Helpful information includes the app version, platform, date/time, group name, steps to reproduce, and any screenshots or error messages. This helps the team investigate and improve the service.
        </p>
      </LegalSection>

      <LegalSection title="Reporting inappropriate behavior">
        <p>
          If someone is harassing another user, threatening them, impersonating another user, scamming others, or posting abusive content, report it through the available in-app workflow if present. If that reporting feature is not yet available, contact support directly.
        </p>
        <p>
          Include the relevant group, user, and date information and a short explanation of the problem. If there is an immediate safety threat, contact emergency services or local authorities as appropriate and then notify support.
        </p>
      </LegalSection>

      <LegalSection title="Report a concern">
        <p>
          You can report a group or a member directly through the Roam mobile app. Open the relevant group or member in the app and use the reporting option to send your concern.
        </p>
        <p>
          If you cannot access the app, email <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a> with the group or member details and a brief description of what happened. Please avoid including passwords or unrelated sensitive information.
        </p>
        <p>
          For more on respectful participation and prohibited behavior, read the <Link href="/roam/community-guidelines" className="text-[#2039C4] underline underline-offset-4">Roam Community Guidelines</Link>.
        </p>
      </LegalSection>

      <LegalSection title="Privacy requests">
        <p>
          To request access, correction, erasure, restriction, portability, or other privacy-related actions, send a message to <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a>. Include your account email, a description of the request, and any information that helps confirm your identity.
        </p>
        <p>
          Roam may need to verify your identity before responding to privacy requests. This is a security step designed to protect account data.
        </p>
      </LegalSection>

      <LegalSection title="Account deletion">
        <p>
          To request account deletion, contact support at <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a> and clearly state that you want to delete your Roam account. Please mention whether you are asking to delete only your personal account or whether the issue also involves a group, owner role, or active game session.
        </p>
        <p>
          Deleting a personal account is different from deleting a group or game session. Group owners or vice owners may need to transfer ownership or handle group closure before personal account deletion can be completed.
        </p>
      </LegalSection>

      <LegalSection title="Contact support">
        <p>
          Email the Roam support team at <a href="mailto:support@moredata.app" className="text-[#2039C4] underline underline-offset-4">support@moredata.app</a>.
        </p>
        <p>
          Include your account email, the app/platform, the relevant group or game name, and a short description of the issue. If the request is urgent or sensitive, note that in the subject line so it can be prioritized appropriately.
        </p>
      </LegalSection>

      <p className="rounded-2xl border border-[#2039C4]/20 bg-[#E4EBFF]/30 p-4 text-sm leading-6 text-[#182348]/80">
        This support page is designed to be accurate and practical. Before public launch, confirm the final support workflow, any live-chat or response-time commitments, and the actual app paths for privacy requests and account deletion.
      </p>

      <p className="text-sm text-[#182348]/70">
        Review the <Link href="/roam/privacy" className="text-[#2039C4] underline underline-offset-4">Privacy Policy</Link>, <Link href="/roam/terms" className="text-[#2039C4] underline underline-offset-4">Terms</Link>, and <Link href="/roam/delete-account" className="text-[#2039C4] underline underline-offset-4">Delete account</Link> pages for related information.
      </p>
    </RoamPageLayout>
  );
}
