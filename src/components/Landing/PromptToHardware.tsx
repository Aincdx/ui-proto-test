"use client";

import { motion } from "framer-motion";

/* ─── Transformation stages ──────────────────────────────────── */
const stages = [
  {
    label: "Your Prompt",
    language: "text",
    content: `"Build a voltage divider with 
two 10kΩ resistors and measure
the midpoint with a multimeter."`,
  },
  {
    label: "Generated Netlist",
    language: "json",
    content: `{
  "components": [
    { "id": "R1", "type": "resistor",
      "value": "10kΩ" },
    { "id": "R2", "type": "resistor",
      "value": "10kΩ" }
  ],
  "nets": [
    { "name": "VCC", "pins": ["R1.1"] },
    { "name": "MID", "pins": ["R1.2","R2.1"] },
    { "name": "GND", "pins": ["R2.2"] }
  ]
}`,
  },
  {
    label: "Simulation Result",
    language: "log",
    content: `── SPICE Analysis ──────────────
V(VCC)  = 5.000V
V(MID)  = 2.500V  ✓
V(GND)  = 0.000V
I(R1)   = 0.25mA
I(R2)   = 0.25mA
Power   = 1.25mW

Status: ALL CHECKS PASSED`,
  },
];

/* ─── Code block component ───────────────────────────────────── */
function CodeBlock({
  stage,
  index,
}: {
  stage: (typeof stages)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group flex flex-col overflow-hidden rounded-xl transition-all duration-300"
      style={{ border: "1px solid var(--border-card)" }}
    >
      {/* Tab bar */}
      <div
        className="flex items-center gap-2 px-4 py-2.5"
        style={{
          backgroundColor: "var(--bg-elevated)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        {/* Traffic lights */}
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444", opacity: 0.6 }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F59E0B", opacity: 0.6 }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#22C55E", opacity: 0.6 }} />
        </div>
        <span
          className="ml-2 text-[11px] font-medium uppercase tracking-[0.06em]"
          style={{
            color: "var(--text-muted)",
            fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
          }}
        >
          {stage.label}
        </span>
      </div>

      {/* Code content */}
      <div
        className="flex-1 px-4 py-4"
        style={{ backgroundColor: "var(--bg-surface)" }}
      >
        <pre
          className="whitespace-pre-wrap text-[12px] leading-[1.65] xl:text-[13px]"
          style={{
            color: "var(--text-body)",
            fontFamily: "'IBM Plex Mono', 'Fira Code', monospace",
          }}
        >
          <code>{stage.content}</code>
        </pre>
      </div>
    </motion.div>
  );
}

/* ─── Arrow between blocks (horizontal on lg) ────────────── */
function StageArrow() {
  return (
    <div className="flex items-center justify-center" aria-hidden="true">
      {/* Horizontal */}
      <svg width="32" height="16" viewBox="0 0 32 16" className="hidden lg:block" fill="none">
        <line x1="0" y1="8" x2="22" y2="8" stroke="var(--primary)" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
        <polygon points="22,4 30,8 22,12" fill="var(--primary)" opacity="0.45" />
      </svg>
      {/* Vertical */}
      <svg width="16" height="28" viewBox="0 0 16 28" className="block lg:hidden" fill="none">
        <line x1="8" y1="0" x2="8" y2="18" stroke="var(--primary)" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
        <polygon points="5,18 8,26 11,18" fill="var(--primary)" opacity="0.45" />
      </svg>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function PromptToHardware() {
  return (
    <section
      id="prompt-to-hardware"
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
          className="mb-14 text-center xl:mb-16"
        >
          <span
            className="mb-3 inline-block text-[12px] font-semibold uppercase tracking-[0.1em]"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Transparency</span>
          <h2
            className="text-[28px] font-bold leading-[1.15] md:text-[32px] xl:text-[40px]"
            style={{
              color: "var(--text-dark)",
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            }}
          >
            Every step, fully{" "}
            <span style={{ color: "var(--accent-word)" }}>inspectable</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-[520px] text-[15px] leading-[1.65] xl:text-[17px]"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Unlike black-box generators, Protoboard exposes every intermediate result. Inspect the raw netlist, review simulation data, and trace any decision to its source.
          </p>
        </motion.div>

        {/* Three-stage code-block flow */}
        <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-0">
          {stages.map((stage, i) => (
            <div
              key={stage.label}
              className="flex flex-1 flex-col items-center lg:flex-row lg:items-center"
            >
              <div className="w-full flex-1">
                <CodeBlock stage={stage} index={i} />
              </div>
              {i < stages.length - 1 && <StageArrow />}
            </div>
          ))}
        </div>

        {/* Result badge */}
        <motion.div
          className="mt-12 flex justify-center xl:mt-16"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div
            className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--border-card)",
            }}
          >
            <div
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: "#22C55E" }}
              aria-hidden="true"
            />
            <span
              className="text-[13px] font-semibold"
              style={{
                color: "var(--text-dark)",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              Ready for Sandbox
            </span>
            <span
              className="text-[12px]"
              style={{ color: "var(--text-muted)" }}
            >
              — inspectable, exportable, editable
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
