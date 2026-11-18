import { ArrowRight, Hand, Hammer, Briefcase, Brain, Send, type LucideIcon } from "lucide-react";
import { acts, profile } from "@/content";
import { Dot } from "./Act";
import { actStyle } from "@/lib/actStyle";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = { top: Hand, work: Hammer, experience: Briefcase, about: Brain, contact: Send };
const offsets = ["md:translate-y-0", "md:translate-y-4", "md:-translate-y-1", "md:translate-y-3", "md:translate-y-1"];

/** Row of coloured act cards: the page's table of contents. */
export function ActsOverview() {
  return (
    <section aria-labelledby="acts-title" className="container pb-24 md:pb-36">
      <Reveal className="text-center">
        <p className="label flex items-center justify-center gap-2 text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-act-green" /> How this page is laid out
        </p>
        <h2 id="acts-title" className="display mt-5 text-[clamp(2.5rem,6vw,4.75rem)]">
          The story, in five acts<Dot />
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Each act has its own colour. Watch the pill in the corner to see where you are.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <ol className="-mx-5 mt-14 flex snap-x gap-3 overflow-x-auto px-5 pb-6 md:mx-0 md:grid md:grid-cols-6 md:overflow-visible md:px-0">
          {acts.map((a, i) => {
            const s = actStyle[a.color];
            const Icon = icons[a.id];
            return (
              <li key={a.id} className={`shrink-0 snap-start ${offsets[i]}`}>
                <a
                  href={`#${a.id}`}
                  className={`group flex h-56 w-40 flex-col justify-between rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1 md:w-auto ${s.panel} ${s.text}`}
                >
                  <span className="text-5xl font-extrabold tracking-tightest">{a.n}</span>
                  <span className="text-[15px] font-bold leading-tight">{a.name}</span>
                  <span className="flex items-end justify-between">
                    <span className={`font-mono text-[10px] ${s.sub}`}>{a.caption}</span>
                    <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </span>
                </a>
              </li>
            );
          })}
          <li className="shrink-0 snap-start md:translate-y-2">
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-56 w-40 flex-col justify-between rounded-2xl border-2 border-fg bg-card p-4 transition-transform duration-300 hover:-translate-y-2 hover:rotate-1 md:w-auto"
            >
              <ArrowRight className="h-8 w-8 transition-transform group-hover:translate-x-1" />
              <span className="text-[15px] font-bold leading-tight">The one-pager</span>
              <span className="font-mono text-[10px] text-muted">resume.pdf</span>
            </a>
          </li>
        </ol>
      </Reveal>
    </section>
  );
}
