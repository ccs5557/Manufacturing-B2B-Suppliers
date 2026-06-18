# GEOMETRIX

Precision-manufacturing B2B landing site. A faithful, production-grade
implementation of the Pencil design (`Manufacturing.pen`) — desktop **and** the
separate mobile layout — built on Next.js 16.

## Stack

- **Next.js 16** (App Router, Turbopack) · React 19 · TypeScript
- **Tailwind CSS 4** (`@theme` tokens in `app/globals.css`)
- Fonts self-hosted via `next/font`: Archivo (display) · Inter (body) · Geist Mono
- Icons: `lucide-react`

## Performance

100% **SSG** — every route prerenders to static HTML (`next build` → all `○ Static`),
served from CDN. No SSR, no API routes, no server actions. The consultation form is
presentational (opens a `mailto:`). Images are pre-optimized to WebP in `public/images`.

## Structure

```
app/
  layout.tsx              global chrome (Brand, SideNav, MobileNav, Footer, TabBar) + fonts/SEO
  page.tsx                homepage (Hero + 4 modules)
  about|capabilities|products|contact/page.tsx
components/
  site/                   shared: Section, PageHero, Cta, Reveal, nav, chrome
  sections/               Hero, AdvancedComponents, ProductionOptimized, MaterialScience, Consultation
public/images/            optimized WebP assets
scripts/optimize-images.mjs   PNG -> WebP prep (reads source PNGs, run once)
DESIGN.md                 design system source of truth (read before adding pages)
```

Desktop and mobile are faithful to their respective Pencil artboards: each section
renders a `hidden lg:block` desktop variant and an `lg:hidden` mobile variant where
the two designs diverge.

## Develop

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (verifies all routes are static)
npm start        # serve the production build
```

## Adding pages

Read `DESIGN.md` first, then reuse `PageHero`, `Section`, photo tiles, spec panels,
stat rows, and cert chips. Do not invent new card styles — the system is the brand.
