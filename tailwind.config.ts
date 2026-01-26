/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // Satoshi Replacement: Plus Jakarta Sans with specific tracking
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        // Technor Replacement: Bricolage Grotesque (Bold, wide, technical)
        display: ["Bricolage Grotesque", "Plus Jakarta Sans", "sans-serif"],
        // Array Replacement: Silkscreen (Dot-matrix/technical feel)
        accent: ["Silkscreen", "monospace"],
        // Zodiak/Sentient Replacement: Instrument Serif (Elegant, high-contrast serif)
        serif: ["Instrument Serif", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      spacing: {
        'golden-sm': '1.618rem',
        'golden-md': '2.618rem',
        'golden-lg': '4.236rem',
        'golden-xl': '6.854rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
