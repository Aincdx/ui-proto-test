"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { InfiniteGrid } from "@/components/ui/infinite-grid";
import { AURORA_PALETTES } from "@/theme/aurora-palettes";
import { motion } from "framer-motion";
import Image from "next/image";

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

/* ── Above-the-fold layout ───────────────────────────────────
 * NAV_H = 80px (h-20). On lg+ the hero fills the viewport so
 * "How It Works" is pushed entirely below the fold at 1920×1090.
 * Mobile/tablet keeps natural height.
 */

export default function Hero() {
  return (
    <section className="relative overflow-hidden lg:min-h-screen">
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
      <div className="relative z-20 flex lg:min-h-screen lg:items-center">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-8 pb-[80px] pt-[140px] md:flex-row md:items-center md:gap-14 lg:px-12 xl:max-w-[1440px] xl:gap-16 xl:px-10 xl:pt-[120px] xl:pb-[60px] 2xl:max-w-[1500px] 2xl:px-12">
        {/* Left — Text Block */}
        <div className="flex w-full max-w-[540px] flex-1 flex-col justify-center xl:max-w-[640px] 2xl:max-w-[680px]">

          {/* Eyebrow — technical context label */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-5 flex items-center gap-2.5 xl:mb-6"
          >
            <span
              className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] xl:text-[12px]"
              style={{
                color: "var(--eyebrow-text)",
                borderColor: "var(--eyebrow-border)",
                backgroundColor: "var(--eyebrow-bg)",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              {/* Small circuit node icon */}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <circle cx="7" cy="7" r="2.5" fill="var(--primary)" />
                <circle cx="7" cy="7" r="5.5" stroke="var(--primary)" strokeWidth="1" opacity="0.4" />
                <line x1="7" y1="0" x2="7" y2="3" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
                <line x1="7" y1="11" x2="7" y2="14" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
                <line x1="0" y1="7" x2="3" y2="7" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
                <line x1="11" y1="7" x2="14" y2="7" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
              </svg>
              AI-Powered Circuit Design
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: "easeOut" }}
            className="text-[34px] font-bold leading-[1.12] tracking-[-0.02em] md:text-[40px] xl:text-[56px] xl:leading-[1.08] 2xl:text-[64px]"
            style={{ color: "var(--text-dark)", fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)" }}
          >
            Design. Simulate.{" "}
            <br className="hidden md:inline" />
            <span className="relative inline-block">
              <span style={{ color: "var(--accent-word)" }}>Build.</span>
              {/* Underline accent — circuit trace style */}
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full xl:-bottom-1.5 xl:h-[4px]"
                style={{ backgroundColor: "var(--accent-underline)", opacity: 0.5 }}
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            className="mt-5 max-w-[460px] text-[15px] leading-[1.65] font-normal md:text-[16px] xl:mt-6 xl:max-w-[500px] xl:text-[18px] 2xl:text-[20px]"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            From schematic to physical assembly — guided by AI.
            <br className="hidden xl:inline" />
            {" "}SPICE simulation, smart routing, and step-by-step builds.
          </motion.p>

          {/* Trust line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            className="mt-4 flex items-center gap-2 xl:mt-5"
          >
            {/* Small dots representing activity */}
            <span className="flex -space-x-1.5" aria-hidden="true">
              {["var(--primary)", "var(--primary-dark)", "#1A6FA0", "var(--text-body)"].map((c, i) => (
                <span
                  key={i}
                  className="inline-block h-[22px] w-[22px] rounded-full border-2"
                  style={{ backgroundColor: c, borderColor: "var(--trust-dot-border)" }}
                />
              ))}
            </span>
            <span
              className="text-[12px] font-medium tracking-wide xl:text-[13px]"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              Used by engineers & students worldwide
            </span>
          </motion.div>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-wrap items-center gap-3 xl:mt-10"
          >
            {/* Primary Button */}
            <motion.a
              href="#"
              whileHover={{
                y: -2,
                boxShadow: `0 6px 20px var(--btn-primary-hover-shadow)`,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group cursor-pointer inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white shadow-sm focus:outline-2 focus:outline-offset-2 xl:px-9 xl:py-4 xl:text-[17px] 2xl:px-10 2xl:py-[18px] 2xl:text-[18px]"
              style={{
                backgroundColor: "var(--btn-primary-bg)",
                outlineColor: "var(--btn-primary-bg)",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              Start Building
              {/* Arrow icon */}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>

            {/* Secondary / Ghost Button */}
            <motion.a
              href="#"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="cursor-pointer inline-flex items-center gap-1.5 rounded-xl border px-6 py-3.5 text-[15px] font-medium focus:outline-2 focus:outline-offset-2 xl:px-8 xl:py-4 xl:text-[17px] 2xl:px-9 2xl:py-[18px] 2xl:text-[18px]"
              style={{
                color: "var(--btn-ghost-text)",
                borderColor: "var(--btn-ghost-border)",
                backgroundColor: "var(--btn-ghost-bg)",
                outlineColor: "var(--primary)",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              {/* Play icon */}
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 3l7 4.5-7 4.5V3z" fill="var(--btn-ghost-text)" />
              </svg>
              See How It Works
            </motion.a>
          </motion.div>
        </div>

        {/* Right — Hero Product Image */}
        <motion.div
          className="relative flex flex-1 items-center justify-center overflow-visible md:justify-end"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div
            className="relative w-full max-w-[520px] xl:max-w-[640px] 2xl:max-w-[720px]"
            style={{ transform: "scale(1.75)", transformOrigin: "60% center" }}
          >
            {/* Glow effect behind the board */}
            <div
              className="absolute -inset-8 rounded-full opacity-30 blur-3xl"
              style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 10%)" }}
              aria-hidden="true"
            />
            <Image
              src="/hero-board.png"
              alt="Jumperless V5 programmable breadboard with RGB LEDs illuminating circuit connections"
              width={720}
              height={640}
              priority
              className="relative z-10 w-full h-auto drop-shadow-2xl"
              style={{ filter: "drop-shadow(0 12px 40px rgba(59,163,217,0.25))" }}
            />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
