/**
 * PROTOBOARD Landing Page — pixel-perfect recreation
 * Design System: docs/ui-ux/design-system.md
 *
 * Pattern: Navbar → Hero (gradient) → How It Works (3 cards)
 * Style: Clean / flat, light blue primary
 * Colors: Primary #3BA3D9, Text #1A1A2E, Body #6B7280
 * Typography: Inter
 */

import Navbar from "@/components/Landing/Navbar";
import Hero from "@/components/Landing/Hero";
import HowItWorks from "@/components/Landing/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
    </div>
  );
}
