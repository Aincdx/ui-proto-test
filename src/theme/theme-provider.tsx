"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ─── Types ────────────────────────────────────────────────── */
type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/* ─── Storage key ──────────────────────────────────────────── */
const STORAGE_KEY = "protoboard-theme";

/* ─── Provider ─────────────────────────────────────────────── */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  /* Read persisted preference or OS preference on mount */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "dark" || stored === "light") {
      setThemeState(stored);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setThemeState("dark");
    }
    setMounted(true);
  }, []);

  /* Apply class to <html> whenever theme changes */
  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    root.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const setTheme = useCallback((t: Theme) => setThemeState(t), []);

  /* Prevent flash — render invisible until we know the theme, but always wrap with context */
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
    </ThemeContext.Provider>
  );
}

/* ─── Hook ─────────────────────────────────────────────────── */
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}
