# Design System — AI Circuit Lab

> Generado automáticamente por el skill **ui-ux-pro-max** v2.2.1
> Fuente de verdad (Master Document) para todo el UI del proyecto.

---

## Pattern
- **Name:** Minimal & Direct + Demo
- **CTA Placement:** Above fold
- **Sections:** Hero > Features > CTA

## Style
- **Name:** Flat Design
- **Keywords:** 2D, minimalist, bold colors, no shadows, clean lines, simple shapes, typography-focused, modern, icon-heavy
- **Best For:** Web apps, mobile apps, cross-platform, startup MVPs, user-friendly, SaaS, dashboards, corporate
- **Performance:** Excellent | **Accessibility:** WCAG AAA

## Colors
| Role | Hex | Preview |
|------|-----|---------|
| Primary | `#6366F1` | Indigo |
| Secondary | `#818CF8` | Light Indigo |
| CTA | `#10B981` | Emerald |
| Background | `#F5F3FF` | Violet 50 |
| Text | `#1E1B4B` | Indigo 950 |

*Notes: Indigo primary + emerald CTA*

## Typography
- **Heading:** Plus Jakarta Sans (semibold/bold)
- **Body:** Plus Jakarta Sans (regular/medium)
- **Mood:** friendly, modern, SaaS, clean, approachable, professional
- **Best For:** SaaS products, web apps, dashboards, B2B, productivity tools
- **Google Fonts:** [Plus Jakarta Sans](https://fonts.google.com/share?selection.family=Plus+Jakarta+Sans:wght@300;400;500;600;700)

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
```

## Key Effects
- No gradients/shadows
- Simple hover (color/opacity shift)
- Fast loading
- Clean transitions (150-200ms ease)
- Minimal icons (Lucide)

## Spacing Scale
`4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px`

## Avoid (Anti-patterns)
- Complex onboarding flow
- Cluttered layout
- Generic AI purple/pink gradients
- Emojis as icons
- Animations that block scroll

## Pre-Delivery Checklist
- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard nav
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px

---

## Cómo regenerar

```bash
python .claude/skills/ui-ux-pro-max/scripts/search.py "AI circuit lab SaaS technology" --design-system -p "AI Circuit Lab" -f markdown
```

O desde el chat del IDE:
```
/ui-ux-pro-max Genera Design System para AI Circuit Lab. Stack: Next.js + Tailwind + shadcn/ui
```
