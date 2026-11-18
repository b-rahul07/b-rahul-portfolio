import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Landmark, Network, Palette, BarChart3, type LucideIcon } from "lucide-react";
import { profile } from "@/content";

type Chip = { label: string; href: string; icon: LucideIcon; bg: string; fg: string };

const chips: Record<string, Chip> = {
  Snapmint: { label: "Snapmint", href: "#experience", icon: BarChart3, bg: "#141414", fg: "#ffffff" },
  FinAdvisor: { label: "FinAdvisor", href: "#finadvisor", icon: Landmark, bg: "#1F7A4D", fg: "#ffffff" },
  FraudGuard: { label: "FraudGuard", href: "#fraudguard", icon: Network, bg: "#9BD619", fg: "#141414" },
  Kala: { label: "Kala", href: "#kala", icon: Palette, bg: "#F2A516", fg: "#141414" },
};

// {Name} marks a chip. Everything else is split into words that light up on scroll.
const text =
  "Hi, I'm Rahul 👋 I turn messy data into things people can trust: a cohort pipeline at {Snapmint} that tracks 3.2M+ records with zero mismatches, an LLM advisor {FinAdvisor} where code, not the model, decides what's suitable, a fraud model {FraudGuard} that reads transactions as a graph, and {Kala} which can tell 51 painters apart. Before any of that ships, I check whether the numbers hold up.";

const tokens = text.split(" ");

function Token({ token, progress, range }: { token: string; progress: MotionValue<number>; range: [number, number] }) {
  const reduce = useReducedMotion();
  const opacity = useTransform(progress, range, [0.16, 1]);
  const match = token.match(/^\{(\w+)\}(.*)$/);
  const style = reduce ? undefined : { opacity };

  if (match) {
    const chip = chips[match[1]];
    const Icon = chip.icon;
    return (
      <>
        <motion.a
          href={chip.href}
          style={style}
          className="mx-[0.1em] inline-flex translate-y-[-0.08em] items-center gap-[0.3em] rounded-full border border-line bg-card py-[0.08em] pl-[0.12em] pr-[0.45em] align-middle text-[0.62em] font-semibold tracking-tight shadow-sm transition-transform hover:-translate-y-[0.15em]"
        >
          <span className="grid h-[1.45em] w-[1.45em] place-items-center rounded-full" style={{ background: chip.bg, color: chip.fg }}>
            <Icon className="h-[0.8em] w-[0.8em]" />
          </span>
          {chip.label}
        </motion.a>
        {match[2] && <motion.span style={style}>{match[2]}</motion.span>}{" "}
      </>
    );
  }
  return (
    <>
      <motion.span style={style}>{token}</motion.span>{" "}
    </>
  );
}

export function Intro() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const n = tokens.length;

  return (
    <section id="intro" className="container py-24 md:py-36">
      <p ref={ref} className="max-w-5xl text-[clamp(1.75rem,4.2vw,3.4rem)] font-semibold leading-[1.22] tracking-[-0.035em]">
        {tokens.map((t, i) => (
          <Token key={i} token={t} progress={scrollYProgress} range={[i / n, (i + 1) / n]} />
        ))}
      </p>
      <div className="label mt-12 flex flex-wrap gap-x-8 gap-y-3 text-fg">
        <a href="#work" className="link-underline">See the work</a>
        <a href="#experience" className="link-underline">Read the job</a>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link-underline">
          Grab the resume
        </a>
      </div>
    </section>
  );
}
