import type { AuroraPalette } from "@/components/ui/aurora-background";

/**
 * Pre-built palette presets for AuroraBackground.
 *
 * Usage:
 *   import { AURORA_PALETTES } from "@/theme/aurora-palettes";
 *   <AuroraBackground palette={AURORA_PALETTES.coolCyan} />
 *
 * When no palette is passed the component renders its original
 * Aceternity blue / indigo / violet colours.
 */
export const AURORA_PALETTES = {
  /** Engineering blue — desaturated, authoritative, blueprint-adjacent */
  engineeringBlue: {
    a1: "#7BB5D0",
    a2: "#5C8DAD",
    a3: "#8CAFC5",
    a4: "#A5C3D6",
    a5: "#6B9DB8",
  },
  /** Steel slate — cold, controlled, instrument-panel feel */
  steelSlate: {
    a1: "#8A9FB5",
    a2: "#6E8A9E",
    a3: "#9BB2C4",
    a4: "#7C96AB",
    a5: "#A3B8C8",
  },
  /** Lab neutral — minimal, academic, pure technical */
  labNeutral: {
    a1: "#94A8B8",
    a2: "#7A92A5",
    a3: "#A8BCC9",
    a4: "#8DA1B2",
    a5: "#B0C2CF",
  },
} as const satisfies Record<string, AuroraPalette>;
