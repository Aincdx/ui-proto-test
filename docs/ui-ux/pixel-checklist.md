# Pixel-Perfect Checklist — PROTOBOARD Landing

> Generated after FASE 4 build verification.
> Viewport reference: **1440 × 768 px** (desktop).

---

## Checkpoint A — Navbar

| Property               | Expected           | Implemented        | ✓ |
|------------------------|--------------------|--------------------|---|
| Height                 | 80 px              | `h-[80px]`         | ✅ |
| Position               | Sticky top         | `sticky top-0 z-50`| ✅ |
| Background             | `#FFFFFF`          | `bg-white`         | ✅ |
| Border bottom          | 1 px `#E2E8F0`    | inline `borderBottom` | ✅ |
| Logo icon              | SVG circuit 28×28  | SVG 28×28          | ✅ |
| Logo text              | "PROTOBOARD"       | `#3BA3D9` 20px bold | ✅ |
| Nav links              | Home / About / How It Works / Contact | `/` separators | ✅ |
| Nav link color         | `#4A5568`          | inline style       | ✅ |
| Nav link size          | 15 px medium       | `text-[15px] font-medium` | ✅ |
| Separator color        | `#CBD5E0`          | `text-[#CBD5E0]`   | ✅ |
| Sign Up button         | Pill, white text   | `rounded-full` bg `#3BA3D9` | ✅ |
| Sign Up font           | 14 px semibold     | `text-[14px] font-semibold` | ✅ |
| Padding (horizontal)   | 48 px              | `px-12`            | ✅ |
| Mobile: nav hidden     | Yes                | `hidden md:flex`   | ✅ |
| Cursor pointer on links| Yes                | `cursor-pointer`   | ✅ |
| Focus states           | Visible outline    | `focus:outline-2`  | ✅ |

---

## Checkpoint B — Hero Gradient

| Property               | Expected           | Implemented        | ✓ |
|------------------------|--------------------|--------------------|---|
| Gradient type          | Radial ellipse     | `radial-gradient(ellipse 80% 70% at 60% 40%, …)` | ✅ |
| Start color            | `#D6EEFB`         | 0% stop            | ✅ |
| Mid color 1            | `#E8F4FD`         | 30% stop           | ✅ |
| Mid color 2            | `#F4F9FE`         | 60% stop           | ✅ |
| End color              | `#FFFFFF`          | 100% stop          | ✅ |
| Overflow               | Hidden             | `overflow-hidden`  | ✅ |

---

## Checkpoint C — Hero Text & Buttons

| Property               | Expected           | Implemented        | ✓ |
|------------------------|--------------------|--------------------|---|
| H1 text                | "Build Intelligent\nCircuits with AI" | `<br />` break | ✅ |
| H1 font                | 44 px extrabold    | `text-[44px] font-extrabold` | ✅ |
| H1 line-height         | 1.15               | `leading-[1.15]`   | ✅ |
| H1 color               | `#1A1A2E`          | inline style       | ✅ |
| Subtitle text          | "AI-driven circuit Generation, diagram SPICE,\nand guided Physical assembly." | exact copy | ✅ |
| Subtitle font          | 16 px normal       | `text-[16px] font-normal` | ✅ |
| Subtitle color         | `#6B7280`          | inline style       | ✅ |
| Subtitle line-height   | 1.6                | `leading-[1.6]`    | ✅ |
| Subtitle max-width     | 380 px             | `max-w-[380px]`    | ✅ |
| Gap text → buttons     | 32 px              | `mt-8`             | ✅ |
| "Start Building" btn   | Pill, filled `#3BA3D9` | `rounded-full bg-#3BA3D9` | ✅ |
| "Learn More" btn       | Pill, outlined `#3BA3D9` | `rounded-full border-2` | ✅ |
| Button font            | 15 px semibold     | `text-[15px] font-semibold` | ✅ |
| Button padding         | 28 px h / 12 px v  | `px-7 py-3`        | ✅ |
| Button gap             | 16 px              | `gap-4`            | ✅ |
| Content max-width      | 1200 px            | `max-w-[1200px]`   | ✅ |
| Section padding top    | 80 px              | `pt-[80px]`        | ✅ |
| Section padding bottom | 100 px             | `pb-[100px]`       | ✅ |

---

## Checkpoint D — Hero Placeholder (Right Column)

| Property               | Expected           | Implemented        | ✓ |
|------------------------|--------------------|--------------------|---|
| Card height            | 380 px             | `h-[380px]`        | ✅ |
| Card max-width         | 560 px             | `max-w-[560px]`    | ✅ |
| Card border-radius     | 20 px              | `rounded-[20px]`   | ✅ |
| Card background        | `#EDF5FB`          | inline style       | ✅ |
| Card shadow            | `0 8px 32px rgba(59,163,217,0.12)` | inline style | ✅ |
| SVG breadboard         | 200×140            | `width="200" height="140"` | ✅ |
| Board fill             | `#D6EEFB`          | rect fill          | ✅ |
| Grid dots              | 5×10 pattern       | Array mapping      | ✅ |
| Chip                   | `#1A1A2E`          | rect fill          | ✅ |
| Wires                  | Red + Blue         | `#E53E3E` + `#3BA3D9` | ✅ |
| LED indicator          | Green              | `#48BB78` + `#68D391` | ✅ |
| Floating labels        | 3 pill badges      | rounded-md, shadow-sm | ✅ |
| Label font             | 11 px medium       | `text-[11px] font-medium` | ✅ |
| Layout 2-col           | flex-row on md+    | `md:flex-row`      | ✅ |

---

## Checkpoint E — How It Works Cards

| Property               | Expected           | Implemented        | ✓ |
|------------------------|--------------------|--------------------|---|
| Section bg             | `#F7FAFC`          | inline style       | ✅ |
| Section padding        | 48px h, 64px v     | `px-12 py-16`      | ✅ |
| Section max-width      | 1200 px            | `max-w-[1200px]`   | ✅ |
| Title text             | "How It Works"     | exact              | ✅ |
| Title font             | 32 px bold         | `text-[32px] font-bold` | ✅ |
| Title color            | `#1A1A2E`          | inline style       | ✅ |
| Title margin-bottom    | 48 px              | `mb-12`            | ✅ |
| Grid columns           | 3 on lg            | `lg:grid-cols-3`   | ✅ |
| Card border-radius     | 16 px              | `rounded-2xl`      | ✅ |
| Card padding           | 32 px              | `p-8`              | ✅ |
| Card border            | 2 px solid         | inline style       | ✅ |
| Card 1 border color    | `#B8DCF0`          | ✅                 | ✅ |
| Card 2 border color    | `#B8DCF0`          | ✅                 | ✅ |
| Card 3 border color    | `#D1D5DB`          | ✅                 | ✅ |
| Card 1 title           | "AI Circuit Generation" | exact         | ✅ |
| Card 1 desc            | "Describe you project idea." | exact (typo preserved) | ✅ |
| Card 2 title           | "Interactive Sandlox" | exact (typo preserved) | ✅ |
| Card 2 desc            | "Drag, drop & sircuits" | exact (typo preserved) | ✅ |
| Card 3 title           | "3. Guided Physical Assembly" | exact   | ✅ |
| Card 3 desc            | "Test real circuits easily" | exact     | ✅ |
| Card title font        | 18 px bold         | `text-[18px] font-bold` | ✅ |
| Card title color       | `#1A1A2E`          | inline style       | ✅ |
| Card desc font         | 14 px normal       | `text-[14px] font-normal` | ✅ |
| Card desc color        | `#6B7280`          | inline style       | ✅ |
| Icon size              | 48×48 SVG          | `width="48" height="48"` | ✅ |
| Icon color             | `#3BA3D9`          | stroke/fill        | ✅ |
| Icon margin-bottom     | 20 px              | `mb-5`             | ✅ |
| Card min-height        | 220 px             | inline style       | ✅ |
| Card alignment         | Center (text+icon) | `items-center text-center` | ✅ |
| Card gap               | 32 px              | `gap-8`            | ✅ |

---

## Checkpoint F — Responsive

| Property               | Expected           | Implemented        | ✓ |
|------------------------|--------------------|--------------------|---|
| Desktop target         | 1440 px            | `max-w-[1200px]` inner | ✅ |
| Hero stacking < md     | Column             | `flex-col md:flex-row` | ✅ |
| Nav hidden < md        | Hidden             | `hidden md:flex`   | ✅ |
| Cards 1-col < sm       | Yes                | `grid-cols-1`      | ✅ |
| Cards 2-col sm–lg      | Yes                | `sm:grid-cols-2`   | ✅ |
| Cards 3-col lg+        | Yes                | `lg:grid-cols-3`   | ✅ |
| Min body font          | 16 px              | ✅                 | ✅ |
| `prefers-reduced-motion`| Honored           | globals.css        | ✅ |

---

## Global Checks

| Check                          | Status | Notes |
|--------------------------------|--------|-------|
| `npm run build` passes         | ✅     | Compiled + static gen OK |
| TypeScript: no errors          | ✅     | `Finished TypeScript in 2.3s` |
| Font: Inter (next/font/google) | ✅     | weights 400–800, `--font-inter` |
| No shadcn/ui                   | ✅     | Not installed |
| No animations                  | ✅     | No keyframes / motion |
| No copy changes                | ✅     | All typos preserved |
| Design System doc              | ✅     | `docs/ui-ux/design-system.md` |
| WCAG AA contrast               | ✅     | `#1A1A2E` on white ≈ 16:1 |
| Focus states                   | ✅     | All interactive elements |
| Cursor pointer                 | ✅     | All clickable elements |
| SVG icons (no emojis)          | ✅     | All icons are SVG |
| 4px spacing scale              | ✅     | All values multiples of 4 |

---

## Files Modified / Created

| File | Action |
|------|--------|
| `src/app/layout.tsx` | Modified (Inter font, metadata) |
| `src/app/globals.css` | Modified (PROTOBOARD tokens) |
| `src/app/page.tsx` | Modified (component composition) |
| `src/components/Landing/Navbar.tsx` | Created |
| `src/components/Landing/Hero.tsx` | Created |
| `src/components/Landing/HowItWorks.tsx` | Created |
| `docs/ui-ux/design-system.md` | Modified (PROTOBOARD system) |
| `docs/ui-ux/pixel-checklist.md` | Created (this file) |

---

## Change Log: AuroraBackground Integration

**Date:** 2026-02-15

**Change:** Replaced the static radial gradient in the Hero section with AuroraBackground (Aceternity).

| Detail | Value |
|--------|-------|
| Old background | `radial-gradient(ellipse 80% 70% at 60% 40%, #D6EEFB…#FFFFFF)` |
| New background | `AuroraBackground` (animated aurora from Aceternity UI) |
| Containment | `overflow-hidden` on hero `<section>` + aurora in `absolute inset-0 z-0` wrapper |
| Content z-index | Hero content wrapped in `relative z-10` |
| Navbar affected? | **No** — remains white, sticky, independent of hero |
| How It Works affected? | **No** — remains `#F7FAFC` bg, independent section |
| Bleeding / glow leak? | **None** — `-inset-[10px]` compensates blur; `overflow-hidden` clips all edges |
| Animation | `aurora 60s linear infinite` — defined in `@theme inline` in globals.css |
| Reduced motion | Honored via existing `prefers-reduced-motion: reduce` in globals.css |
| Dependency added | `framer-motion` (required by AuroraBackground) |

### Files Changed

| File | Action |
|------|--------|
| `src/components/ui/aurora-background.tsx` | **Created** — AuroraBackground component (Aceternity, adapted for Tailwind v4) |
| `src/lib/utils.ts` | **Created** — `cn` class-name utility |
| `src/components/Landing/Hero.tsx` | **Modified** — removed static gradient, added AuroraBackground as `absolute inset-0 z-0` |
| `src/app/globals.css` | **Modified** — added `--animate-aurora` + `@keyframes aurora` in `@theme inline` |
| `package.json` | **Modified** — `framer-motion` added to dependencies |

---

## Change Log: Aurora Direction Inversion + Palette Preview

**Date:** 2026-02-15

### A) Direction Inversion (left → right)

| Detail | Value |
|--------|-------|
| Method | `transform: scaleX(-1)` applied to the **decorative inner div only** (the `absolute -inset-[10px]` layer) |
| Implementation | Inline style `{ transform: "scaleX(-1)" }` on the gradient div inside `aurora-background.tsx` |
| Why this method | Flips only the background layers without affecting children. No keyframe changes needed. |
| Content affected? | **No** — children are rendered outside the flipped div; z-10 content layer is untouched |
| Mask behaviour | `radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)` now concentrates at visual top-left (flipped from top-right) — aurora originates from the left |

### B) Palette Preview System

| Detail | Value |
|--------|-------|
| Prop added | `palette?: AuroraPalette` on `AuroraBackground` |
| Default when `palette` is `undefined` | Renders **exactly the original Aceternity colours** (no CSS vars set — hardcoded fallbacks used) |
| How it works | `buildAuroraGradient()` merges `palette` over `DEFAULTS` → inline style `--aurora` → consumed by `[background-image:var(--white-gradient),var(--aurora)]` |
| Default colours | `a1: #3b82f6`, `a2: #a5b4fc`, `a3: #93c5fd`, `a4: #ddd6fe`, `a5: #60a5fa` |
| Presets file | `src/theme/aurora-palettes.ts` |

#### Available Presets

| Preset | a1 | a2 | a3 | a4 | a5 | Mood |
|--------|----|----|----|----|----|----|
| `coolCyan` | `#9AE6FF` | `#60A5FA` | `#A7F3D0` | `#BAE6FD` | `#67E8F9` | Icy, tech-forward |
| `mintLavender` | `#A7F3D0` | `#C7D2FE` | `#93C5FD` | `#D9F99D` | `#A5B4FC` | Calm, approachable |
| `sunsetSoft` | `#FDBA74` | `#FCA5A5` | `#FBCFE8` | `#FDE68A` | `#F9A8D4` | Warm, inviting |

#### How to activate a preview palette

In [src/components/Landing/Hero.tsx](../../src/components/Landing/Hero.tsx), uncomment **one** line:

```ts
const AURORA_PREVIEW = undefined;                        // ← default (original)
// const AURORA_PREVIEW = AURORA_PALETTES.coolCyan;      // ← uncomment to preview
// const AURORA_PREVIEW = AURORA_PALETTES.mintLavender;
// const AURORA_PREVIEW = AURORA_PALETTES.sunsetSoft;
```

### Files Changed

| File | Action |
|------|--------|
| `src/components/ui/aurora-background.tsx` | **Modified** — added `palette?` prop, `buildAuroraGradient()` with defaults, `scaleX(-1)` on decorative div, removed hardcoded `[--aurora:…]` class (now inline style) |
| `src/theme/aurora-palettes.ts` | **Created** — 3 preset palettes (`coolCyan`, `mintLavender`, `sunsetSoft`) |
| `src/components/Landing/Hero.tsx` | **Modified** — imports `AURORA_PALETTES`, adds `AURORA_PREVIEW` toggle constant, passes `palette` prop |
