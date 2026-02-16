/**
 * PROTOBOARD Landing Page
 * Design System: docs/ui-ux/design-system.md
 *
 * Flow: Hero → How It Works → Transparency → Sandbox → Why Different → CTA
 * Narrative: Describe → Generate → Render → Sandbox → Differentiation → Close
 */

import { InteractiveNavbar } from "@/components/ui/interactive-navbar";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";
import PromptToHardware from "@/components/Landing/PromptToHardware";
import CircuitSandbox from "@/components/Landing/CircuitSandbox";
import WhyDifferent from "@/components/Landing/WhyDifferent";
import CallToAction from "@/components/Landing/CallToAction";

/* ─── Section bridge — soft gradient connector ──────────────── */
function SectionBridge({
  from,
  to,
}: {
  from: string;
  to: string;
}) {
  return (
    <div
      className="relative flex h-10 items-center justify-center"
      style={{ background: `linear-gradient(${from}, ${to})` }}
      aria-hidden="true"
    >
      <div className="flex items-center gap-2">
        <div className="h-[1px] w-10" style={{ background: "var(--primary)", opacity: 0.12 }} />
        <div className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--primary)", opacity: 0.2 }} />
        <div className="h-[1px] w-10" style={{ background: "var(--primary)", opacity: 0.12 }} />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg-base)" }}>
      <header className="fixed top-0 left-0 z-50 w-full">
        <InteractiveNavbar />
      </header>

      <Hero />

      <HowItWorks />
      <SectionBridge from="var(--bg-elevated)" to="var(--bg-base)" />

      <PromptToHardware />
      <SectionBridge from="var(--bg-base)" to="var(--bg-elevated)" />

      <CircuitSandbox />
      <SectionBridge from="var(--bg-elevated)" to="var(--bg-base)" />

      <WhyDifferent />
      <SectionBridge from="var(--bg-base)" to="var(--bg-elevated)" />

      <CallToAction />
    </div>
  );
}
