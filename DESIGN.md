# GEOMETRIX — Design System

> Single source of truth for the GEOMETRIX site. Extracted verbatim from the
> Pencil master file (`Manufacturing.pen`). **Every page must conform to this.**
> When in doubt, this file wins over ad-hoc choices.

GEOMETRIX is a premium B2B precision-manufacturing supplier — engineered
components and high-performance materials, built in **Sitiawan, Perak, Malaysia**,
shipped worldwide. The visual language is **industrial / utilitarian editorial**:
near-black surfaces, brushed-metal warmth, mono technical labels, oversized
condensed display type, generous negative space, hairline structure.

Aesthetic in one line: **a precision spec sheet that happens to be beautiful.**

---

## 1. Brand facts (use verbatim)

| Field | Value |
|---|---|
| Name | GEOMETRIX |
| Tagline | Precision. Applied. |
| Positioning | Premium B2B supply of engineered components & high-performance materials |
| Location | Sitiawan, Perak, Malaysia · `4°13'N 100°41'E` |
| Email | supply@geometrix.io |
| Phone | +60 5 691 0000 |
| Certifications | ISO 9001 · AS9100D · NADCAP · RoHS · REACH |
| Copyright | © 2026 GEOMETRIX GLOBAL INNOVATION |

---

## 2. Color tokens

Defined in `app/globals.css` under `@theme`. Use the Tailwind utility, never a raw hex.

| Token | Hex | Tailwind | Role |
|---|---|---|---|
| surface | `#0A0A0B` | `bg-surface` | page background (near-black) |
| surface-2 | `#141416` | `bg-surface-2` | elevated panels |
| panel | `#1A1A1D` | `bg-panel` | spec panels / cards |
| ink | `#F5F5F4` | `text-ink` | primary text |
| ink-2 | `#9A9A98` | `text-ink-2` | secondary / body |
| ink-3 | `#5E5E60` | `text-ink-3` | tertiary / captions |
| accent | `#E8E6E1` | `bg-accent` `text-accent` | warm off-white — primary CTA fill, key fills |
| metal | `#C9A57A` | `text-metal` | warm metal — eyebrows, ticks, connector dots, indices |
| line | `#2A2A2E` | `border-line` | subtle hairlines |
| line-2 | `#3A3A40` | `border-line-2` | strong hairlines / cert chips |

**Rules**
- The page is dark. Light surfaces appear only as the metallic CTA / form plate.
- `metal` (`#C9A57A`) is the ONLY chromatic accent. Use sparingly — labels, ticks,
  index numbers, connector dots. Never large fills.
- Primary CTA = `bg-accent` with `#0A0A0B` text. There is no second button color.

---

## 3. Typography

Three families, all self-hosted via `next/font/google`.

| Family | Token / util | Use |
|---|---|---|
| **Archivo** | `font-display` | display headlines, stat values, material names |
| **Inter** | `font-body` | body copy, sub-paragraphs, contact values |
| **Geist Mono** | `font-mono` | eyebrows, captions, labels, indices, coords, copyright |

### Type scale (desktop → mobile)
| Role | Family | Size | Weight | Tracking | Line-height |
|---|---|---|---|---|---|
| Hero headline | Archivo | 100 → 44px | 700 | -2.5 | 0.94 |
| Module headline XL | Archivo | 96 → 40px | 800 | -3 | 0.95 |
| Module headline L | Archivo | 80 → 36px | 800 | -2.5 | 0.95 |
| Module title | Archivo | 64 → 32px | 700 | -1.5 | 1.0 |
| CTA / footer title | Archivo | 52 → 28px | 700 | -1.5 | 1.02 |
| Stat value | Archivo | 38 → 28px | 700 | -1.5 | 1.0 |
| Material name | Archivo | 18px | 600 | -0.3 | — |
| Body lede | Inter | 16px | 400 | — | 1.55 |
| Body | Inter | 15px | 400 | — | 1.5 |
| Eyebrow | Geist Mono | 12px | 400 | 0.16em (2px) | — |
| Caption / index | Geist Mono | 11px | 400 | 0.13em (1.5px) | — |
| Micro (coords/©) | Geist Mono | 10–11px | 400 | 0.05em | — |

- Display headlines are **uppercase**, end with a period (`GEOMETRIX.`), and stack
  one word per line for the hero.
- **Big display headlines get a brushed-steel sheen** via `.headline-metal`
  (a steel gradient `background-clip:text`, falls back to solid ink). Apply it to the
  element that *directly contains the text* — if the text is in animated child spans
  (hero), put `.headline-metal` on each span, not the parent (a child `transform`
  breaks the parent's text clip and the headline goes invisible). Eyebrows, labels,
  body, and card titles stay solid color.
- Eyebrows are uppercase mono in `text-metal`, often prefixed with a 28×1px metal
  tick or `MODULE 0X /` index. Helper class: `.eyebrow`.

---

## 4. Spacing & layout

- **Content gutter**: 56px desktop (`--spacing-gutter`), 20px mobile.
- **Section vertical padding**: 110px desktop top/bottom for primary modules,
  64px for centered modules; ~42px mobile.
- **Max canvas**: desktop reference width 1440px; center content, cap at ~1440px.
- **Grid gaps**: 16–20px between bento/photo tiles.
- **Corner radius**: 4px (photo tiles, chips), 6px (bento images), 12px (mobile cards).
  Keep radii small and technical — never pill-rounded except the 56px circular nav arrows.
- **Hairlines**: 1px borders in `border-line`; section dividers are `border-line` on top edge.

Breakpoints (Tailwind defaults): mobile-first. `lg:` (1024px) is the desktop switch
where the side-nav + multi-column bento appear. Phone reference = 390px.

---

## 5. Recurring components

| Component | Spec |
|---|---|
| **Eyebrow** | metal tick (28×1px) + mono uppercase label in `text-metal`, gap 14px. |
| **Primary CTA** | **Brushed steel** — same material as the form plate: `form-plate.webp` bg + sheen gradient + raised shadow/highlight, 1px `#8E8E8A` border, radius 5, embossed `#1A1A18` mono label, `arrow-right` icon. Hover: brightness lift + arrow nudge. The hero CTA and the bottom consultation CTA must read as the identical metal. (`components/site/Cta.tsx`) |
| **Photo tile** | image bg, 1px `border-line`, radius 4, bottom gradient scrim (`#0A0A0B00→E6`), mono caption label (left) + index (right) overlaid bottom. |
| **Spec panel** | `bg-panel`, 1px `border-line`, radius 6, padding 32, mono key/value rows. |
| **Cert chip** | mono 10px in `text-ink-2`, 1px `border-line-2`, radius 4, padding 8×14. |
| **Stat** | Archivo value (38px) over mono key (10px, `text-ink-2`), centered, 1px divider between. |
| **Material callout** | connector line (254×1px `line-2`) + 7px metal dot, Archivo name 18px + metal index, mono spec code. |
| **Metallic form plate** | the consultation card: vertical brushed gradient `#262624→#6E6E6A`, layered inner/outer shadows + top white-line highlight, raised "REQUEST CONSULTATION" plate. The one place light & shadow get dramatic. |

---

## 6. Navigation / chrome

- **Desktop**: brand wordmark `GEOMETRIX.` top-left (Archivo 24/700). Vertical side-nav
  pinned right edge, rotated, mono 11px `#CFCFCB`, items: `HOME · PRODUCTS · SERVICES ·
  CONTACT · SEARCH`, generous 90px gaps.
- **Mobile**: top bar = logo + hamburger. Fixed bottom **tab bar** (5 items: `HOME ·
  CAPABILITIES · PRODUCTION · MATERIALS · CONTACT`) on `#100F12`, top hairline `#222226`.
- Route map: HOME `/` · PRODUCTS `/products` · SERVICES/CAPABILITIES `/capabilities` ·
  ABOUT `/about` · CONTACT `/contact`. (About lives in footer + mobile menu.)

---

## 7. Motion

- **Page load**: one orchestrated staggered reveal — hero eyebrow → headline lines →
  subcopy → CTA, ~80ms stagger, translateY(18px)+fade, `--ease-out-expo`
  `cubic-bezier(0.16,1,0.3,1)`. Helper: `.reveal` + inline `--d` delay.
- **Scroll**: sections fade/slide in once on enter (IntersectionObserver, run-once).
- **Hover**: CTA brightness + arrow nudge; tiles subtle border/scrim lift.
  **No image zoom on hover** (house rule).
- Respect `prefers-reduced-motion` — all reveals collapse to visible.

---

## 8. Homepage section order (the replica)

1. **Hero** — gear bg image, eyebrow, 3-line headline `GEOMETRIX. / PRECISION. / APPLIED.`, subcopy, CTA. Vertical side-nav.
2. **Module 01 — Advanced Components** — title 64px + bento grid (valve / spec panel / cylinder / carbon-fiber).
3. **Module 02 — Production, Optimized** — XL 96px headline, lede + circular nav arrows, 3 photo tiles (Robotic Cell / Assembly Line / Machined Parts), abstract row (Steel/Flow · Structure/Atomic).
4. **Module 03 — Material Science** — centered 80px headline, centerpiece stack image with 6 connector callouts (Brushed Steel · Carbon Fiber · Titanium Mesh · Composite Laminate · Perforated Alloy · Polymer Core), stat row (>500°C · 8.4× · ±2µm · 100%), cert chips.
5. **Consultation + Footer** — `LET'S ENGINEER YOUR NEXT BREAKTHROUGH.`, metallic form plate, contact lines (email/phone/facility), footer bar (logo · Privacy/Terms/Careers · © · coords · badge).

---

## 9. Building new pages

About · Capabilities · Products · Contact — all inherit this system:
- Reuse `eyebrow`, photo tiles, spec panels, stat rows, cert chips — **do not invent
  new card styles.**
- Open each page with an eyebrow + oversized Archivo headline on `bg-surface`.
- Keep 56/20px gutters and the same section rhythm.
- 70%+ of every section is visual (image / spec block / diagram); text only punctuates.
- Mono labels carry the "technical" feel — index things (`01`, `MODULE 0X`), show specs
  (`316L / 1.4404`), show coordinates. Precision is the brand.

---

## 10. Tech & performance

- **Next.js 16** (App Router, Turbopack) · React 19 · **Tailwind CSS 4** (`@theme`).
- **100% SSG** — every page prerenders to static HTML, served from CDN. No SSR, no
  API routes, no server actions. Consultation form is presentational for now.
- Images pre-optimized to WebP in `public/images/` (build-time, via
  `scripts/optimize-images.mjs`), served through `next/image`.
- Fonts self-hosted via `next/font` (zero external requests).
- Target: instant load, no perceptible "loading", deployable to any static host / Vercel CDN.
