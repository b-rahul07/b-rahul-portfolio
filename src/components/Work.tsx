import { ArrowUpRight, Github } from "lucide-react";
import { projects, type Project } from "@/content";
import { ActPanel, SubHead, Em, Dot } from "./Act";
import { Reveal } from "./Reveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const darkTab = ["#9BD619", "#F2A516"].includes(project.color);
  return (
    <article
      id={project.slug}
      className="relative scroll-mt-28 pt-9 tall:sticky"
      style={{ top: `calc(4.75rem + ${index * 1.4}rem)` }}
    >
      {/* folder tab */}
      <div
        className={`absolute left-5 top-0 flex h-10 items-center gap-2 rounded-t-xl px-3.5 font-mono text-[11px] md:left-[calc(var(--tab)+2rem)] ${
          darkTab ? "text-act-ink" : "text-white"
        }`}
        style={{ background: project.color, ["--tab" as string]: `${index * 8.5}rem` }}
      >
        <span className={`rounded px-1 ${darkTab ? "bg-act-ink text-white" : "bg-white/90 text-act-ink"}`}>{num}</span>
        {project.title}
      </div>

      <div className="relative rounded-2xl border border-line bg-card p-6 shadow-[0_-8px_30px_-18px_rgba(0,0,0,0.35)] md:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-14">
          <div>
            <p className="label flex flex-wrap items-center gap-2 text-muted">
              <span className="h-2 w-2 rounded-full" style={{ background: project.color }} />
              {project.label} · {project.year}
              {project.tag && (
                <span className="rounded-full bg-accent px-2 py-0.5 text-white">{project.tag.split(" · ")[0]}</span>
              )}
            </p>
            <h3 className="display mt-4 text-[clamp(2.6rem,5vw,4.25rem)]">{project.title}</h3>
            <p className="mt-2 font-serif text-xl italic text-muted md:text-2xl">{project.kicker}</p>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-muted">{project.description}</p>

            <dl className="mt-6 grid grid-cols-3 gap-2">
              {project.metrics.map((m) => (
                <div key={m.label} className="rounded-lg border border-line p-2.5 md:p-3">
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="whitespace-nowrap text-sm font-bold tracking-tight sm:text-base md:text-lg">{m.value}</dd>
                  <dd className="mt-0.5 text-[11px] leading-snug text-muted">{m.label}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hard"
                  style={{ ["--shadow" as string]: project.color }}
                >
                  Visit the live site <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.code && (
                <a href={project.code} target="_blank" rel="noopener noreferrer" className="pill">
                  <Github className="h-3.5 w-3.5" /> Source
                </a>
              )}
            </div>
            <p className="mt-5 font-mono text-[11px] leading-relaxed text-muted">{project.stack.join(" · ")}</p>
          </div>

          <a
            href={project.live ?? project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            aria-label={`Open ${project.title}`}
          >
            <div
              className="overflow-hidden rounded-xl border border-line transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
              style={{ boxShadow: `8px 8px 0 0 ${project.color}` }}
            >
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                decoding="async"
                width={project.imageSize[0]}
                height={project.imageSize[1]}
                className="h-auto w-full"
              />
            </div>
          </a>
        </div>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="scroll-mt-16 pt-6">
      <ActPanel
        n="02"
        title={
          <>
            Built, shipped, and <Em>measured</Em>
            <Dot />
          </>
        }
        links={projects.map((p, i) => ({ href: `#${p.slug}`, label: p.title, tag: `2.${i + 1}` }))}
      >
        Four projects, each taken from data to a live site. The part I care about most is the evaluation: whether the
        model is actually right, for the people it is meant for.
      </ActPanel>

      <div className="container pt-20 md:pt-28">
        <SubHead
          tag="02.1"
          label="Selected work · 2026"
          color="blue"
          title={
            <>
              From notebook to live site<Dot />
            </>
          }
          aside={
            <p className="display text-6xl md:text-8xl">
              0{projects.length}
              <span className="ml-1 align-top font-mono text-sm font-normal tracking-normal text-muted">projects</span>
            </p>
          }
        />
        <Reveal className="space-y-8 tall:space-y-24">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
