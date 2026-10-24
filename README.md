# Rivals Reborn — Official Game Website

The official, production-ready website for **Rivals Reborn**, a competitive mobile drag-racing game built from the ground up with custom physics, surgical performance tuning, and live high-stakes multiplayer, targeting iOS and Android.

---

## Tech Stack & Architecture

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components by default)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with dedicated automotive design tokens
- **Typography**: Google Fonts loaded via `next/font` (`Barlow Condensed` for bold headers, `Inter` for UI & body text)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Media**: Native responsive images (`next/image`), HTML5 video fallback with reduced-motion support
- **State & Storage**: Session storage for cinematic intro caching, local storage for GDPR cookie preferences

---

## Design System Tokens

The visual identity is defined in `tailwind.config.ts` and `src/app/globals.css`:

| Token | Hex / Value | Purpose |
|---|---|---|
| **Deep Black** | `#08090B` | Primary page canvas & dark gradient depths |
| **Graphite** | `#141619` | Content cards, gallery panels, and dropdowns |
| **Elevated Charcoal** | `#1D2024` | Elevated borders, tooltips, and interactive states |
| **Primary Text** | `#F5F5F3` | High-contrast editorial titles and headers |
| **Secondary Text** | `#A4A7AC` | Subtitles, body copy, and metadata |
| **Racing Red Accent**| `#E62935` | Hero CTAs, active indicators, and shift lights |

---

## Project Structure

```
RivalsReborn/
├── public/
│   ├── favicon.ico
│   ├── images/
│   │   ├── rivalsrebornlogo.png    # Official high-resolution brand logo
│   │   ├── hero-poster.jpg         # Hero background poster (16:9)
│   │   ├── og-image.jpg            # Social OpenGraph sharing card
│   │   ├── feature-garage.jpg      # Garage & collection feature art
│   │   ├── feature-tuning.jpg      # Performance tuning & engine bay feature art
│   │   ├── feature-customization.jpg # Styling & aero customization art
│   │   ├── feature-racing.jpg      # Competitive launch action art
│   │   ├── feature-rivals.jpg      # Midnight crew staging art
│   │   └── gallery-[1..6].jpg      # Asymmetrical gallery screenshots
│   └── video/                      # Destination for hero-reel.mp4 gameplay video
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root HTML layout, metadata & JSON-LD
│   │   ├── page.tsx                # Homepage composition
│   │   ├── globals.css             # Design tokens & utility classes
│   │   ├── robots.ts               # Automated search engine robots rules
│   │   ├── sitemap.ts              # XML sitemap generator
│   │   └── legal/
│   │       ├── terms-of-service/   # /legal/terms-of-service
│   │       ├── terms-of-use/       # /legal/terms-of-use
│   │       └── privacy-policy/     # /legal/privacy-policy
│   ├── components/
│   │   ├── intro/                  # CinematicIntro component
│   │   ├── navigation/             # Navbar and MobileMenu components
│   │   ├── hero/                   # HeroSection component
│   │   ├── platforms/              # PlatformDownloads component
│   │   ├── intro-story/            # GameIntroduction component
│   │   ├── features/               # FeatureSections component
│   │   ├── gallery/                # GameplayGallery & LightboxModal
│   │   ├── community/              # CommunitySection component
│   │   ├── cta/                    # FinalCTA component
│   │   ├── footer/                 # Global Footer
│   │   ├── legal/                  # LegalLayout & TableOfContents
│   │   ├── cookies/                # CookieConsentModal & preferences
│   │   └── ui/                     # Button and Badge primitives
│   ├── config/
│   │   └── site.ts                 # Centralized configuration file
│   └── types/
│       └── site.ts                 # Strict TypeScript schemas
├── .env.example
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Centralized Configuration (`src/config/site.ts`)

All changeable website information is centralized in `src/config/site.ts`:

- **Brand Details**: Brand name, taglines, long editorial descriptions.
- **Storefront URLs**: Apple App Store & Google Play URLs (defaults to Coming Soon states until live URLs are provided).
- **Social Media**: Verified URLs for Discord, YouTube, TikTok, Instagram, and X.
- **Support & Legal**: Publisher legal entity, contact emails, document effective dates, and jurisdiction.
- **Announcement Banner**: Toggleable top alert bar for closed beta or pre-registration.

---

## Local Development & Build

### Prerequisites
- Node.js 18+ (tested on Node.js 26)
- npm 9+

### Commands

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (http://localhost:3000)
npm run dev

# 3. Type-check & build for production
npm run build

# 4. Run production server
npm run start

# 5. Run ESLint checks
npm run lint
```

---

## Pre-Launch Asset Replacement Checklist

Before publishing to production, configure the following items in `src/config/site.ts` and the `/public` folder:

- [ ] **Official App Store URL**: Once approved by Apple App Store review, add the direct App Store link to `stores.ios.url`.
- [ ] **Official Google Play URL**: Once approved on Google Play Console, add the direct link to `stores.android.url`.
- [x] **Gameplay Reel / Hero Video**: `introvideo.mp4` installed into `public/video/introvideo.mp4` and active as the cinematic hero background video with audio controls and cinema modal.
- [ ] **Corporate Registration**: Update `publisherLegalName`, `publisherEntity`, and `registeredAddress` with your registered studio entity.
- [ ] **Legal Review**: Have your legal counsel review the drafts in `/legal/terms-of-service`, `/legal/terms-of-use`, and `/legal/privacy-policy` before live retail launch.
