"use client";

import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "var(--bg-elevated)" }}
    >
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 100%, var(--primary-glow), transparent 70%)",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[800px] px-8 py-24 text-center lg:py-32 xl:max-w-[960px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <span
            className="mb-4 inline-block text-[12px] font-semibold uppercase tracking-[0.1em]"
            style={{
              color: "var(--primary)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Get Started
          </span>

          {/* Headline */}
          <h2
            className="text-[28px] font-bold leading-[1.15] md:text-[36px] xl:text-[44px]"
            style={{
              color: "var(--text-dark)",
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            }}
          >
            Build your first circuit{" "}
            <span style={{ color: "var(--accent-word)" }}>in minutes</span>
          </h2>

          {/* Subtext */}
          <p
            className="mx-auto mt-5 max-w-[480px] text-[15px] leading-[1.65] xl:text-[17px]"
            style={{
              color: "var(--text-body)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            Describe your circuit. The AI generates, validates, and places it — then
            opens it in an interactive Sandbox where you can edit, simulate, and iterate.
            No prior electronics experience required.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-[1px]"
              style={{
                backgroundColor: "var(--primary)",
                fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
                boxShadow: "0 4px 24px var(--primary-glow)",
              }}
            >
              Start Building — Free
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 text-[15px] font-semibold transition-all duration-200 hover:-translate-y-[1px]"
              style={{
                color: "var(--text-dark)",
                border: "1px solid var(--border-card)",
                fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
              }}
            >
              View Documentation
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {["No credit card required", "Open-source core", "Community-driven"].map((text) => (
              <span
                key={text}
                className="flex items-center gap-2 text-[12px] font-medium"
                style={{
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M4.5 7l2 2 3-3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer bar */}
      <div
        className="border-t py-6"
        style={{
          borderColor: "var(--border-light)",
          backgroundColor: "var(--bg-surface)",
        }}
      >
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-8 sm:flex-row lg:px-12">
          <span
            className="text-[13px] font-semibold"
            style={{
              color: "var(--text-dark)",
              fontFamily: "var(--font-display, 'Space Grotesk', sans-serif)",
            }}
          >
            Protoboard
          </span>
          <span
            className="text-[12px]"
            style={{
              color: "var(--text-muted)",
              fontFamily: "var(--font-body, 'IBM Plex Sans', sans-serif)",
            }}
          >
            © {new Date().getFullYear()} Protoboard. Built with AI agents.
          </span>
        </div>
      </div>
    </section>
  );
}
