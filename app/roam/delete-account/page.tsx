import Link from "next/link";
import { LegalSection, RoamPageLayout } from "@/components/roam/legal-page";

export default function DeleteAccountPage() {
  return (
    <RoamPageLayout
      title="Delete your Roam account"
      lastUpdated="November 7, 2026"
      intro={
        <>
          Deleting a personal Roam account is not the same as deleting a group, event, or game session. Before you request account deletion, review the status of your memberships, your owner or vice-owner permissions, and any active Secret Santa or game participation. This page outlines the likely workflow and the items that must be confirmed by the product owner before public launch.
        </>
      }
    >
      <LegalSection title="What account deletion means">
        <p>
          Account deletion typically removes your personal account data, profile information, and access to the service. It may also remove or limit your ability to continue participating in groups or games after the deletion is processed.
        </p>
        <p>
          However, deleting your personal account does not automatically delete a group you created, the event history of a group, or a live game session. Different rules may apply if you are the group owner, vice owner, or a participant in an active game.
        </p>
      </LegalSection>

      <LegalSection title="Regular group members">
        <p>
          If you are a regular group member, account deletion usually means leaving the group and removing your personal account data from Roam. Any group membership records, notifications, and profile references may be removed or updated depending on the configured retention rules.
        </p>
        <p>
          Owner verification required: confirm whether the app removes membership records immediately, preserves historical group context for safety reasons, or requires a grace period before deleting the account.
        </p>
      </LegalSection>

      <LegalSection title="Group owners and vice owners">
        <p>
          If you are a group owner or vice owner, deleting your personal account may affect group management, participant access, and ownership continuity. In practical terms, a group may need a new owner, a transfer of permissions, or closure before the account can be fully deleted.
        </p>
        <p>
          Roam should not automatically confuse personal account deletion with the deletion of the group itself. Ownership and administrative responsibilities should be handled intentionally and explicitly.
        </p>
      </LegalSection>

      <LegalSection title="Users participating in active games">
        <p>
          If you are in an active game, such as Secret Santa or another live event, account deletion may interrupt the group flow or remove access to match assignments, notices, or progress. Depending on the app behavior, Roam may need to either freeze the account, reassign the user, or handle the deletion after the event closes.
        </p>
        <p>
          Owner verification required: confirm whether active-game participants can still complete the event before deletion, whether assignments are preserved, and how the app handles mismatched or cancelled participation.
        </p>
      </LegalSection>

      <LegalSection title="Users with Secret Santa assignments">
        <p>
          Secret Santa assignments should be treated as sensitive personal data. If you are assigned a recipient and request deletion, Roam may need to determine whether the assignment should be anonymized, cancelled, or reassigned before the event completes.
        </p>
        <p>
          If the group or event is still active, the host and the platform may need to decide how to resolve the assignment. Roam should not expose or share private assignment details during this process beyond what is required for operational safety or event management.
        </p>
      </LegalSection>

      <LegalSection title="Users with rewards and achievements">
        <p>
          If your account includes XP, achievements, collectibles, or virtual rewards, deleting the account may also remove or disable those records. Depending on the app design, Roam may choose to retain a limited audit trail for moderation, security, or compliance purposes.
        </p>
        <p>
          Owner verification required: confirm whether rewards are deleted with the account, whether they are retained for audit reasons, and whether there are any rules about recovering or preserving them after deletion.
        </p>
      </LegalSection>

      <LegalSection title="How to request deletion">
        <p>
          To request deletion of your personal account, email support at <a href="mailto:roamsupport@moredata.app" className="text-[#2039C4] underline underline-offset-4">roamsupport@moredata.app</a> with a clear request that you want your Roam account deleted.
        </p>
        <p>
          Include the account email, your Roam username or display name, and any relevant group or game details. If you are a group owner or active participant, mention that context so the support team can review the correct next steps.
        </p>
      </LegalSection>

      <LegalSection title="What happens after the request">
        <p>
          Once a deletion request is received, Roam may verify the request, check for active memberships or ownership roles, and process the account removal in line with the actual backend workflow. Some information may be retained for security, moderation, legal, or support reasons where required.
        </p>
        <p>
          Account deletion is not a substitute for deleting a group or game, and group owners should not assume that deletion of one account removes the full group history automatically. The final workflow should be checked against the app and backend before launch.
        </p>
      </LegalSection>

      <LegalSection title="In-app deletion workflow">
        <p>
          If Roam exposes a deletion option in the mobile app or account settings, users should be directed there clearly and the flow should explain the effect on group membership, owner permissions, and game participation.
        </p>
        <p>
          Owner verification required: confirm whether the app includes an in-app step or uses a support email flow only. A user-facing page should not claim an in-app deletion tool unless it is actually implemented and tested.
        </p>
      </LegalSection>

      <LegalSection title="Contact support">
        <p>
          If you need help with a deletion request, account recovery, group ownership transfer, privacy rights, or an active game issue, contact <a href="mailto:roamsupport@moredata.app" className="text-[#2039C4] underline underline-offset-4">roamsupport@moredata.app</a>.
        </p>
      </LegalSection>

      <p className="rounded-2xl border border-[#2039C4]/20 bg-[#E4EBFF]/30 p-4 text-sm leading-6 text-[#182348]/80">
        This page is a working draft. Before launch, the product owner should verify the exact deletion flow for regular members, group owners, vice owners, active game participants, assigned users, and reward holders. The final wording should align with the actual app implementation and backend rules.
      </p>

      <p className="text-sm text-[#182348]/70">
        Review the <Link href="/roam/privacy" className="text-[#2039C4] underline underline-offset-4">Privacy Policy</Link> and the <Link href="/roam/support" className="text-[#2039C4] underline underline-offset-4">Support</Link> page for more details.
      </p>
    </RoamPageLayout>
  );
}
