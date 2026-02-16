# Copilot Instructions — UI/UX Pro Max Skill

## Objetivo

Este proyecto usa el skill **ui-ux-pro-max** como guía inteligente de UI/UX.  
Antes de generar cualquier interfaz, Copilot debe producir un **Design System Output** completo y guardarlo en `docs/ui-ux/design-system.md`.

## Reglas de estilo

1. **Consistencia**: Todos los componentes deben seguir el Design System generado (colores, tipografías, espaciado, radios, sombras).
2. **Spacing**: Usar escala de 4 px (`4, 8, 12, 16, 24, 32, 48, 64`). No inventar valores intermedios.
3. **Tipografía**: Usar las fuentes definidas en el Design System. Importar desde Google Fonts con `next/font`.
4. **Accesibilidad (WCAG AA mínimo)**:
   - Contraste de texto ≥ 4.5:1.
   - Focus states visibles en todos los elementos interactivos.
   - `prefers-reduced-motion` respetado.
   - Alt text en todas las imágenes.
   - Roles ARIA cuando aplique.
5. **Interacciones**:
   - `cursor-pointer` en todo elemento clickeable.
   - Transiciones suaves (150–300 ms).
   - Hover states claros y coherentes.
6. **Responsive**: Diseñar para 375 px, 768 px, 1024 px, 1440 px.
7. **Iconos**: Usar SVG (Lucide / Heroicons). **Nunca emojis como iconos**.
8. **Anti-patterns a evitar**:
   - Gradientes AI purple/pink genéricos sin contexto.
   - Colores neón sin justificación.
   - Animaciones agresivas o que bloqueen scroll.
   - Texto sobre imágenes sin overlay de contraste.

## Flujo de trabajo

1. **Antes de codificar cualquier pantalla nueva**:
   - Genera un Design System Output (Pattern, Style, Colors, Typography, Effects, Anti-patterns, Checklist).
   - Guárdalo en `docs/ui-ux/design-system.md`.
2. **Si la pantalla requiere variaciones**, crea un override en `docs/ui-ux/page-overrides/<nombre-pagina>.md`.
3. **Antes de entregar**, ejecuta mentalmente el Pre-delivery Checklist del Design System.

## Cómo invocar el skill en Copilot (Workflow Mode)

Usa el slash command en el chat:

```
/ui-ux-pro-max Build a landing page for my SaaS product
```

## Prompt de ejemplo

```
/ui-ux-pro-max Genera un Design System para una landing page de una app de circuitos de IA. Stack: Next.js + Tailwind + shadcn/ui. Incluye: Pattern, Style, Colors, Typography, Anti-patterns, Pre-delivery Checklist.
```

## Referencia

- Skill source: `tools/ui-ux-pro-max-skill/`
- Copilot prompts: `.github/prompts/ui-ux-pro-max/`
- Claude skills: `.claude/skills/ui-ux-pro-max/`
- Design System: `docs/ui-ux/design-system.md`
- Page overrides: `docs/ui-ux/page-overrides/`
