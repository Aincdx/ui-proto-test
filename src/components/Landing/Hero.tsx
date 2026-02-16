"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { InfiniteGrid } from "@/components/ui/infinite-grid";
import { AURORA_PALETTES } from "@/theme/aurora-palettes";

/* ── Palette preview toggle ──────────────────────────────────
 * Default: undefined → renders the original Aceternity colours.
 * To preview a palette, uncomment ONE of the lines below:
 */
const AURORA_PREVIEW = undefined;
//const AURORA_PREVIEW = AURORA_PALETTES.coolCyan;
 //const AURORA_PREVIEW = AURORA_PALETTES.mintLavender;
 //const AURORA_PREVIEW = AURORA_PALETTES.sunsetSoft;

/* ── InfiniteGrid toggle ─────────────────────────────────────
 * Set to false to disable the grid overlay without removing code.
 */
const SHOW_INFINITE_GRID = true;

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Layer 0 — Aurora Background (bottom) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AuroraBackground
          className="h-full w-full"
          showRadialGradient={true}
          palette={AURORA_PREVIEW}
        />
      </div>

      {/* Layer 1 — InfiniteGrid overlay (above Aurora, behind content) */}
      {SHOW_INFINITE_GRID && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <InfiniteGrid className="h-full w-full" />
        </div>
      )}

      {/* Layer 2 — Content (top, interactive) */}
      <div className="relative z-20">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-12 pb-[100px] pt-[80px] md:flex-row md:items-start">
        {/* Left — Text Block */}
        <div className="flex max-w-[480px] flex-1 flex-col justify-center pt-[20px]">
          <h1
            className="text-[44px] font-extrabold leading-[1.15] tracking-tight"
            style={{ color: "#1A1A2E" }}
          >
            Build Intelligent
            <br />
            Circuits with AI
          </h1>
          <p
            className="mt-5 max-w-[380px] text-[16px] leading-[1.6] font-normal"
            style={{ color: "#6B7280" }}
          >
            AI-driven circuit Generation, diagram SPICE,
            <br />
            and guided Physical assembly.
          </p>
          <div className="mt-8 flex items-center gap-4">
            {/* Primary Button */}
            <a
              href="#"
              className="cursor-pointer rounded-full px-7 py-3 text-[15px] font-semibold text-white hover:opacity-90 focus:outline-2 focus:outline-offset-2"
              style={{ backgroundColor: "#3BA3D9", outlineColor: "#3BA3D9" }}
            >
              Start Building
            </a>
            {/* Secondary Button */}
            <a
              href="#"
              className="cursor-pointer rounded-full border-2 bg-transparent px-7 py-3 text-[15px] font-semibold hover:bg-[#E8F4FD] focus:outline-2 focus:outline-offset-2"
              style={{
                borderColor: "#3BA3D9",
                color: "#3BA3D9",
                outlineColor: "#3BA3D9",
              }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right — Hero Visual Placeholder */}
        <div className="relative flex flex-1 items-start justify-center md:justify-end">
          <div
            className="relative flex h-[380px] w-full max-w-[560px] items-center justify-center overflow-hidden rounded-[20px]"
            style={{
              backgroundColor: "#EDF5FB",
              boxShadow: "0 8px 32px rgba(59, 163, 217, 0.12)",
            }}
          >
            {/* Placeholder content to suggest the 3D protoboard illustration */}
            <div className="flex flex-col items-center gap-4 text-center">
              {/* Board shape */}
              <svg
                width="200"
                height="140"
                viewBox="0 0 200 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                {/* Breadboard base */}
                <rect
                  x="10"
                  y="30"
                  width="180"
                  height="100"
                  rx="8"
                  fill="#D6EEFB"
                  stroke="#3BA3D9"
                  strokeWidth="1.5"
                />
                {/* Grid dots */}
                {Array.from({ length: 5 }).map((_, row) =>
                  Array.from({ length: 10 }).map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={30 + col * 16}
                      cy={50 + row * 16}
                      r="2"
                      fill="#3BA3D9"
                      opacity="0.4"
                    />
                  ))
                )}
                {/* Chip */}
                <rect
                  x="60"
                  y="55"
                  width="50"
                  height="30"
                  rx="3"
                  fill="#1A1A2E"
                />
                {/* Chip pins */}
                {Array.from({ length: 4 }).map((_, i) => (
                  <rect
                    key={`pin-top-${i}`}
                    x={68 + i * 10}
                    y="48"
                    width="3"
                    height="8"
                    fill="#4A5568"
                  />
                ))}
                {Array.from({ length: 4 }).map((_, i) => (
                  <rect
                    key={`pin-bot-${i}`}
                    x={68 + i * 10}
                    y="84"
                    width="3"
                    height="8"
                    fill="#4A5568"
                  />
                ))}
                {/* Wires */}
                <line
                  x1="110"
                  y1="70"
                  x2="160"
                  y2="60"
                  stroke="#E53E3E"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <line
                  x1="110"
                  y1="75"
                  x2="160"
                  y2="90"
                  stroke="#3BA3D9"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                {/* LED */}
                <circle cx="165" cy="55" r="6" fill="#48BB78" opacity="0.8" />
                <circle cx="165" cy="55" r="3" fill="#68D391" />
              </svg>

              {/* Floating labels */}
              <div className="flex gap-3">
                <span
                  className="rounded-md bg-white px-3 py-1 text-[11px] font-medium shadow-sm"
                  style={{ color: "#4A5568" }}
                >
                  SPICE Simulation
                </span>
                <span
                  className="rounded-md bg-white px-3 py-1 text-[11px] font-medium shadow-sm"
                  style={{ color: "#4A5568" }}
                >
                  AI-Driven Design
                </span>
              </div>
              <span
                className="rounded-md bg-white px-3 py-1 text-[11px] font-medium shadow-sm"
                style={{ color: "#4A5568" }}
              >
                Guided Assembly Preview
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
