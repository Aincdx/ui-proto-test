# SETUP_UI_UX_PRO_MAX.md

> Registro completo de instalación del skill **ui-ux-pro-max** (nextlevelbuilder).
> Fecha: 2026-02-15

---

## Requisitos previos verificados

| Herramienta | Versión detectada | Estado |
|-------------|-------------------|--------|
| Node.js | v22.20.0 | OK |
| npm | 10.9.3 | OK |
| Git | 2.50.1.windows.1 | OK |
| Python | 3.13.3 | OK |

---

## Paso 0 — Preparación del repo

### 0.1 — Inicializar Git

```bash
git init
```

**Resultado:** `Initialized empty Git repository in C:/Users/dream/Downloads/ui proto test/.git/`

### 0.2 — Crear `.gitignore`

Creado con exclusiones para Node.js, Next.js, TypeScript, Vercel. Ver archivo.

### 0.3 — Crear `README.md`

Creado con descripción del proyecto, stack y enlaces a documentación.

---

## Paso 1 — Crear proyecto Next.js

### 1.1 — Primer intento (falló)

```bash
npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
```

**Error:** `Could not create a project called "ui proto test" because of npm naming restrictions: name can only contain URL-friendly characters`

**Fix:** La carpeta tiene espacios. Se creó en subcarpeta y se movió:

```bash
npx create-next-app@latest ui-proto-test --ts --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --yes
```

**Resultado:** `Success! Created ui-proto-test`

Luego se movieron todos los archivos a la raíz:
```powershell
Get-ChildItem "ui-proto-test" -Force | Where-Object { $_.Name -ne '.git' } | ForEach-Object { Move-Item $_.FullName (Join-Path $PWD $_.Name) -Force }
Remove-Item "ui-proto-test" -Recurse -Force
```

### 1.2 — Instalar dependencias

Dependencias instaladas por `create-next-app`:
- next 16.1.6, react 19.2.3, react-dom 19.2.3
- tailwindcss ^4, typescript ^5, eslint ^9, eslint-config-next

### 1.3 — Build de verificación

```bash
npm run build
```

**Resultado:** `✓ Compiled successfully` — 0 errores.

---

## Paso 2 — Descargar/anexar el skill

### Método: Git Submodule (recomendado)

```bash
git submodule add https://github.com/nextlevelbuilder/ui-ux-pro-max-skill.git tools/ui-ux-pro-max-skill
```

**Resultado:** Submodule clonado en `tools/ui-ux-pro-max-skill/` (commit `6623f12`, v2.2.1).

**Nota:** Se añadió `"tools"` al array `exclude` de `tsconfig.json` para evitar que TypeScript analice el código fuente del skill.

### Estructura del skill

```
tools/ui-ux-pro-max-skill/
├── .claude/            # Skill para Claude Code
├── .claude-plugin/     # Plugin de Claude
├── .shared/            # Archivos compartidos
├── cli/                # Código fuente del CLI (uipro-cli)
├── src/                # Source of truth (data, scripts, templates)
├── CLAUDE.md           # Guía de desarrollo
├── README.md           # Documentación completa
└── LICENSE             # MIT
```

---

## Paso 3 — Instalar CLI y vincular al proyecto

### 3.1 — Instalación global

```bash
npm install -g uipro-cli
```

**Resultado:** `added 23 packages in 2s` — CLI disponible como `uipro`.

### 3.2 — Verificar CLI

```bash
uipro --help
```

**Resultado:**
```
Usage: uipro [options] [command]
Commands:
  init [options]    Install UI/UX Pro Max skill to current project
  versions          List available versions
  update [options]  Update UI/UX Pro Max to latest version
```

### 3.3 — Inicializar para Copilot

```bash
uipro init --ai copilot
```

**Resultado:**
```
info Installing for: GitHub Copilot (.github/prompts/)
✔ Generated from templates!
info Installed folders: + .github
success UI/UX Pro Max installed successfully!
```

**Archivos generados en `.github/prompts/ui-ux-pro-max/`:**
- `PROMPT.md` — Prompt principal del skill
- `data/` — CSVs con estilos, colores, tipografías, patrones, razonamiento IA
- `scripts/` — Scripts Python para búsqueda y generación de Design System

### 3.4 — Inicializar para Claude

```bash
uipro init --ai claude
```

**Resultado:**
```
info Installing for: Claude Code (.claude/skills/)
✔ Generated from templates!
info Installed folders: + .claude
success UI/UX Pro Max installed successfully!
```

**Archivos generados en `.claude/skills/ui-ux-pro-max/`:**
- `SKILL.md` — Definición del skill
- `data/` — CSVs (mismos datos)
- `scripts/` — Scripts Python

### 3.5 — Scripts añadidos a `package.json`

```json
{
  "uipro:init:copilot": "uipro init --ai copilot",
  "uipro:init:claude": "uipro init --ai claude",
  "uipro:init:cursor": "uipro init --ai cursor",
  "uipro:init:all": "uipro init --ai all",
  "uipro:update": "uipro update",
  "uipro:versions": "uipro versions",
  "uipro:help": "uipro --help"
}
```

---

## Paso 4 — Integración con Copilot

### 4.1 — `.github/copilot-instructions.md`

Creado con:
- Objetivo del skill
- Reglas de estilo (spacing, tipografía, accesibilidad, interacciones, responsive, iconos)
- Anti-patterns a evitar
- Flujo de trabajo (Design System primero)
- Cómo invocar el skill (`/ui-ux-pro-max ...`)
- Prompts de ejemplo

### 4.2 — `docs/ui-ux/design-system.md`

Creado con un Design System de ejemplo generado por el skill para "AI Circuit Lab":
- Pattern: Minimal & Direct + Demo
- Style: Flat Design
- Colors: Indigo (#6366F1) + Emerald CTA (#10B981)
- Typography: Plus Jakarta Sans
- Pre-Delivery Checklist

### 4.3 — `docs/ui-ux/page-overrides/`

Creado directorio con `README.md` explicando el patrón Master + Override.

---

## Paso 5 — Integración con otros agentes

### 5.1 — Claude Code

Inicializado con `uipro init --ai claude` (ver Paso 3.4).

### 5.2 — `AGENT_RULES.md`

Creado en la raíz del proyecto con reglas universales para cualquier agente:
- Design System primero
- Consistencia, spacing, tipografía
- Accesibilidad WCAG AA
- Interacciones, responsive, iconos
- Anti-patterns
- Instrucciones para Copilot (Workflow Mode) y Claude/Cursor (Skill Mode)

---

## Paso 6 — Smoke Test

### 6.1 — Versiones

```bash
node -v   # v22.20.0
npm -v    # 10.9.3
```

### 6.2 — Build

```bash
npm run build
```

**Resultado:**
```
▲ Next.js 16.1.6 (Turbopack)
✓ Compiled successfully in 1842.4ms
✓ Finished TypeScript in 1865.8ms
✓ Generating static pages (4/4)
Route: / (Static)
```

### 6.3 — Design System Generator (CLI Python)

```bash
python .claude/skills/ui-ux-pro-max/scripts/search.py "AI circuit lab SaaS technology" --design-system -p "AI Circuit Lab" -f markdown
```

**Resultado:** Design System completo generado (guardado en `docs/ui-ux/design-system.md`).

### 6.4 — Página de ejemplo

Creada `src/app/page.tsx` con landing page que usa el Design System:
- Navbar con links y CTA
- Hero section con título, descripción y botones
- Features grid (6 cards)
- How It Works (3 steps)
- CTA final
- Footer

Usa los colores del Design System (#6366F1, #818CF8, #10B981, #F5F3FF, #1E1B4B) y la tipografía Plus Jakarta Sans.

### 6.5 — Dev Server

```bash
npm run dev
```

**Resultado:** `GET / 200 in 2.3s` — Page loads OK.

---

## Paso 7 — Entregables finales

### Estructura del repositorio

```
.
├── .claude/                          # Skill para Claude Code
│   └── skills/ui-ux-pro-max/        # Data, scripts, SKILL.md
├── .github/
│   ├── copilot-instructions.md      # Reglas para Copilot
│   └── prompts/ui-ux-pro-max/       # Prompt, data, scripts para Copilot
├── docs/ui-ux/
│   ├── design-system.md             # Design System Master (generado)
│   └── page-overrides/              # Overrides por página
├── src/app/
│   ├── globals.css                  # CSS con variables del Design System
│   ├── layout.tsx                   # Layout con Plus Jakarta Sans
│   └── page.tsx                     # Landing page de ejemplo
├── tools/
│   └── ui-ux-pro-max-skill/        # Submodule del skill completo
├── AGENT_RULES.md                   # Reglas universales para cualquier agente
├── README.md                        # README del proyecto
├── SETUP_UI_UX_PRO_MAX.md          # Este archivo
├── package.json                     # Con scripts uipro:*
└── tsconfig.json                    # Con tools/ excluido
```

---

## Cómo usar — 3 Prompts de ejemplo

### 1. Generar Design System (landing de IA de circuitos)

En el chat de Copilot:
```
/ui-ux-pro-max Genera un Design System para una landing page de una app de IA de circuitos.
Stack: Next.js + Tailwind + shadcn/ui.
Incluye: Pattern, Style, Colors, Typography, Anti-patterns, Pre-delivery Checklist.
Guarda el resultado en docs/ui-ux/design-system.md.
```

O directamente desde CLI:
```bash
python .claude/skills/ui-ux-pro-max/scripts/search.py "AI circuit technology" --design-system -p "AI Circuit Lab" -f markdown
```

### 2. Generar Hero + Navbar siguiendo el Design System

```
/ui-ux-pro-max Genera un hero section y navbar para AI Circuit Lab.
Lee el Design System de docs/ui-ux/design-system.md.
Usa los colores, tipografía y spacing definidos.
Asegura accesibilidad: contraste 4.5:1, focus states, cursor-pointer en clickeables.
Stack: Next.js + Tailwind.
```

### 3. Iterar accesibilidad y spacing (checklist)

```
/ui-ux-pro-max Revisa la página src/app/page.tsx contra el Pre-Delivery Checklist del Design System.
Verifica:
- Contraste de texto ≥ 4.5:1
- cursor-pointer en todos los elementos clickeables
- Focus states visibles
- prefers-reduced-motion respetado
- Responsive en 375px, 768px, 1024px, 1440px
- Sin emojis como iconos
Corrige cualquier problema encontrado.
```

---

## Troubleshooting

### Error: "name can only contain URL-friendly characters"

La carpeta raíz tiene espacios (`ui proto test`). `create-next-app` no los acepta.

**Fix:** Crear en subcarpeta y mover, o renombrar la carpeta raíz a un nombre sin espacios:
```bash
# Opción A: Ya aplicada (subcarpeta + move)
# Opción B: Renombrar carpeta
mv "ui proto test" ui-proto-test
```

### Error: TypeScript pick up submodule source

Al hacer `npm run build`, TypeScript analiza los `.ts` del submodule.

**Fix:** Añadir `"tools"` al `exclude` de `tsconfig.json`:
```json
"exclude": ["node_modules", "tools"]
```

### Python: `python3` no encontrado en Windows

En Windows, Python se invoca como `python`, no `python3`.

**Fix:** Usar `python` en vez de `python3`:
```bash
python .claude/skills/ui-ux-pro-max/scripts/search.py "query" --design-system
```

---

## Notas sobre el stack

Este setup asume **Next.js + React + TypeScript + Tailwind + shadcn/ui** (el caso más común para este skill).

Para cambiar a otro stack:
1. El skill soporta: React, Vue, Nuxt.js, Svelte, Astro, SwiftUI, Flutter, React Native, HTML+Tailwind, y más.
2. Menciona el stack en tu prompt y el skill adaptará las recomendaciones.
3. Para stack-specific guidelines desde CLI:
   ```bash
   python .claude/skills/ui-ux-pro-max/scripts/search.py "form validation" --stack react
   python .claude/skills/ui-ux-pro-max/scripts/search.py "responsive layout" --stack html-tailwind
   ```
