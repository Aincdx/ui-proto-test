"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { InfiniteGrid } from "@/components/ui/infinite-grid";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

/* Lazy-load the 3D canvas — no SSR (WebGL requires browser APIs) */
const HeroModel3D = dynamic(() => import("./HeroModel3D"), {
  ssr: false,
  loading: () => (
    <div
      className="flex h-full w-full items-center justify-center"
      aria-label="Loading 3D model…"
    />
  ),
});

/* ── Palette preview toggle ────────────────────────────────── */
const AURORA_PREVIEW = undefined;

/* ── Layout constants ──────────────────────────────────────── */
const SPLIT = "48%"; // where grid zone starts (from left)

export default function Hero() {
  return (
    <section className="relative overflow-x-clip overflow-y-visible lg:min-h-screen">

      {/* ═══ Layer 0 — Aurora (full width, bottom-most) ═══ */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AuroraBackground
          className="h-full w-full"
          showRadialGradient={true}
          palette={AURORA_PREVIEW}
        />
      </div>

      {/* ═══ Layer 1 — Left background zone (clean gradient + hotspot) ═══ */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        aria-hidden="true"
      >
        {/* Headline hotspot — subtle radial glow anchored near the headline */}
        <div
          className="absolute"
          style={{
            top: "28%",
            left: "12%",
            width: "420px",
            height: "320px",
            background:
              "radial-gradient(ellipse at center, var(--primary-glow) 0%, transparent 70%)",
            opacity: 0.6,
          }}
        />
      </div>

      {/* ═══ Layer 2 — Right background zone (Grid + glow, masked) ═══ */}
      <div
        className="absolute inset-y-0 z-[2] pointer-events-none"
        style={{
          left: SPLIT,
          right: 0,
          /* Feather mask: solid on the right, fades out ~200px toward center */
          maskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 12%, rgba(0,0,0,1) 28%)",
          WebkitMaskImage:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 12%, rgba(0,0,0,1) 28%)",
        }}
        aria-hidden="true"
      >
        {/* Animated grid — blueprint-style, scoped to right zone only */}
        <InfiniteGrid
          className="h-full w-full"
          cellSize={36}
          baseOpacity={0.07}
          revealOpacity={0.35}
          revealRadius={280}
        />

        {/* Subtle glow behind where the 3D model sits */}
        <div
          className="absolute"
          style={{
            top: "20%",
            right: "8%",
            width: "50%",
            height: "60%",
            background:
              "radial-gradient(ellipse at center, var(--primary-glow) 0%, transparent 65%)",
            opacity: 0.45,
          }}
        />
      </div>

      {/* ═══ Layer 3 — Content (top, interactive) ═══ */}
      <div className="relative z-20 flex lg:min-h-screen lg:items-center">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-8 pb-[80px] pt-[140px] md:flex-row md:items-center md:gap-14 lg:px-12 xl:max-w-[1440px] xl:gap-16 xl:px-10 xl:pt-[120px] xl:pb-[60px] 2xl:max-w-[1500px] 2xl:px-12">
        {/* Left — Text Block (scaled 120%) */}
        <div className="relative flex w-full max-w-[648px] flex-1 flex-col justify-center xl:max-w-[768px] 2xl:max-w-[816px]">

          {/* ── Editorial accent line (left edge) ────────────── */}
          <motion.div
            className="absolute left-0 top-0 hidden md:block"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "70%", opacity: 1 }}
            transition={{ duration: 1.0, delay: 0.6, ease: "easeOut" }}
            style={{
              width: "2px",
              top: "8%",
              background: "linear-gradient(to bottom, transparent, var(--primary) 30%, var(--primary) 70%, transparent)",
              opacity: 0.18,
            }}
            aria-hidden="true"
          />

          {/* Eyebrow — technical context label */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-4 flex items-center gap-2.5 md:pl-5 xl:mb-5"
          >
            <span
              className="inline-flex items-center gap-2 rounded-md border px-3.5 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] xl:text-[14px]"
              style={{
                color: "var(--eyebrow-text)",
                borderColor: "var(--eyebrow-border)",
                backgroundColor: "var(--eyebrow-bg)",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              {/* Circuit node icon with animated pulse ring */}
              <span className="relative inline-flex items-center justify-center">
                <svg width="17" height="17" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="2.5" fill="var(--primary)" />
                  <circle cx="7" cy="7" r="5.5" stroke="var(--primary)" strokeWidth="1" opacity="0.4" />
                  <line x1="7" y1="0" x2="7" y2="3" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
                  <line x1="7" y1="11" x2="7" y2="14" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
                  <line x1="0" y1="7" x2="3" y2="7" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
                  <line x1="11" y1="7" x2="14" y2="7" stroke="var(--primary)" strokeWidth="1" opacity="0.5" />
                </svg>
              </span>
              AI-Powered Circuit Design
            </span>
          </motion.div>

          {/* ── Headline ─────────────────────────────────────── */}
          <div className="md:pl-5">
            {/* Line 1 — lighter weight for contrast */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="text-[43px] font-semibold leading-[1.08] tracking-[-0.025em] md:text-[50px] xl:text-[70px] xl:leading-[1.06] 2xl:text-[79px]"
              style={{
                color: "var(--text-dark)",
                fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
              }}
            >
              Design. Simulate.
            </motion.h1>

            {/* Line 2 — "Build." with dramatic emphasis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-1 xl:mt-1.5"
            >
              <span className="relative inline-block">
                <span
                  className="text-[50px] font-extrabold leading-[1.05] tracking-[-0.03em] md:text-[62px] xl:text-[86px] 2xl:text-[98px]"
                  style={{
                    color: "var(--accent-word)",
                    fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                  }}
                >
                  Build.
                </span>
                {/* Animated underline reveal — circuit trace style */}
                <motion.span
                  className="absolute -bottom-1 left-0 h-[4px] rounded-full xl:-bottom-1.5 xl:h-[5px]"
                  style={{ backgroundColor: "var(--accent-underline)", opacity: 0.55 }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  aria-hidden="true"
                />
              </span>
            </motion.div>
          </div>

          {/* ── Subtitle ─────────────────────────────────────── */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: "easeOut" }}
            className="mt-5 max-w-[552px] text-[18px] leading-[1.7] font-normal md:pl-5 md:text-[19px] xl:mt-6 xl:max-w-[600px] xl:text-[22px] 2xl:text-[24px]"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            From schematic to physical assembly
            {" "}&mdash;{" "}
            <span style={{ color: "var(--text-dark)", fontWeight: 500 }}>guided by AI</span>.
            <br className="hidden xl:inline" />
            {" "}SPICE simulation, smart routing, and{" "}
            <span className="whitespace-nowrap">step-by-step builds</span>.
          </motion.p>

          {/* ── Trust line ────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55, ease: "easeOut" }}
            className="mt-3 flex items-center gap-2 md:pl-5 xl:mt-4"
          >
            <span className="flex -space-x-1.5" aria-hidden="true">
              {["var(--primary)", "var(--primary-dark)", "var(--accent-secondary)", "var(--text-muted)"].map((c, i) => (
                <span
                  key={i}
                  className="inline-block h-[26px] w-[26px] rounded-full border-2"
                  style={{ backgroundColor: c, borderColor: "var(--trust-dot-border)" }}
                />
              ))}
            </span>
            <span
              className="text-[14px] font-medium tracking-wide xl:text-[16px]"
              style={{
                color: "var(--text-muted)",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              Used by engineers & students worldwide
            </span>
          </motion.div>

          {/* ── CTA Row ───────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
            className="mt-7 flex flex-wrap items-center gap-4 md:pl-5 xl:mt-10"
          >
            {/* Primary Button */}
            <motion.a
              href="#"
              whileHover={{
                y: -2,
                boxShadow: `0 6px 20px rgba(47, 82, 171, 0.35)`,
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group cursor-pointer inline-flex items-center gap-2.5 rounded-xl px-8 py-4 text-[18px] font-semibold text-white shadow-sm focus:outline-2 focus:outline-offset-2 xl:px-11 xl:py-5 xl:text-[20px] 2xl:px-12 2xl:py-[22px] 2xl:text-[22px]"
              style={{
                backgroundColor: "#2f52ab",
                outlineColor: "#2f52ab",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              Start Building
              {/* Arrow icon */}
              <svg
                width="19"
                height="19"
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
              className="cursor-pointer inline-flex items-center gap-2 rounded-xl border px-7 py-4 text-[18px] font-medium focus:outline-2 focus:outline-offset-2 xl:px-10 xl:py-5 xl:text-[20px] 2xl:px-11 2xl:py-[22px] 2xl:text-[22px]"
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
                width="18"
                height="18"
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

        {/* Right — Interactive 3D Model (overflows container for a free-floating feel) */}
        <motion.div
          className="relative flex flex-1 items-center justify-center md:justify-end overflow-visible"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          style={{ pointerEvents: "none" }}
        >
          <div
            className="relative"
            style={{
              width: "140%",
              aspectRatio: "1 / 1",
              minHeight: "500px",
              marginRight: "-20%",
              marginTop: "-5%",
              pointerEvents: "auto",
            }}
          >
            <HeroModel3D />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
