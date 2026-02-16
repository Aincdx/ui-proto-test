# Design System — PROTOBOARD Landing Page

> Engineering-grade palette: Academic rigor + AI intelligence + Professional simulation software.
> Generated and maintained following WUmax (ui-ux-pro-max) methodology.

---

## 1. Pattern (Macro Structure)

```
┌─────────────────────────────────────────────────────┐
│ INTERACTIVE NAVBAR (glass dark, 80px, fixed top)    │
│  Logo + Brand │ EXPLORE dropdown │ Nav │ Actions    │
├─────────────────────────────────────────────────────┤
│ HERO (aurora bg left, blueprint grid right)         │
│  ┌──────────────┬──────────────────┐                │
│  │ Text block   │  3D GLB model    │                │
│  │ Eyebrow      │  (interactive,   │                │
│  │ H1 2 lines   │   auto-rotate)   │                │
│  │ Subtitle     │                  │                │
│  │ Trust dots   │                  │                │
│  │ 2 CTAs       │                  │                │
│  └──────────────┴──────────────────┘                │
├─────────────────────────────────────────────────────┤
│ HOW IT WORKS (elevated bg, 3 cards)                 │
├─── Section bridge ──────────────────────────────────┤
│ PROMPT TO HARDWARE (code terminal mockup)           │
├─── Section bridge ──────────────────────────────────┤
│ CIRCUIT SANDBOX (interactive sandbox preview)       │
├─── Section bridge ──────────────────────────────────┤
│ WHY DIFFERENT (comparison cards)                    │
├─── Section bridge ──────────────────────────────────┤
│ CALL TO ACTION (closing CTA with benefits)          │
└─────────────────────────────────────────────────────┘
```

- **Flow:** Navbar → Hero → How It Works → Prompt To Hardware → Circuit Sandbox → Why Different → Call To Action
- **CTA placement:** Hero (above fold), Navbar (Sign Up), CTA section (closing)
- **Visual weight:** Left text / Right 3D model in hero. 48/52 split.

---

## 2. Layout Grid & Spacing

| Token | px Value | Tailwind | Usage |
|-------|----------|----------|-------|
| `container-max` | 1440px | `max-w-[1440px]` | Main content max width (xl) |
| `container-max-2xl` | 1500px | `max-w-[1500px]` | Wide screens |
| `container-pad` | 48px / 40px | `px-12` / `xl:px-10` | Horizontal page padding |
| `navbar-h` | 80px | `h-20` | Navbar height |
| `hero-pt` | 140px / 120px | `pt-[140px]` / `xl:pt-[120px]` | Hero top padding |
| `hero-pb` | 80px / 60px | `pb-[80px]` / `xl:pb-[60px]` | Hero bottom padding |
| `section-py` | 64px | `py-16` | Section vertical padding |
| `card-pad` | 32px | `p-8` | Card inner padding |
| `card-gap` | 32px | `gap-8` | Gap between cards |
| `hero-gap` | 40-64px | `gap-10` / `xl:gap-16` | Gap between hero columns |
| `btn-px` | 28-40px | `px-7` / `xl:px-9` / `2xl:px-10` | Button horizontal padding |
| `btn-py` | 14-18px | `py-3.5` / `xl:py-4` / `2xl:py-[18px]` | Button vertical padding |

**Spacing scale:** 4px multiples — `4, 8, 12, 16, 24, 32, 48, 64`.

---

## 3. Color Tokens — Engineering Grade

### Palette Philosophy
- **Primary:** Deep, desaturated blue — evokes CAD tools, lab software, simulation environments
- **Secondary accent:** Cool steel-blue — for micro-details and technical hierarchy
- **Typography:** Cool navy tones — high authority without visual heaviness
- **Backgrounds:** Faint cool undertone — controlled technical workspace feel
- **Grid:** Blueprint-adjacent — reinforces engineering environment

### Light Mode

| Token | HEX | Usage |
|-------|-----|-------|
| `--primary` | `#2A7AB4` | Buttons, logo, accents, card borders |
| `--primary-dark` | `#1E6694` | CTA bg, accent word, deeper emphasis |
| `--primary-light` | `#E3EEF6` | Light tint backgrounds |
| `--primary-glow` | `rgba(42,122,180,0.10)` | Subtle radial glows |
| `--accent-secondary` | `#5C7C99` | Micro-details, technical annotations |
| `--text-dark` | `#0F1B2D` | Headlines, strong text (cool navy) |
| `--text-body` | `#3D4F63` | Body copy, subtitles |
| `--text-muted` | `#5A6B7D` | Captions, meta text |
| `--text-nav` | `#3D4F63` | Navigation links |
| `--bg-base` | `#F8FAFB` | Page background (cool tint) |
| `--bg-elevated` | `#EFF3F7` | Elevated sections |
| `--bg-surface` | `#FFFFFF` | Content surfaces, cards |
| `--bg-surface-hover` | `#F2F5F8` | Hover states |
| `--border-card` | `#C2D1DE` | Card borders (cool steel) |
| `--border-light` | `#DAE2EB` | Subtle dividers |
| `--btn-primary-bg` | `#1E6694` | Primary CTA background |
| `--btn-ghost-text` | `#1E6694` | Ghost button text |
| `--btn-ghost-border` | `#B5C7D6` | Ghost button border |
| `--accent-word` | `#1E6694` | Headline accent word |
| `--accent-underline` | `#2A7AB4` | Underline decoration |

### Dark Mode

| Token | HEX | Usage |
|-------|-----|-------|
| `--primary` | `#3A9BCC` | Primary interaction color |
| `--primary-dark` | `#2A7AB4` | Deeper emphasis |
| `--accent-secondary` | `#6B8DAA` | Technical micro-details |
| `--text-dark` | `#E4EAF0` | Headlines (cool white) |
| `--text-body` | `#8A9BB0` | Body copy (steel) |
| `--text-muted` | `#5A6B7D` | Captions |
| `--bg-base` | `#040810` | Page background (deep navy) |
| `--bg-elevated` | `#070D19` | Elevated sections |
| `--bg-surface` | `#0B1524` | Content surfaces |
| `--border-card` | `#152435` | Card borders |
| `--btn-primary-bg` | `#2A7AB4` | Primary CTA background |
| `--accent-word` | `#3A9BCC` | Headline accent word |

### Contrast Verification (WCAG AA ≥ 4.5:1)

| Pair | Contrast | Pass? |
|------|----------|-------|
| `--text-dark` (#0F1B2D) on `--bg-base` (#F8FAFB) | ~15.8:1 | ✅ AAA |
| `--text-body` (#3D4F63) on `--bg-base` (#F8FAFB) | ~7.4:1 | ✅ AAA |
| `--text-muted` (#5A6B7D) on `--bg-base` (#F8FAFB) | ~5.1:1 | ✅ AA |
| `--text-dark` (#E4EAF0) on `--bg-base` (#040810) | ~16.2:1 | ✅ AAA |
| `--text-body` (#8A9BB0) on `--bg-base` (#040810) | ~6.2:1 | ✅ AA |
| White on `--btn-primary-bg` (#1E6694) | ~5.9:1 | ✅ AA |

---

## 4. Typography Tokens

| Element | Family | Weight | Size | Line-Height | Color Token |
|---------|--------|--------|------|-------------|-------------|
| Logo | Space Grotesk | 700 | 20px | 1.2 | `--primary` |
| Nav link | IBM Plex Sans | 500 | 15px | 1.5 | `--text-nav` |
| Nav CTA | IBM Plex Sans | 600 | 14px | 1.2 | white |
| H1 line 1 | Space Grotesk | 600 | 58px (xl) | 1.06 | `--text-dark` |
| H1 accent word | Space Grotesk | 800 | 72px (xl) | 1.05 | `--accent-word` |
| Eyebrow | IBM Plex Sans | 600 | 12px | 1.5 | `--eyebrow-text` |
| Subtitle | IBM Plex Sans | 400 | 18px (xl) | 1.7 | `--text-body` |
| Section title | Space Grotesk | 700 | 32px | 1.3 | `--text-dark` |
| Card title | Space Grotesk | 700 | 18px | 1.3 | `--text-dark` |
| Card desc | IBM Plex Sans | 400 | 14px | 1.5 | `--text-body` |
| Button primary | IBM Plex Sans | 600 | 15-17px | 1.2 | white |
| Button ghost | IBM Plex Sans | 500 | 15-17px | 1.2 | `--btn-ghost-text` |

**Font stack:**
- Display: `Space Grotesk` via `next/font/google` → `--font-display`
- Body: `IBM Plex Sans` via `next/font/google` → `--font-body`

---

## 5. Aurora Palettes

| Preset | Mood | Colors |
|--------|------|--------|
| `engineeringBlue` | Desaturated, authoritative | `#7BB5D0 #5C8DAD #8CAFC5 #A5C3D6 #6B9DB8` |
| `steelSlate` | Cold, instrument-panel | `#8A9FB5 #6E8A9E #9BB2C4 #7C96AB #A3B8C8` |
| `labNeutral` | Minimal, academic | `#94A8B8 #7A92A5 #A8BCC9 #8DA1B2 #B0C2CF` |

---

## 6. Grid / Technical Zone

- Blueprint-style infinite grid, scoped to right 48%→100% of hero
- `cellSize`: 36px (tighter than default for technical density)
- `baseOpacity`: 0.07 (subtle but intentional)
- `revealOpacity`: 0.35 (mouse-reveal spotlight)
- `revealRadius`: 280px
- Feather mask: CSS `mask-image` gradient, transparent→40%→solid transition
- Color: inherits from `text-muted-foreground` (cool gray)

---

## 7. Emotional Calibration

### ✅ The palette SHOULD evoke:
- Precision
- Reliability
- Academic credibility
- AI intelligence
- Advanced simulation tools (Proteus, LTspice, MATLAB)
- Professional engineering software

### ❌ The palette should NOT evoke:
- Startup marketing SaaS
- Fintech branding
- Social media product
- Playful AI tool
- Neon/futuristic aesthetic

---

## 8. Anti-patterns (DO NOT)

- Do NOT use bright/startup-blue (`#3BA3D9` or similar) — replaced with engineering `#2A7AB4`
- Do NOT use warm grays — all grays must have cool blue undertone
- Do NOT use neon or high-saturation accents
- Do NOT add playful gradients (AI purple/pink/rainbow)
- Do NOT use emojis as icons — SVG only (Lucide / Heroicons / custom)
- Do NOT use warm tones for accents or highlights
- Do NOT reduce grid intentionality — the grid is blueprint, not decoration

---

## 9. Pre-delivery Checklist

- [x] All text passes WCAG AA contrast (≥ 4.5:1)
- [x] Focus states visible on all interactive elements
- [x] `prefers-reduced-motion` respected (globals.css)
- [x] No warm grays anywhere in the system
- [x] Primary blue reads as "engineering tool" not "SaaS signup"
- [x] CTA buttons feel decisive, not playful
- [x] Grid reinforces technical environment
- [x] Background has controlled cool workspace feel
- [x] All hardcoded colors use CSS custom properties
- [x] Dark mode maintains same engineering authority
