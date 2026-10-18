# HERE — Marketing website

The marketing website for **HERE**, a venue-based social discovery experience. Adapted from the user's EVASION e-commerce template into an editorial, scroll-driven Next.js site.

## Included
- Immersive expanding / bento-style scroll hero
- Floating glass-like responsive navigation
- Scroll-staged HERE product concept (illustrative, **not** connected to app data)
- Horizontal scrollable places/moments gallery
- Privacy-first storytelling and launch sections
- Brand palette: `#607B3F`, `#D5EE91`, `#F7F4EE`, `#171812`
- SEO/social metadata and Vercel Analytics

## Local development

Prerequisites: Node.js 20.9+ and pnpm. From the project directory:

```bash
corepack enable
pnpm install
pnpm dev
```

Open http://localhost:3000.

Check the production build:

```bash
pnpm build
```

## Deploy to Vercel (recommended)
1. Unzip this folder and add it to a new GitHub repository, e.g. `here-website`.
2. Open https://vercel.com/new and **Import Git Repository**.
3. Choose the repository, keep **Framework Preset: Next.js**, and set **Root Directory** to the root containing `package.json`.
4. Deploy. There are **no required environment variables** for this marketing website.
5. Connect your domain under Vercel Project Settings → Domains.

You can also deploy via the Vercel CLI:

```bash
npm i -g vercel
vercel
# When ready for production:
vercel --prod
```

## Before launch
- Replace Unsplash-hosted photos with licensed, preferably locally optimized brand photographs. Photo URLs currently load from `images.unsplash.com` at runtime; the site depends on that service for visual imagery.
- The phone-like experience is a visual illustration, not a real presence API, venue-density prediction, sign-in or mobile-app embed.
- Add real App Store / Google Play links after the apps are published. Do not represent pre-release buttons as live downloads.
- Link your **actual, reviewed** Terms, Privacy Policy, contact address and other legal pages before announcing a public launch; they have not been invented here.
- Replace the site icon and wordmark if HERE finalizes a different logo design.
- Test on physical mobile devices with motion / reduced-motion accessibility enabled.

## Key files
- `app/page.tsx`: section order
- `app/layout.tsx`: metadata
- `app/globals.css`: global styling and palette
- `components/header.tsx`: navigation
- `components/sections/`: every section, each separately editable

This is a standalone marketing website; no Supabase credentials, Mapbox tokens, mobile auth credentials or other app secrets should be added to it.

## Build verification status

All TypeScript / TSX source files have been syntax-checked. A complete `pnpm build` could not be run in the preparation environment because npm package registry access is disabled there. Please run `pnpm install && pnpm build` in your normal development environment or check Vercel's first deployment build before publishing your domain.
