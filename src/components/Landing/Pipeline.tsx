"use client";

import { motion } from "framer-motion";

/* ─── Pipeline Nodes ─────────────────────────────────────────── */
const nodes = [
  {
    label: "NLP Parser",
    detail: "Tokenize & extract intent",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="22" height="18" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <path d="M7 11h10M7 15h14M7 19h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Circuit Architect",
    detail: "Components, nets & values",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <line x1="14" y1="3" x2="14" y2="8" stroke="currentColor" strokeWidth="1.4" />
        <line x1="14" y1="20" x2="14" y2="25" stroke="currentColor" strokeWidth="1.4" />
        <line x1="3" y1="14" x2="8" y2="14" stroke="currentColor" strokeWidth="1.4" />
        <line x1="20" y1="14" x2="25" y2="14" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "SPICE Validator",
    detail: "Simulate voltage & current",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
        <polyline points="6,18 10,12 14,16 18,8 22,14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
  },
  {
    label: "Board Placer",
    detail: "Physical row & column mapping",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.4" />
        {[0, 1, 2, 3].map((r) =>
          [0, 1, 2, 3].map((c) => (
            <circle key={`${r}-${c}`} cx={8 + c * 4} cy={8 + r * 4} r="1" fill="currentColor" opacity="0.3" />
          ))
        )}
        <circle cx={12} cy={12} r="1.4" fill="currentColor" />
        <circle cx={16} cy={12} r="1.4" fill="currentColor" />
        <line x1="12" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    label: "Assembly Guide",
    detail: "Step-by-step instructions",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M6 5h16a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M10 11l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="10" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

/* ─── Arrow between nodes ─────────────────────────────────── */
function Arrow() {
  return (
    <div className="flex items-center justify-center" aria-hidden="true">
      {/* Horizontal on lg */}
      <svg width="40" height="12" viewBox="0 0 40 12" className="hidden lg:block" fill="none">
        <line x1="0" y1="6" x2="30" y2="6" stroke="var(--primary)" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
        <polygon points="30,3 38,6 30,9" fill="var(--primary)" opacity="0.45" />
      </svg>
      {/* Vertical on mobile */}
      <svg width="12" height="32" viewBox="0 0 12 32" className="block lg:hidden" fill="none">
        <line x1="6" y1="0" x2="6" y2="22" stroke="var(--primary)" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.35" />
        <polygon points="3,22 6,30 9,22" fill="var(--primary)" opacity="0.45" />
      </svg>
    </div>
  );
}

/* ─── Section ────────────────────────────────────────────────── */
export default function Pipeline() {
  return (
    <section
      id="pipeline"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-base)" }}
    >
      {/* Subtle circuit-trace background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, var(--primary) 0.8px, transparent 0.8px)",
          backgroundSize: "32px 32px",
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
          className="mb-14 text-center xl:mb-16"
        >
          <span
            className="mb-3 inline-block text-[12px] font-semibold uppercase tracking-[0.1em]"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Architecture
          </span>
          <h2
            className="text-[28px] font-bold leading-[1.15] md:text-[32px] xl:text-[40px]"
            style={{
              color: "var(--text-dark)",
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            }}
          >
            Multi-agent{" "}
            <span style={{ color: "var(--accent-word)" }}>intelligence pipeline</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.65] xl:text-[17px]"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Five specialised agents work in sequence. Each validates its output before passing to the next.
          </p>
        </motion.div>

        {/* Pipeline flow */}
        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-center lg:gap-0">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex flex-col items-center lg:flex-row">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative flex w-[180px] flex-col items-center rounded-xl p-5 text-center transition-all duration-300 xl:w-[200px]"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border-card)",
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                  style={{ boxShadow: "0 0 24px var(--primary-glow)" }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ color: "var(--primary)", backgroundColor: "var(--bg-elevated)" }}
                >
                  {node.icon}
                </div>

                {/* Label */}
                <span
                  className="text-[14px] font-bold leading-[1.3]"
                  style={{
                    color: "var(--text-dark)",
                    fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                  }}
                >
                  {node.label}
                </span>

                {/* Detail */}
                <span
                  className="mt-1 text-[11px] leading-[1.4]"
                  style={{
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
                  }}
                >
                  {node.detail}
                </span>
              </motion.div>

              {i < nodes.length - 1 && <Arrow />}
            </div>
          ))}
        </div>

        {/* Bottom decorative circuit trace */}
        <motion.div
          className="mx-auto mt-16 flex items-center justify-center gap-2 xl:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          aria-hidden="true"
        >
          <div className="h-[1px] w-8" style={{ backgroundColor: "var(--primary)", opacity: 0.2 }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--primary)", opacity: 0.3 }} />
          <div className="h-[1px] w-32" style={{ backgroundColor: "var(--primary)", opacity: 0.15 }} />
          <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "var(--primary)", opacity: 0.3 }} />
          <div className="h-[1px] w-8" style={{ backgroundColor: "var(--primary)", opacity: 0.2 }} />
        </motion.div>
      </div>
    </section>
  );
}
