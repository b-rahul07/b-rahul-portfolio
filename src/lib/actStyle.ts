import type { ActColor } from "@/content";

/** Panel background + text colours per act. Text colours are chosen for AA contrast on each fill. */
export const actStyle: Record<ActColor, { panel: string; text: string; sub: string; dot: string; hex: string }> = {
  orange: { panel: "bg-act-orange", text: "text-act-ink", sub: "text-act-ink/80", dot: "bg-act-orange", hex: "#EA5434" },
  blue: { panel: "bg-act-blue", text: "text-white", sub: "text-white/85", dot: "bg-act-blue", hex: "#3456E6" },
  yellow: { panel: "bg-act-yellow", text: "text-act-ink", sub: "text-act-ink/80", dot: "bg-act-yellow", hex: "#F4C430" },
  green: { panel: "bg-act-green", text: "text-act-ink", sub: "text-act-ink/85", dot: "bg-act-green", hex: "#22A35E" },
  ink: {
    panel: "bg-act-ink dark:bg-card dark:ring-1 dark:ring-white/10",
    text: "text-white",
    sub: "text-white/75",
    dot: "bg-act-ink dark:bg-white",
    hex: "#141414",
  },
};
