import type { ReactNode } from "react";
import { acts, type ActColor } from "@/content";
import { actStyle } from "@/lib/actStyle";
import { Reveal } from "./Reveal";


/** Serif italic accent for a word or two inside a heading. */
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal italic tracking-[-0.02em]">{children}</em>;
}

/** Orange full stop that ends big headlines. */
export function Dot() {
  return <span className="text-accent">.</span>;
}

export function ActTag({ n, light = false }: { n: string; light?: boolean }) {
  const act = acts.find((a) => a.n === n)!;
  return (
    <span
      className={`label inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${
        light ? "bg-white text-act-ink" : "bg-act-ink/90 text-white"
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-accent" : "bg-act-yellow"}`} />
      Act {n} of 0{acts.length} · {act.name}
    </span>
  );
}

type PanelProps = {
  n: string;
  title: ReactNode;
  children?: ReactNode;
  links?: { href: string; label: string; tag: string }[];
};

/** Full-bleed coloured intro for an act, with a giant outlined act number behind it. */
export function ActPanel({ n, title, children, links }: PanelProps) {
  const act = acts.find((a) => a.n === n)!;
  const s = actStyle[act.color];
  return (
    <div className={`relative mx-2 overflow-hidden rounded-[1.75rem] md:mx-4 md:rounded-[2.25rem] ${s.panel} ${s.text}`}>
      <span
        aria-hidden
        className="outline-num pointer-events-none absolute -bottom-[0.2em] right-[-0.04em] select-none text-[clamp(11rem,36vw,32rem)] font-extrabold leading-none tracking-tightest opacity-25"
      >
        {n}
      </span>
      <div className="container relative flex min-h-[64vh] flex-col justify-center py-20 md:min-h-[78vh] md:py-28">
        <Reveal>
          <ActTag n={n} light={act.color === "ink" || act.color === "blue"} />
          <h2 className="display mt-8 max-w-4xl text-[clamp(3rem,8.5vw,7.5rem)]">{title}</h2>
          {children && <div className={`mt-8 max-w-xl text-base leading-relaxed md:text-lg ${s.sub}`}>{children}</div>}
          {links && (
            <div className="mt-10 flex flex-wrap gap-2.5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-2 rounded-full border bg-white/10 py-1 pl-1 pr-4 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-white/25"
                  style={{ borderColor: "color-mix(in srgb, currentColor 35%, transparent)" }}
                >
                  <span className="rounded-full bg-act-ink px-2 py-0.5 font-mono text-[10px] text-white">{l.tag}</span>
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
}

/** Small header that opens a sub-section inside an act: "02.1 · SELECTED WORK". */
export function SubHead({
  tag,
  label,
  color,
  title,
  aside,
}: {
  tag: string;
  label: string;
  color: ActColor;
  title: ReactNode;
  aside?: ReactNode;
}) {
  const s = actStyle[color];
  return (
    <Reveal className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="label flex items-center gap-2 text-muted">
          <span className={`rounded px-1.5 py-0.5 ${s.panel} ${s.text}`}>{tag}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {label}
        </p>
        <h3 className="display mt-5 text-[clamp(2.4rem,5.5vw,4.5rem)]">{title}</h3>
      </div>
      {aside}
    </Reveal>
  );
}
