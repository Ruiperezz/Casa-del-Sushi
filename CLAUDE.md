# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # TypeScript type-check only (no ESLint configured)
npm run clean     # Remove dist/ and server.js
```

Set `GEMINI_API_KEY` in `.env.local` (copy from `.env.example`). The key is injected automatically at runtime when deployed to Google AI Studio.

## Architecture

Single-page React 19 + TypeScript app built with Vite. No router — the page is one long scrolling layout assembled in `src/App.tsx`.

**Data flow**: Static menu items and reviews live in `src/data/menu.ts` and are typed in `src/types.ts`. No external data fetching in any component; the Gemini API key is present but no AI calls are currently wired up. The `Matchmaker` component runs entirely client-side logic, and `BookingForm` simulates a backend with a `setTimeout` (generates a fake `CDS-XXXX` reference code — no real submission endpoint exists).

**Component sections** (in render order):
- `Header` — floating nav
- `Hero` — hero image + price callout
- `BuffetPromo` — pricing details and trust signals
- `MenuFilter` — filterable menu grid from `MENU_ITEMS`
- `Matchmaker` — 3-step quiz → pairing recommendation
- `Gallery` — image gallery using assets in `src/assets/images/`
- `BookingForm` — UI-only reservation form
- `LocationReviews` — static reviews from `REVIEWS` + map embed

## Design System

All design tokens are declared in `src/index.css` using Tailwind v4's `@theme` block — use them via Tailwind utility classes, not raw hex values.

**Colors**: `sushi-dark` · `sushi-green` · `sushi-coral` · `sushi-neon` · `sushi-gold` · `sushi-marble`

**Font families**: `font-sans` (Plus Jakarta Sans) · `font-display` (Playfair Display, serif headings) · `font-accent` (Outfit, labels/buttons) · `font-wide` (Syncopate, all-caps branding)

**Reusable CSS classes**: `.gold-veins` (marble background texture), `.gold-border-glow-hover` (hover border glow), `animate-neon-pulse` (neon flicker animation).

The visual identity is dark luxury: near-black backgrounds (`sushi-dark`/`sushi-marble`), coral accent CTAs, electric blue neon highlights, and gold details.
