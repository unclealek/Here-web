# Gathering invitation links

## Current LEFT compatibility

Checked against the local LEFT source on 20 October 2026.

The app's `src/features/guest/gathering-links.ts` encodes a gathering UUID as a
canonical 22-character base64url code. Its existing helper produces:

```text
https://<share-domain>/g/<code>
```

The website accepts that format and uses `left://g/<code>` for its Open button,
matching LEFT's current incoming-link parser. Do not replace the native scheme
with the marketing display name.

## Create and share

1. The host signs in and submits a gathering. Signed-out guests cannot host.
2. Once approved/published and upcoming, the gathering gets a Share action when
   `EXPO_PUBLIC_GATHERING_SHARE_ORIGIN` is configured as an HTTPS origin.
3. LEFT builds the URL from the existing gathering ID and opens the native share
   sheet. The same gathering keeps the same code; the code contains no event text.
4. Verified iOS Universal Links / Android App Links open that event in the app.
5. Signed-out recipients see only the linked event in LEFT's guest preview.
   Attending requires sign-in; the invitation must survive that transition.
6. Without the app, recipients see this website's generic invitation handoff.
   After installation, they reopen the original link. Deferred-install deep
   linking is not implemented by this website.

## Website behavior

`app/g/[shareId]/page.tsx` renders generic HTML and metadata. It does not query a
backend or display the event title, location, time or attendees. A well-formed
code is not proof that an event exists; the app/backend checks its availability.

The Open button is a custom-scheme fallback, not a substitute for verified HTTPS
links. Browser behavior varies. Invalid invitation formats show a recovery message.

Optional deployment environment variables:

```text
NEXT_PUBLIC_IOS_APP_URL=<verified public App Store URL>
NEXT_PUBLIC_ANDROID_APP_URL=<verified public Google Play URL>
```

Until configured, the page explains TestFlight access and does not invent a store
listing. The copy action preserves the HTTPS invitation for reopening later.

## Release setup still required

- Choose the real share domain and route `/g/<code>` to this website.
- Configure `EXPO_PUBLIC_GATHERING_SHARE_ORIGIN` in the mobile build environment.
- Configure the same domain in the native app's associated domains / intent filters.
- Publish verified `/.well-known/apple-app-site-association` and
  `/.well-known/assetlinks.json` files using actual signing identifiers.
  Templates in this directory must not be published with placeholder values.
- Build and install a new native app after entitlement changes.
- Approve and activate the app/backend guest-read implementation separately.
  This website does not deploy migrations, functions or mobile changes.

LEFT's separate `shared-gathering` Edge Function includes a web-preview option.
Routing `/g/` to that function instead would expose selected event details on the
web and change this website's app-only design. Choose one routing owner.

A share code is an identifier, not a membership or attendance permission. The
backend must enforce publication, expiry, cancellation, blocking and join limits.
The example SQL in this directory is illustrative host-only schema, not the
migration for the existing LEFT app. Do not apply it to LEFT as integration setup.

## Verification before release

- Tap HTTPS invitations from Messages on installed iOS and Android builds.
- Confirm the precise gathering opens, including while signed out.
- Sign in and confirm the original gathering remains selected.
- Without the app, confirm generic HTML and metadata contain no event details.
- Install, reopen the original link and confirm the same event opens.
- Verify invalid, expired, cancelled and unavailable events fail safely.
- Check copy success/failure and that the copied URL remains HTTPS.

References: [Expo linking](https://docs.expo.dev/linking/overview/),
[iOS Universal Links](https://docs.expo.dev/linking/ios-universal-links/),
[Android App Links](https://docs.expo.dev/linking/android-app-links/).
