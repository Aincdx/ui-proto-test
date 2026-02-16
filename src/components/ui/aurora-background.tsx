"use client";
import { cn } from "@/lib/utils";
import React, { type ReactNode, type CSSProperties } from "react";

/** Partial palette override — every key is optional and falls back to the Aceternity default. */
export interface AuroraPalette {
  a1?: string;
  a2?: string;
  a3?: string;
  a4?: string;
  a5?: string;
}

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
  /** Optional colour palette. When undefined the original Aceternity blue/indigo/violet colours render. */
  palette?: AuroraPalette;
}

/* Aceternity-original colours — kept as fallbacks so the default look is identical. */
const DEFAULTS: Required<AuroraPalette> = {
  a1: "#3b82f6",
  a2: "#a5b4fc",
  a3: "#93c5fd",
  a4: "#ddd6fe",
  a5: "#60a5fa",
};

function buildAuroraGradient(palette?: AuroraPalette): string {
  const c = { ...DEFAULTS, ...palette };
  return `repeating-linear-gradient(100deg,${c.a1} 10%,${c.a2} 15%,${c.a3} 20%,${c.a4} 25%,${c.a5} 30%)`;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  palette,
  ...props
}: AuroraBackgroundProps) => {
  const auroraGradient = buildAuroraGradient(palette);

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center text-slate-950 transition-bg",
        className
      )}
      style={{ backgroundColor: "var(--aurora-bg, #fafafa)" }}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            `
            [--white-gradient:var(--aurora-white-gradient,repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%))]
            [background-image:var(--white-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            blur-[10px]
            after:content-[""] after:absolute after:inset-0
            after:[background-image:var(--white-gradient),var(--aurora)]
            after:[background-size:200%,_100%]
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute -inset-[10px] will-change-transform`,

            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
          style={
            {
              "--aurora": auroraGradient,
              transform: "scaleX(-1)",
              opacity: "var(--aurora-mask-opacity, 0.5)",
              filter: "var(--aurora-invert, invert(1)) blur(10px)",
            } as CSSProperties
          }
        ></div>
      </div>
      {children}
    </div>
  );
};
