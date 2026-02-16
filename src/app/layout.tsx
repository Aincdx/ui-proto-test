import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import { ThemeProvider } from "@/theme/theme-provider";
import "./globals.css";

/* ── Typography: Space Grotesk (headings) + IBM Plex Sans (body) ──
 * Technical, precise, engineering-focused. Recommended by
 * ui-ux-pro-max skill for electronics/hardware projects.
 */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PROTOBOARD — Build Intelligent Circuits with AI",
  description:
    "AI-driven circuit Generation, diagram SPICE, and guided Physical assembly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
