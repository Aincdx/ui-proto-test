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
  /** Cool cyan — icy, tech-forward feel */
  coolCyan: {
    a1: "#9AE6FF",
    a2: "#60A5FA",
    a3: "#A7F3D0",
    a4: "#BAE6FD",
    a5: "#67E8F9",
  },
  /** Mint / lavender — calm, approachable */
  mintLavender: {
    a1: "#A7F3D0",
    a2: "#C7D2FE",
    a3: "#93C5FD",
    a4: "#D9F99D",
    a5: "#A5B4FC",
  },
  /** Sunset-soft — warm, inviting */
  sunsetSoft: {
    a1: "#FDBA74",
    a2: "#FCA5A5",
    a3: "#FBCFE8",
    a4: "#FDE68A",
    a5: "#F9A8D4",
  },
} as const satisfies Record<string, AuroraPalette>;
