# Agent Rules — UI/UX Pro Max Skill

> Reglas universales para cualquier agente de IA (Cursor, Windsurf, Claude Code, Copilot, etc.)
> Si tu agente tiene su propio archivo de instrucciones, puedes copiar estas reglas allí.

## Objetivo

Usar el skill **ui-ux-pro-max** como guía inteligente de UI/UX.  
Antes de generar cualquier interfaz, el agente debe producir un **Design System Output** completo.

## Reglas obligatorias

### 1. Design System primero
- Antes de codificar cualquier pantalla, genera un Design System Output.
- Guárdalo en `docs/ui-ux/design-system.md`.
- Si necesitas variaciones por página, usa `docs/ui-ux/page-overrides/<nombre-pagina>.md`.

### 2. Consistencia de diseño
- Respetar colores, tipografías, espaciado, radios y sombras del Design System.
- Spacing: escala de 4 px (`4, 8, 12, 16, 24, 32, 48, 64`).
- Tipografía: fuentes definidas en el Design System, importadas desde Google Fonts.

### 3. Accesibilidad (WCAG AA mínimo)
- Contraste de texto ≥ 4.5:1.
- Focus states visibles en todos los elementos interactivos.
- `prefers-reduced-motion` respetado.
- Alt text en todas las imágenes.
- Roles ARIA cuando aplique.

### 4. Interacciones
- `cursor-pointer` en todo elemento clickeable.
- Transiciones suaves (150–300 ms).
- Hover states claros y coherentes.

### 5. Responsive
- Diseñar para: 375 px, 768 px, 1024 px, 1440 px.

### 6. Iconos
- Usar SVG (Lucide / Heroicons).
- **Nunca emojis como iconos**.

### 7. Anti-patterns a evitar
- Gradientes AI purple/pink genéricos sin contexto.
- Colores neón sin justificación.
- Animaciones agresivas o que bloqueen scroll.
- Texto sobre imágenes sin overlay de contraste.

## Cómo usar el skill

### Desde el IDE (Copilot — Workflow Mode)
```
/ui-ux-pro-max Build a landing page for my SaaS product
```

### Desde el IDE (Claude / Cursor / Windsurf — Skill Mode)
Solo pide naturalmente:
```
Build a landing page for my SaaS product
```
El skill se activa automáticamente.

### Desde CLI (Design System Generator directo)
```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "SaaS dashboard" --design-system -p "MyApp"
```

## Archivos de referencia
- Skill source: `tools/ui-ux-pro-max-skill/`
- Copilot prompts: `.github/prompts/ui-ux-pro-max/`
- Claude skills: `.claude/skills/ui-ux-pro-max/`
- Design System: `docs/ui-ux/design-system.md`
- Page overrides: `docs/ui-ux/page-overrides/`
