/**
 * Landing page — AI Circuit Lab
 * Follows Design System from docs/ui-ux/design-system.md
 *
 * Pattern: Minimal & Direct + Demo (Hero > Features > CTA)
 * Style: Flat Design
 * Colors: Primary #6366F1, Secondary #818CF8, CTA #10B981, BG #F5F3FF, Text #1E1B4B
 * Typography: Plus Jakarta Sans
 */

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F3FF" }}>
      {/* ─── Navbar ─── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-16"
        style={{ backgroundColor: "#F5F3FF", borderBottom: "1px solid #E0E0E0" }}
        role="navigation"
        aria-label="Main navigation"
      >
        <span
          className="text-xl font-bold tracking-tight"
          style={{ color: "#6366F1" }}
        >
          AI Circuit Lab
        </span>
        <ul className="hidden gap-8 text-sm font-medium md:flex" style={{ color: "#1E1B4B" }}>
          <li>
            <a href="#features" className="cursor-pointer transition-opacity duration-200 hover:opacity-70 focus:outline-2 focus:outline-offset-2" style={{ outlineColor: "#6366F1" }}>
              Features
            </a>
          </li>
          <li>
            <a href="#how-it-works" className="cursor-pointer transition-opacity duration-200 hover:opacity-70 focus:outline-2 focus:outline-offset-2" style={{ outlineColor: "#6366F1" }}>
              How It Works
            </a>
          </li>
          <li>
            <a href="#cta" className="cursor-pointer transition-opacity duration-200 hover:opacity-70 focus:outline-2 focus:outline-offset-2" style={{ outlineColor: "#6366F1" }}>
              Get Started
            </a>
          </li>
        </ul>
        <a
          href="#cta"
          className="cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus:outline-2 focus:outline-offset-2"
          style={{ backgroundColor: "#10B981", outlineColor: "#10B981" }}
        >
          Start Free
        </a>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="flex flex-col items-center px-6 py-24 text-center md:px-16 md:py-32">
        <h1
          className="max-w-2xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          style={{ color: "#1E1B4B" }}
        >
          Design AI Circuits,{" "}
          <span style={{ color: "#6366F1" }}>Faster Than Ever</span>
        </h1>
        <p
          className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl"
          style={{ color: "#4C4A6D" }}
        >
          Build, simulate, and optimize AI-powered circuits with an intelligent
          platform that understands your design intent.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#cta"
            className="cursor-pointer rounded-lg px-8 py-3 text-base font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus:outline-2 focus:outline-offset-2"
            style={{ backgroundColor: "#10B981", outlineColor: "#10B981" }}
          >
            Get Started Free
          </a>
          <a
            href="#features"
            className="cursor-pointer rounded-lg border-2 px-8 py-3 text-base font-semibold transition-opacity duration-200 hover:opacity-80 focus:outline-2 focus:outline-offset-2"
            style={{ borderColor: "#6366F1", color: "#6366F1", outlineColor: "#6366F1" }}
          >
            See Features
          </a>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section id="features" className="px-6 py-16 md:px-16 md:py-24">
        <h2
          className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1E1B4B" }}
        >
          Features
        </h2>
        <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Visual Circuit Editor",
              description:
                "Drag-and-drop interface to build circuits with real-time validation and auto-routing.",
            },
            {
              title: "AI-Powered Optimization",
              description:
                "Let AI analyze your circuit and suggest optimizations for power, speed, and area.",
            },
            {
              title: "Instant Simulation",
              description:
                "Run simulations in milliseconds with our cloud-accelerated compute engine.",
            },
            {
              title: "Component Library",
              description:
                "Access thousands of pre-built components with verified specifications.",
            },
            {
              title: "Collaboration",
              description:
                "Work together in real-time with team members on shared circuit projects.",
            },
            {
              title: "Export Anywhere",
              description:
                "Export to SPICE, Verilog, VHDL, or PDF with a single click.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#E5E7EB",
              }}
            >
              <h3
                className="mb-2 text-lg font-semibold"
                style={{ color: "#6366F1" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4C4A6D" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section
        id="how-it-works"
        className="px-6 py-16 md:px-16 md:py-24"
        style={{ backgroundColor: "#EDE9FE" }}
      >
        <h2
          className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1E1B4B" }}
        >
          How It Works
        </h2>
        <div className="mx-auto flex max-w-4xl flex-col gap-8 md:flex-row md:gap-12">
          {[
            { step: "1", title: "Design", description: "Create your circuit using the visual editor or import existing designs." },
            { step: "2", title: "Simulate", description: "Run AI-powered simulations to test performance and catch issues early." },
            { step: "3", title: "Optimize", description: "Get intelligent suggestions to improve your circuit automatically." },
          ].map((item) => (
            <div key={item.step} className="flex flex-1 flex-col items-center text-center">
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
                style={{ backgroundColor: "#6366F1" }}
              >
                {item.step}
              </div>
              <h3 className="mb-2 text-xl font-semibold" style={{ color: "#1E1B4B" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#4C4A6D" }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section
        id="cta"
        className="flex flex-col items-center px-6 py-16 text-center md:px-16 md:py-24"
      >
        <h2
          className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
          style={{ color: "#1E1B4B" }}
        >
          Ready to Build Smarter Circuits?
        </h2>
        <p className="mb-8 max-w-md text-lg" style={{ color: "#4C4A6D" }}>
          Join thousands of engineers using AI Circuit Lab to design faster and better.
        </p>
        <a
          href="#"
          className="cursor-pointer rounded-lg px-10 py-4 text-lg font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus:outline-2 focus:outline-offset-2"
          style={{ backgroundColor: "#10B981", outlineColor: "#10B981" }}
        >
          Get Started — It&apos;s Free
        </a>
      </section>

      {/* ─── Footer ─── */}
      <footer
        className="flex flex-col items-center gap-2 px-6 py-8 text-center text-sm"
        style={{ color: "#6B7280", borderTop: "1px solid #E5E7EB" }}
      >
        <p>&copy; {new Date().getFullYear()} AI Circuit Lab. All rights reserved.</p>
        <p>
          Design System powered by{" "}
          <a
            href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill"
            className="cursor-pointer font-medium underline transition-opacity duration-200 hover:opacity-70 focus:outline-2 focus:outline-offset-2"
            style={{ color: "#6366F1", outlineColor: "#6366F1" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            ui-ux-pro-max
          </a>
        </p>
      </footer>
    </div>
  );
}
