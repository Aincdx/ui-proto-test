"use client";

import { motion } from "framer-motion";

/* ─── Feature data (right side) ──────────────────────────────── */
const features = [
  {
    title: "Live Editing",
    description:
      "Drag components onto the board, rewire connections, adjust values. Changes propagate instantly to the underlying netlist.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M14.5 2.5l3 3L7 16H4v-3L14.5 2.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <line x1="12" y1="5" x2="15" y2="8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Smart Constraints",
    description:
      "Invalid connections are blocked at the interaction level. Pin compatibility, voltage limits, and net conflicts are enforced before placement.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Structural Validation",
    description:
      "Every edit triggers a consistency check against the JSON netlist. Orphaned nodes and broken nets are flagged immediately.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6 10l3 3 5-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Real-Time Simulation",
    description:
      "Run SPICE analysis without leaving the workspace. Voltage, current, and power results update as you modify the circuit.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="1" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <polyline points="4,12 7,8 10,11 13,5 16,9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
];

/* ─── Sandbox UI Mock ────────────────────────────────────────── */
function SandboxMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-xl"
      style={{ border: "1px solid var(--border-card)" }}
    >
      {/* ── Title bar ────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{
          backgroundColor: "var(--bg-elevated)",
          borderBottom: "1px solid var(--border-light)",
        }}
      >
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#EF4444", opacity: 0.6 }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#F59E0B", opacity: 0.6 }} />
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "#22C55E", opacity: 0.6 }} />
          </div>
          <span
            className="ml-2 text-[11px] font-medium"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            voltage_divider.pb — Circuit Sandbox
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="rounded px-2 py-0.5 text-[10px] font-semibold"
            style={{ backgroundColor: "var(--primary)", color: "white" }}
          >
            Sandbox
          </span>
          <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
            Schematic
          </span>
          <span className="text-[10px] font-medium" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
            JSON
          </span>
        </div>
      </div>

      {/* ── Three-panel layout ───────────────────────────────── */}
      <div className="flex" style={{ backgroundColor: "var(--bg-surface)" }}>
        {/* Sidebar — Component Library */}
        <div
          className="hidden w-[110px] shrink-0 border-r p-3 sm:block"
          style={{ borderColor: "var(--border-light)" }}
        >
          <span
            className="mb-2.5 block text-[9px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--text-muted)" }}
          >
            Components
          </span>
          {["Resistor", "LED", "Capacitor", "IC Chip", "Wire", "Ground"].map((name, i) => (
            <div
              key={name}
              className="mb-1 flex items-center gap-1.5 rounded px-2 py-1 text-[10px]"
              style={{
                color: i === 0 ? "var(--primary)" : "var(--text-body)",
                backgroundColor: i === 0 ? "var(--bg-elevated)" : "transparent",
                fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: i === 0 ? "var(--primary)" : "var(--text-muted)",
                  opacity: i === 0 ? 1 : 0.35,
                }}
              />
              {name}
            </div>
          ))}
        </div>

        {/* Canvas — Circuit schematic */}
        <div className="relative flex-1" style={{ minHeight: "260px" }}>
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 320 260"
            preserveAspectRatio="xMidYMid meet"
            aria-label="Interactive circuit sandbox showing a voltage divider circuit with two resistors"
            role="img"
          >
            {/* Grid dots */}
            {Array.from({ length: 10 }).map((_, r) =>
              Array.from({ length: 14 }).map((_, c) => (
                <circle
                  key={`g-${r}-${c}`}
                  cx={20 + c * 22}
                  cy={20 + r * 24}
                  r="1.3"
                  fill="var(--text-muted)"
                  opacity="0.12"
                />
              ))
            )}

            {/* ── R1 (horizontal) ──────────────────────────── */}
            <line x1="64" y1="80" x2="86" y2="80" stroke="var(--primary)" strokeWidth="1.5" opacity="0.6" />
            <rect x="86" y="72" width="48" height="16" rx="3" stroke="var(--primary)" strokeWidth="1.3" fill="var(--bg-surface)" />
            <text x="110" y="83" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600" fontFamily="'IBM Plex Mono', monospace">10kΩ</text>
            <line x1="134" y1="80" x2="160" y2="80" stroke="var(--primary)" strokeWidth="1.5" opacity="0.6" />

            {/* ── Vertical connection (MID node) ──────────── */}
            <line x1="160" y1="80" x2="160" y2="140" stroke="var(--primary)" strokeWidth="1.5" opacity="0.5" />

            {/* ── R2 (horizontal) ──────────────────────────── */}
            <line x1="64" y1="140" x2="86" y2="140" stroke="var(--primary)" strokeWidth="1.5" opacity="0.6" />
            <rect x="86" y="132" width="48" height="16" rx="3" stroke="var(--primary)" strokeWidth="1.3" fill="var(--bg-surface)" />
            <text x="110" y="143" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600" fontFamily="'IBM Plex Mono', monospace">10kΩ</text>
            <line x1="134" y1="140" x2="160" y2="140" stroke="var(--primary)" strokeWidth="1.5" opacity="0.6" />

            {/* ── VCC label ────────────────────────────────── */}
            <circle cx="64" cy="80" r="4" fill="var(--primary)" opacity="0.7" />
            <text x="64" y="67" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600" fontFamily="'IBM Plex Mono', monospace">VCC</text>

            {/* ── MID node (selected — animated pulse) ────── */}
            <circle cx="160" cy="110" r="4" fill="var(--primary)" opacity="0.4">
              <animate attributeName="r" values="4;7;4" dur="2.5s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="160" cy="110" r="3" fill="var(--primary)" opacity="0.8" />
            <text x="174" y="113" fill="var(--primary)" fontSize="9" fontWeight="700" fontFamily="'IBM Plex Mono', monospace">MID</text>
            <text x="174" y="125" fill="var(--text-muted)" fontSize="8" fontFamily="'IBM Plex Mono', monospace">2.500V</text>

            {/* ── Selection indicator around MID ────────── */}
            <rect x="148" y="98" width="56" height="36" rx="4" stroke="var(--primary)" strokeWidth="1" strokeDasharray="4 3" fill="none" opacity="0.35" />

            {/* ── GND label ────────────────────────────────── */}
            <circle cx="64" cy="140" r="4" fill="var(--primary)" opacity="0.7" />
            <text x="64" y="160" textAnchor="middle" fill="var(--primary)" fontSize="9" fontWeight="600" fontFamily="'IBM Plex Mono', monospace">GND</text>

            {/* ── Cursor (interaction hint) ──────────────── */}
            <g opacity="0.55">
              <path d="M196 90l8 4-3.5 1.2 2 4-2.8 1.2-2-4-2.2 2.8z" fill="var(--text-dark)" />
            </g>
          </svg>
        </div>

        {/* Properties Panel */}
        <div
          className="hidden w-[130px] shrink-0 border-l p-3 md:block"
          style={{ borderColor: "var(--border-light)" }}
        >
          <span
            className="mb-3 block text-[9px] font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--text-muted)" }}
          >
            Properties
          </span>

          <div className="mb-3">
            <span
              className="text-[11px] font-semibold"
              style={{
                color: "var(--text-dark)",
                fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
              }}
            >
              Node: MID
            </span>
          </div>

          <div className="space-y-2.5">
            {([
              ["Type", "Junction"],
              ["Voltage", "2.500V"],
              ["Connected", "R1.2, R2.1"],
              ["Status", "Valid"],
            ] as const).map(([label, value]) => (
              <div key={label} className="flex flex-col gap-0.5">
                <span
                  className="text-[8px] font-bold uppercase tracking-[0.08em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </span>
                <span
                  className="text-[10px] font-medium"
                  style={{
                    color: label === "Status" ? "#22C55E" : "var(--text-body)",
                    fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
                  }}
                >
                  {label === "Status" ? "✓ " : ""}{value}
                </span>
              </div>
            ))}
          </div>

          {/* Validation badge */}
          <div
            className="mt-4 rounded-md px-2 py-1.5"
            style={{
              backgroundColor: "var(--bg-elevated)",
              border: "1px solid var(--border-light)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#22C55E" }} aria-hidden="true" />
              <span
                className="text-[9px] font-semibold"
                style={{ color: "var(--text-dark)" }}
              >
                Netlist Valid
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom status bar ────────────────────────────────── */}
      <div
        className="flex items-center justify-between px-4 py-2"
        style={{
          backgroundColor: "var(--bg-elevated)",
          borderTop: "1px solid var(--border-light)",
        }}
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-[10px] font-medium" style={{ color: "#22C55E" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: "#22C55E" }} aria-hidden="true" />
            Valid
          </span>
          <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>Components: 3</span>
          <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>Nets: 3</span>
          <span className="text-[10px]" style={{ color: "var(--text-muted)" }}>Errors: 0</span>
        </div>
        <span
          className="rounded px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wide"
          style={{ backgroundColor: "var(--primary)", color: "white" }}
        >
          ▶ Simulate
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Feature item ───────────────────────────────────────────── */
function FeatureItem({
  feature,
  index,
}: {
  feature: (typeof features)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
      className="group flex gap-4"
    >
      <div
        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors duration-200"
        style={{
          color: "var(--primary)",
          backgroundColor: "var(--bg-elevated)",
        }}
      >
        {feature.icon}
      </div>
      <div>
        <h3
          className="text-[15px] font-bold leading-[1.3] xl:text-[16px]"
          style={{
            color: "var(--text-dark)",
            fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
          }}
        >
          {feature.title}
        </h3>
        <p
          className="mt-1 text-[13px] leading-[1.6] xl:text-[14px]"
          style={{
            color: "var(--text-body)",
            fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
          }}
        >
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function CircuitSandbox() {
  return (
    <section
      id="sandbox"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      {/* Faint dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--primary) 0.8px, transparent 0.8px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1200px] px-8 py-20 lg:px-12 xl:max-w-[1440px] xl:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 max-w-[600px] xl:mb-16"
        >
          <span
            className="mb-3 inline-block text-[12px] font-semibold uppercase tracking-[0.1em]"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Sandbox
          </span>
          <h2
            className="text-[28px] font-bold leading-[1.15] md:text-[32px] xl:text-[40px]"
            style={{
              color: "var(--text-dark)",
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            }}
          >
            Interactive Circuit{" "}
            <span style={{ color: "var(--accent-word)" }}>Sandbox</span>
          </h2>
          <p
            className="mt-4 text-[15px] leading-[1.65] xl:text-[17px]"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Not a static viewer. A live workspace where you manipulate components,
            validate structure, and simulate behaviour — all backed by the same
            JSON pipeline that generated the circuit.
          </p>
        </motion.div>

        {/* Split layout: Mock (left) | Features (right) */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          {/* Left — Sandbox mock */}
          <div className="lg:flex-[1.4]">
            <SandboxMock />
          </div>

          {/* Right — Feature list */}
          <div className="flex flex-col justify-center gap-7 lg:flex-1 lg:py-4 xl:gap-8">
            {features.map((f, i) => (
              <FeatureItem key={f.title} feature={f} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom connector — circuit trace decoration */}
        <motion.div
          className="mx-auto mt-16 flex items-center justify-center gap-2 xl:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          aria-hidden="true"
        >
          <div className="h-[1px] w-8" style={{ backgroundColor: "var(--primary)", opacity: 0.15 }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--primary)", opacity: 0.25 }} />
          <div className="h-[1px] w-24" style={{ backgroundColor: "var(--primary)", opacity: 0.1 }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--primary)", opacity: 0.25 }} />
          <div className="h-[1px] w-8" style={{ backgroundColor: "var(--primary)", opacity: 0.15 }} />
        </motion.div>
      </div>
    </section>
  );
}
