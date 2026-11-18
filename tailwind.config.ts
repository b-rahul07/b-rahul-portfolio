import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", md: "2rem", lg: "3rem" },
      screens: { "2xl": "1320px" },
    },
    extend: {
      screens: {
        // desktop with enough height for the sticky project stack
        tall: { raw: "(min-width: 1024px) and (min-height: 760px)" },
      },
      fontFamily: {
        sans: ["Inter Tight", "Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        soft: "rgb(var(--soft) / <alpha-value>)",
        line: "rgb(var(--fg) / 0.12)",
        accent: "#EA5434",
        act: {
          orange: "#EA5434",
          mist: "#BCD9D8",
          blue: "#3456E6",
          yellow: "#F4C430",
          green: "#22A35E",
          ink: "#141414",
          cream: "#FFF4E4",
        },
      },
      letterSpacing: {
        tightest: "-0.055em",
      },
    },
  },
  plugins: [],
} satisfies Config;
