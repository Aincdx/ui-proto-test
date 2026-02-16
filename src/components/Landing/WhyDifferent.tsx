"use client";

import { motion } from "framer-motion";

/* ─── Differentiators ────────────────────────────────────────── */
const differentiators = [
  {
    title: "AI-native architecture",
    description:
      "Every module — parsing, synthesis, validation, placement — was built for AI-first operation. Not retrofitted onto legacy EDA tooling.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Full pipeline transparency",
    description:
      "Inspect every intermediate result: raw netlist JSON, simulation parameters, placement coordinates. Nothing is hidden inside a black box.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Physical-first output",
    description:
      "The final output isn't a PDF schematic. It's spatial coordinates mapped to real protoboard rows and columns, with step-by-step assembly instructions.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
        {[0, 1, 2].map((r) =>
          [0, 1, 2].map((c) => (
            <circle key={`${r}-${c}`} cx={8 + c * 4} cy={8 + r * 4} r="1" fill="currentColor" opacity="0.35" />
          ))
        )}
        <circle cx={12} cy={12} r="1.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Interactive, not static",
    description:
      "The Sandbox isn't a viewer. It's a live editing environment where you modify, validate, and simulate without leaving the workspace.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="18" cy="6" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.4" />
        <line x1="9" y1="11" x2="15" y2="7" stroke="currentColor" strokeWidth="1.4" />
        <line x1="9" y1="13" x2="15" y2="17" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Feedback-driven correction",
    description:
      "When validation fails, the system traces the error to its source agent and re-generates with corrected constraints. No manual debugging required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 12a8 8 0 0114-5.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M20 12a8 8 0 01-14 5.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <polygon points="18,4 20,7 17,7" fill="currentColor" />
        <polygon points="6,20 4,17 7,17" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Open component library",
    description:
      "Resistors, LEDs, ICs, sensors — a growing component database driven by community contributions, never locked behind a paywall.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.4" />
        <line x1="9" y1="7" x2="15" y2="7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="9" y1="11" x2="15" y2="11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ─── Card component ─────────────────────────────────────────── */
function DiffCard({
  item,
  index,
}: {
  item: (typeof differentiators)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group relative flex flex-col rounded-xl p-6 transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-card)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{ boxShadow: "inset 0 0 32px var(--primary-glow)" }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg"
        style={{ color: "var(--primary)", backgroundColor: "var(--bg-elevated)" }}
      >
        {item.icon}
      </div>

      {/* Title */}
      <h3
        className="text-[16px] font-bold leading-[1.3] xl:text-[18px]"
        style={{
          color: "var(--text-dark)",
          fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
        }}
      >
        {item.title}
      </h3>

      {/* Description */}
      <p
        className="mt-2 text-[13px] leading-[1.6] xl:text-[14px]"
        style={{
          color: "var(--text-body)",
          fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
        }}
      >
        {item.description}
      </p>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function WhyDifferent() {
  return (
    <section
      id="why-different"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      <div className="relative mx-auto max-w-[1200px] px-8 py-20 lg:px-12 xl:max-w-[1440px] xl:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 xl:mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-[540px]">
              <span
                className="mb-3 inline-block text-[12px] font-semibold uppercase tracking-[0.1em]"
                style={{
                  color: "var(--primary)",
                  fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
                }}
              >
                Differentiation
              </span>
              <h2
                className="text-[28px] font-bold leading-[1.15] md:text-[32px] xl:text-[40px]"
                style={{
                  color: "var(--text-dark)",
                  fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                }}
              >
                Why{" "}
                <span style={{ color: "var(--accent-word)" }}>Protoboard</span>
              </h2>
            </div>
            <p
              className="mt-4 max-w-[400px] text-[15px] leading-[1.65] lg:mt-0 lg:text-right xl:text-[17px]"
              style={{
                color: "var(--text-body)",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              Not another EDA clone. An integrated platform where AI synthesis,
              interactive editing, and validation work as a single coherent system.
            </p>
          </div>
        </motion.div>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
          {differentiators.map((item, i) => (
            <DiffCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
