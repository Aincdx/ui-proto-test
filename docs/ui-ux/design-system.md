# Design System — PROTOBOARD Landing Page

> Pixel-perfect reference from provided screenshot.
> Generated following WUmax (ui-ux-pro-max) methodology.

---

## 1. Pattern (Macro Structure)

```
┌─────────────────────────────────────────────────────┐
│ NAVBAR (white bg, ~80px height)                     │
│  Logo left │ Links center-right │ CTA pill right    │
├─────────────────────────────────────────────────────┤
│ HERO (light blue radial gradient bg)                │
│  ┌─────────────┬─────────────────────┐              │
│  │ Text block  │  Hero illustration  │              │
│  │ H1 2 lines  │  (placeholder)      │              │
│  │ Subtitle    │                     │              │
│  │ 2 buttons   │                     │              │
│  └─────────────┴─────────────────────┘              │
├─────────────────────────────────────────────────────┤
│ HOW IT WORKS (white/very light gray bg)             │
│  Title centered                                     │
│  ┌─────┐  ┌─────┐  ┌─────┐                         │
│  │Card1│  │Card2│  │Card3│  (3-col grid)            │
│  └─────┘  └─────┘  └─────┘                         │
└─────────────────────────────────────────────────────┘
```

- **Flow:** Navbar → Hero → How It Works
- **CTA placement:** Hero (above fold), Navbar (Sign Up)
- **Visual weight:** Left text / Right image in hero

---

## 2. Layout Grid & Spacing

| Token | px Value | Tailwind | Usage |
|-------|----------|----------|-------|
| `container-max` | 1200px | `max-w-[1200px]` | Main content max width |
| `container-pad` | 48px | `px-12` | Horizontal page padding |
| `navbar-h` | 80px | `h-[80px]` | Navbar height |
| `hero-py` | 80px top / 100px bottom | `pt-[80px] pb-[100px]` | Hero vertical padding |
| `section-py` | 64px | `py-16` | Section vertical padding |
| `card-pad` | 32px | `p-8` | Card inner padding |
| `card-gap` | 32px | `gap-8` | Gap between cards |
| `hero-gap` | 48px | `gap-12` | Gap between hero columns |
| `btn-px` | 28px | `px-7` | Button horizontal padding |
| `btn-py` | 12px | `py-3` | Button vertical padding |
| `btn-gap` | 16px | `gap-4` | Gap between hero buttons |
| `space-xs` | 8px | `2` | Smallest spacing |
| `space-sm` | 12px | `3` | Small spacing |
| `space-md` | 16px | `4` | Medium spacing |
| `space-lg` | 24px | `6` | Large spacing |

---

## 3. Color Tokens

| Token | HEX | Usage |
|-------|-----|-------|
| `primary` | `#3BA3D9` | Buttons, logo, accents, card borders |
| `primary-dark` | `#2E8BC0` | Button hover states |
| `primary-light` | `#E8F4FD` | Hero gradient start tint |
| `hero-gradient-start` | `#E3F2FD` | Hero background gradient (center) |
| `hero-gradient-end` | `#F8FCFF` | Hero background gradient (edges) |
| `white` | `#FFFFFF` | Navbar bg, card bg, section bg |
| `bg-light` | `#F7FAFC` | How It Works section bg |
| `text-dark` | `#1A1A2E` | H1, card titles, strong text |
| `text-body` | `#6B7280` | Subtitles, body text |
| `text-nav` | `#4A5568` | Navbar links |
| `border-card` | `#B8DCF0` | Card border color |
| `border-light` | `#E2E8F0` | Subtle dividers |

---

## 4. Typography Tokens

| Element | Family | Weight | Size | Line-Height | Color |
|---------|--------|--------|------|-------------|-------|
| Logo | Inter | 700 (bold) | 20px | 1.2 | `#3BA3D9` |
| Nav link | Inter | 500 (medium) | 15px | 1.5 | `#4A5568` |
| Nav CTA | Inter | 600 (semibold) | 14px | 1.2 | `#FFFFFF` |
| H1 Hero | Inter | 800 (extrabold) | 44px | 1.15 | `#1A1A2E` |
| Subtitle | Inter | 400 (regular) | 16px | 1.6 | `#6B7280` |
| Section title | Inter | 700 (bold) | 32px | 1.3 | `#1A1A2E` |
| Card title | Inter | 700 (bold) | 18px | 1.3 | `#1A1A2E` |
| Card desc | Inter | 400 (regular) | 14px | 1.5 | `#6B7280` |
| Button primary | Inter | 600 (semibold) | 15px | 1.2 | `#FFFFFF` |
| Button outline | Inter | 600 (semibold) | 15px | 1.2 | `#3BA3D9` |

**Font import:** Inter via `next/font/google`

---

## 5. Component Specs

### 5.1 Navbar
- Height: 80px
- Background: white (`#FFFFFF`)
- Bottom border: 1px `#E2E8F0` (very subtle)
- **Left:** Logo icon (SVG placeholder, ~24px) + "PROTOBOARD" text
- **Center-right:** Links separated by `/` dividers: Home / About / How It Works / Contact
- **Right:** "Sign Up" pill button (bg `#3BA3D9`, text white, border-radius full `rounded-full`, px-6 py-2)
- Logo text: uppercase, bold, letter-spacing `tracking-wider`

### 5.2 Hero Buttons
- **Primary ("Start Building"):** `bg-[#3BA3D9]` text-white, `rounded-full`, px-7 py-3, font-semibold
- **Secondary ("Learn More"):** border-2 `border-[#3BA3D9]` text `#3BA3D9`, bg transparent, `rounded-full`, px-7 py-3, font-semibold
- Hover: opacity 90% (primary), bg `#E8F4FD` (secondary)

### 5.3 How It Works Cards
- Background: white
- Border: 2px solid `#B8DCF0`
- Border-radius: 16px (`rounded-2xl`)
- Padding: 32px
- Min-height: ~220px
- Icon: centered at top, ~48px, color `#3BA3D9`
- Title: centered, bold, 18px
- Description: centered, regular, 14px, gray
- Third card has slight variation: border `#D1D5DB` (light gray instead of blue) based on screenshot

---

## 6. Anti-patterns (DO NOT)

- Do NOT use shadcn or any component library
- Do NOT change the copy text from the screenshot
- Do NOT add animations or transitions beyond simple hover
- Do NOT use dark mode
- Do NOT use gradients other than the specified hero gradient
- Do NOT add heavy box-shadows (keep shadows very subtle)
- Do NOT use emojis as icons
- Do NOT change the card border style or radius
- Do NOT invent new sections not in the screenshot

---

## 7. Pixel-Match Checklist

- [ ] Navbar height exactly ~80px with white background
- [ ] Logo "PROTOBOARD" with icon, uppercase, blue color
- [ ] Nav links with "/" separator, proper spacing
- [ ] "Sign Up" button pill style, blue bg, white text
- [ ] Hero gradient: radial blue tint, center-biased, fading to near-white
- [ ] Hero H1: "Build Intelligent / Circuits with AI" — 2 lines, extrabold
- [ ] Hero subtitle: 1 line, gray, correct copy
- [ ] Two pill buttons aligned left in hero
- [ ] Hero placeholder image: rounded, shadow, right-aligned
- [ ] "How It Works" section: white bg, centered title
- [ ] 3 cards in grid, blue borders, rounded-2xl
- [ ] Card icons centered, titles centered, descriptions centered
- [ ] Desktop 1440px viewport looks identical to screenshot
- [ ] Content contained within ~1200px centered container
