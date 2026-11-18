import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Linkedin } from "lucide-react";
import { profile } from "@/content";

const ease = [0.22, 1, 0.36, 1] as const;

function Cursor({ label, color, className, delay = 0 }: { label: string; color: string; className: string; delay?: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute flex items-start ${className}`}
      initial={reduce ? false : { opacity: 0, scale: 0.6 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={
        reduce
          ? undefined
          : {
              opacity: { delay: 0.9 + delay, duration: 0.4 },
              scale: { delay: 0.9 + delay, duration: 0.4 },
              y: { delay: 1.4 + delay, duration: 3.2, repeat: Infinity, ease: "easeInOut" },
            }
      }
    >
      <svg width="16" height="20" viewBox="0 0 16 20" className="drop-shadow">
        <path d="M1 1 L1 16 L5 12.5 L8 19 L10.5 18 L7.6 11.6 L13.5 11.6 Z" fill={color} stroke="white" strokeWidth="1.2" />
      </svg>
      <span className="ml-0.5 mt-3.5 rounded-md px-2 py-0.5 text-[11px] font-semibold text-white shadow" style={{ background: color }}>
        {label}
      </span>
    </motion.div>
  );
}

function Polaroid({ className = "" }: { className?: string }) {
  return (
    <figure className={`relative w-[200px] bg-white p-2.5 pb-9 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] ${className}`}>
      <span className="absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-3 bg-act-yellow/80" aria-hidden />
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        width={596}
        height={745}
        className="aspect-[4/5] w-full object-cover"
      />
      <figcaption className="absolute bottom-2 left-0 right-0 text-center font-serif text-lg italic text-act-ink">
        hi, that's me
      </figcaption>
    </figure>
  );
}

function NotebookCell() {
  return (
    <div className="w-[270px] rounded-xl bg-white p-3.5 text-left text-act-ink shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)]">
      <div className="flex items-center gap-1.5 border-b border-black/10 pb-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[10px] text-black/50">cohorts.ipynb</span>
      </div>
      <pre className="mt-2.5 whitespace-pre-wrap font-mono text-[11px] leading-relaxed">
        <span className="text-black/40">In [7]: </span>
        <span className="text-act-blue">history</span>.validate()
        {"\n"}
        <span className="text-black/40">Out[7]: </span>
        <span className="font-semibold text-act-green">✓ 3.2M rows · 0 mismatches</span>
      </pre>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const pop = (delay: number) =>
    reduce
      ? {}
      : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, ease, delay } };

  const chips: { text: string; tone: "ink" | "white" | "blue"; href?: string }[] = [
    { text: profile.name, tone: "ink" },
    { text: "analyses data", tone: "ink" },
    { text: "& builds ML", tone: "ink" },
    { text: "from Hyderabad", tone: "white" },
  ];

  return (
    <section id="top" className="pt-[4.5rem]">
      <div className="relative mx-2 overflow-hidden rounded-[1.75rem] bg-act-orange text-act-ink md:mx-4 md:rounded-[2.25rem]">
        {/* subtle dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: "radial-gradient(#141414 1px, transparent 1px)", backgroundSize: "22px 22px" }}
        />

        <div className="container relative flex min-h-[calc(100svh-5.5rem)] flex-col items-center justify-center py-16 text-center md:py-20">
          <motion.ul {...pop(0)} className="flex flex-wrap justify-center gap-2">
            {chips.map((c) => (
              <li
                key={c.text}
                className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold ${
                  c.tone === "ink" ? "bg-act-ink text-white" : "bg-white text-act-ink"
                }`}
              >
                {c.text}
              </li>
            ))}
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-act-blue px-3.5 py-1.5 text-[13px] font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </li>
          </motion.ul>

          {/* name inside a design-tool selection frame */}
          <motion.div {...pop(0.15)} className="relative mt-12 md:mt-16">
            <div className="relative border-[1.5px] border-act-cream/90 px-3 md:px-6">
              {["-left-1 -top-1", "-right-1 -top-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map((p) => (
                <span key={p} aria-hidden className={`absolute h-2 w-2 border border-act-ink bg-act-cream ${p}`} />
              ))}
              <h1 className="display pb-[0.06em] text-[clamp(5.5rem,24vw,15.5rem)] text-act-cream">
                <span className="sr-only">{profile.name}: </span>
                Rahul<span className="text-act-ink">.</span>
              </h1>
            </div>
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-act-blue px-1.5 py-0.5 font-mono text-[10px] text-white">
              data · ml · analytics
            </span>
            <Cursor label="Data Science" color="#3456E6" className="-left-6 -top-10 md:-left-16" />
            <Cursor label="Machine Learning" color="#D6338A" className="-bottom-14 right-[6%] hidden sm:flex" delay={0.2} />
            <Cursor label="Analytics" color="#141414" className="-bottom-12 left-[12%] hidden sm:flex" delay={0.4} />
          </motion.div>

          <motion.p {...pop(0.35)} className="mt-14 max-w-2xl text-lg font-medium leading-snug md:text-xl">
            CS (AI & ML) student who builds data pipelines, digs into product funnels and trains ML models, then checks
            whether the numbers <span className="rounded bg-act-cream px-1">actually hold up</span>.
          </motion.p>

          <motion.div {...pop(0.45)} className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#work" className="btn-hard" style={{ ["--shadow" as string]: "#FFF4E4" }}>
              See the work <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border-2 border-act-ink px-5 py-2 text-sm font-semibold transition-colors hover:bg-act-ink hover:text-white"
            >
              Resume <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* photo inline on smaller screens */}
          <motion.div {...pop(0.55)} className="mt-14 xl:hidden">
            <Polaroid className="mx-auto rotate-[-3deg]" />
          </motion.div>

          {/* floating desk items on wide screens */}
          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, rotate: 0, y: 40 }, animate: { opacity: 1, rotate: 5, y: 0 }, transition: { duration: 1, ease, delay: 0.6 } })}
            className="absolute right-[3%] top-[22%] hidden rotate-[5deg] xl:block"
          >
            <Polaroid />
          </motion.div>
          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, rotate: 0, y: 40 }, animate: { opacity: 1, rotate: -4, y: 0 }, transition: { duration: 1, ease, delay: 0.7 } })}
            className="absolute left-[2%] top-[58%] hidden -rotate-[4deg] xl:block"
          >
            <NotebookCell />
          </motion.div>
          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease, delay: 0.8 } })}
            className="absolute left-[5%] top-[18%] hidden xl:block"
          >
            <div className="w-[150px] rotate-[-6deg] bg-act-yellow p-3 text-left font-semibold leading-tight text-act-ink shadow-[0_14px_30px_-10px_rgba(0,0,0,0.4)]">
              <span className="block text-[13px]">Open to 2027</span>
              <span className="block text-[13px]">DS / ML / analytics roles</span>
              <span className="mt-2 block text-lg">✦</span>
            </div>
          </motion.div>
          <motion.div
            {...(reduce ? {} : { initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1, ease, delay: 0.9 } })}
            className="absolute bottom-[9%] right-[6%] hidden xl:block"
          >
            <div className="w-[150px] rotate-[4deg] bg-[#9BE3B5] p-3 text-left font-semibold leading-tight text-act-ink shadow-[0_14px_30px_-10px_rgba(0,0,0,0.4)]">
              <span className="block text-[13px]">CGPA 9.14</span>
              <span className="block text-[13px]">B.Tech, class of 2027</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
