"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useTransform,
  useMotionTemplate,
  useAnimationFrame,
} from "framer-motion";

/* ─── Types ────────────────────────────────────────────────── */
export interface InfiniteGridProps {
  className?: string;
  /** Grid cell size in px (default: 40) */
  cellSize?: number;
  /** Auto-scroll speed X (default: 0.5) */
  speedX?: number;
  /** Auto-scroll speed Y (default: 0.5) */
  speedY?: number;
  /** Opacity of the always-visible background grid layer (default: 0.05) */
  baseOpacity?: number;
  /** Opacity of the mouse-reveal grid layer (default: 0.40) */
  revealOpacity?: number;
  /** Radius in px of the mouse-reveal spotlight (default: 300) */
  revealRadius?: number;
  /** Grid line stroke color — Tailwind text-color class (default: "text-muted-foreground") */
  strokeClass?: string;
}

/* ─── Component ────────────────────────────────────────────── */
export function InfiniteGrid({
  className,
  cellSize = 40,
  speedX = 0.5,
  speedY = 0.5,
  baseOpacity = 0.05,
  revealOpacity = 0.4,
  revealRadius = 300,
  strokeClass = "text-muted-foreground",
}: InfiniteGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  /* Mouse position inside the container */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  /* Auto-scrolling offset */
  const gridOffsetX = useMotionValue(0);
  const gridOffsetY = useMotionValue(0);

  useAnimationFrame(() => {
    gridOffsetX.set((gridOffsetX.get() + speedX) % cellSize);
    gridOffsetY.set((gridOffsetY.get() + speedY) % cellSize);
  });

  /* Radial reveal mask */
  const maskImage = useMotionTemplate`radial-gradient(${revealRadius}px circle at ${mouseX}px ${mouseY}px, black, transparent)`;

  /* Unique pattern id to avoid SVG collisions when multiple instances exist */
  const patternId = React.useId().replace(/:/g, "_") + "_grid";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={cn("relative h-full w-full", className)}
    >
      {/* Layer 1 — subtle always-visible grid */}
      <div
        className="absolute inset-0"
        style={{ opacity: baseOpacity }}
      >
        <GridPattern
          id={`${patternId}_base`}
          cellSize={cellSize}
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          strokeClass={strokeClass}
        />
      </div>

      {/* Layer 2 — mouse-reveal grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          opacity: revealOpacity,
          maskImage,
          WebkitMaskImage: maskImage,
        }}
      >
        <GridPattern
          id={`${patternId}_reveal`}
          cellSize={cellSize}
          offsetX={gridOffsetX}
          offsetY={gridOffsetY}
          strokeClass={strokeClass}
        />
      </motion.div>
    </div>
  );
}

/* ─── SVG Grid Pattern ─────────────────────────────────────── */
function GridPattern({
  id,
  cellSize,
  offsetX,
  offsetY,
  strokeClass,
}: {
  id: string;
  cellSize: number;
  offsetX: ReturnType<typeof useMotionValue<number>>;
  offsetY: ReturnType<typeof useMotionValue<number>>;
  strokeClass: string;
}) {
  return (
    <svg className="h-full w-full">
      <defs>
        <motion.pattern
          id={id}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className={strokeClass}
          />
        </motion.pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export default InfiniteGrid;
