"use client";

import { useTheme } from "@/theme/theme-provider";
import { motion } from "framer-motion";

/**
 * Animated sun/moon toggle for light/dark mode.
 * Accessible: aria-label, focus ring, 44px touch target.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-colors duration-200 hover:bg-white/10 focus:outline-2 focus:outline-offset-2"
      style={{ outlineColor: "var(--primary)" }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <div className="relative h-5 w-5">
        {/* Sun icon */}
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -90 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="4" fill="currentColor" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 10 + Math.cos(rad) * 6;
            const y1 = 10 + Math.sin(rad) * 6;
            const x2 = 10 + Math.cos(rad) * 8;
            const y2 = 10 + Math.sin(rad) * 8;
            return (
              <line
                key={angle}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            );
          })}
        </motion.svg>

        {/* Moon icon */}
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 90,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <path
            d="M17 11.5a7 7 0 0 1-9.5-9.5A7 7 0 1 0 17 11.5Z"
            fill="currentColor"
          />
        </motion.svg>
      </div>
    </button>
  );
}
