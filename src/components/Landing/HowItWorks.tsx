"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

/* ─── Step data ──────────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Describe",
    subtitle: "Natural Language Input",
    description:
      "Write what you need in plain English. The NLP parser extracts components, connections, power requirements, and constraints from your description.",
    detail: '"Connect an LED to pin 13 with a 220Ω resistor…"',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="6" width="24" height="20" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <line x1="8" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="16" x2="24" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="18" y="19" width="2" height="3" rx="0.5" fill="currentColor" opacity="0.6">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="1.2s" repeatCount="indefinite" />
        </rect>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Generate",
    subtitle: "Multi-Agent Synthesis",
    description:
      "Specialised AI agents produce a structured JSON netlist — components, nets, values, pin mappings — then validate electrical correctness via SPICE analysis.",
    detail: '{ "R1": { "value": "220Ω", "net": ["D13","LED1"] } }',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 10h4M10 14h8M10 18h6M10 22h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="5" fill="currentColor" opacity="0.15" />
        <path d="M22 24h4M24 22v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Render",
    subtitle: "Schematic & Placement",
    description:
      "The validated netlist is rendered as a visual schematic. A placement engine then maps every component and wire to physical protoboard coordinates.",
    detail: "R1 → Row 12, Col D-E  |  R2 → Row 12, Col F-G",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="3" y="8" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <polyline points="7,20 11,14 15,18 19,10 23,16 27,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="11" cy="14" r="1.5" fill="currentColor" opacity="0.5" />
        <circle cx="19" cy="10" r="1.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Sandbox",
    subtitle: "Interactive Environment",
    description:
      "Your circuit opens in a live workspace. Edit connections, swap components, run simulations, and iterate until every constraint passes.",
    detail: "Edit → Validate → Simulate → Iterate",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        {/* Grid dots */}
        {[0, 1, 2, 3, 4].map((r) =>
          [0, 1, 2, 3, 4, 5, 6].map((c) => (
            <circle key={`${r}-${c}`} cx={8 + c * 3} cy={12 + r * 3} r="0.8" fill="currentColor" opacity="0.25" />
          ))
        )}
        {/* Highlight placement */}
        <circle cx={14} cy={15} r="1.2" fill="currentColor" />
        <circle cx={17} cy={15} r="1.2" fill="currentColor" />
        <line x1="14" y1="15" x2="17" y2="15" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

/* ─── Connector Line (SVG between steps) ─────────────────── */
function ConnectorLine() {
  return (
    <div className="hidden lg:flex items-center justify-center w-12 xl:w-16 shrink-0" aria-hidden="true">
      <svg width="48" height="24" viewBox="0 0 48 24" fill="none" className="w-full">
        <line
          x1="0" y1="12" x2="36" y2="12"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
          opacity="0.4"
        />
        <polygon points="36,8 44,12 36,16" fill="var(--primary)" opacity="0.5" />
      </svg>
    </div>
  );
}

/* ─── Step Card ──────────────────────────────────────────────── */
function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      className="group relative flex flex-1 flex-col rounded-2xl p-6 xl:p-8 cursor-default transition-all duration-300"
      style={{
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-card)",
      }}
    >
      {/* Hover glow — subtle ambient */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{ boxShadow: "inset 0 0 40px var(--primary-glow)" }}
        aria-hidden="true"
      />

      {/* Step number + icon row */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className="text-[11px] font-bold tracking-[0.12em] uppercase"
          style={{
            color: "var(--primary)",
            fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
          }}
        >
          Step {step.number}
        </span>
        <div style={{ color: "var(--primary)" }}>{step.icon}</div>
      </div>

      {/* Title */}
      <h3
        className="text-[20px] font-bold leading-[1.2] xl:text-[22px]"
        style={{
          color: "var(--text-dark)",
          fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
        }}
      >
        {step.title}
      </h3>

      {/* Subtitle */}
      <span
        className="mt-1 text-[12px] font-medium uppercase tracking-[0.06em]"
        style={{ color: "var(--primary)", opacity: 0.7 }}
      >
        {step.subtitle}
      </span>

      {/* Description */}
      <p
        className="mt-3 text-[14px] leading-[1.6] xl:text-[15px]"
        style={{
          color: "var(--text-body)",
          fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
        }}
      >
        {step.description}
      </p>

      {/* Detail — code-like snippet */}
      <div className="mt-auto pt-4">
        <div
          className="rounded-lg px-3 py-2.5 text-[11px] font-mono leading-[1.5] xl:text-[12px]"
          style={{
            backgroundColor: "var(--bg-elevated)",
            color: "var(--text-muted)",
            border: "1px solid var(--border-light)",
          }}
        >
          {step.detail}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function HowItWorks() {
  const ref = useRef(null);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative w-full scroll-mt-20 overflow-hidden"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      {/* Faint grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-8 py-20 lg:px-12 xl:max-w-[1440px] xl:py-28">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-[560px] xl:mb-16"
        >
          <span
            className="mb-3 inline-block text-[12px] font-semibold uppercase tracking-[0.1em]"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            System Flow</span>
          <h2
            className="text-[28px] font-bold leading-[1.15] md:text-[32px] xl:text-[40px]"
            style={{
              color: "var(--text-dark)",
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            }}
          >
            From language to{" "}
            <span style={{ color: "var(--accent-word)" }}>live circuit</span>
          </h2>
          <p
            className="mt-4 text-[15px] leading-[1.65] xl:text-[17px]"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Four stages. Each validated before advancing. The result is an interactive environment — not a static output.
          </p>
        </motion.div>

        {/* Steps row — horizontal on lg, stacked on mobile */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex lg:flex-1 lg:items-stretch">
              <StepCard step={step} index={i} />
              {i < steps.length - 1 && <ConnectorLine />}
            </div>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          className="mx-auto mt-16 h-[2px] rounded-full xl:mt-20"
          style={{ backgroundColor: "var(--primary)", opacity: 0.12 }}
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
