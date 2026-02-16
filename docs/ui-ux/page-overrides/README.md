# Page Overrides

Carpeta para overrides de Design System por página.

Cada archivo en esta carpeta define desviaciones específicas del [Design System Master](../design-system.md) para una página concreta.

## Estructura

```
docs/ui-ux/page-overrides/
├── ejemplo-dashboard.md    # Override para dashboard
├── ejemplo-settings.md     # Override para settings
└── ...
```

## Cómo crear un override

1. Crea un archivo `<nombre-pagina>.md` en esta carpeta.
2. Solo incluye las propiedades que **difieren** del Master.
3. Al construir la página, el agente debe:
   - Leer primero `docs/ui-ux/design-system.md` (Master)
   - Luego leer `docs/ui-ux/page-overrides/<nombre-pagina>.md`
   - Priorizar las reglas del override sobre el Master
