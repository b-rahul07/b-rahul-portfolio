import { ArrowUpRight } from "lucide-react";
import { projects, type Project } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead, Em } from "./SectionHead";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article id={project.slug} className="scroll-mt-24 border-t border-line py-12 md:py-16">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5 lg:flex lg:flex-col">
          <div className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-fg">{num}</span>
            <span>{project.year}</span>
            {project.tag && (
              <span className="rounded-full border border-accent/40 px-2 py-0.5 text-accent">{project.tag}</span>
            )}
          </div>

          <h3 className="mt-5 text-4xl font-medium tracking-tightest md:text-5xl">{project.title}</h3>
          <p className="mt-2 font-serif text-xl italic text-muted md:text-2xl">{project.kicker}</p>

          <p className="mt-6 max-w-[58ch] text-[15px] leading-relaxed text-muted md:text-base">
            {project.description}
          </p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-5">
            {project.metrics.map((m) => (
              <div key={m.label}>
                <dt className="sr-only">{m.label}</dt>
                <dd className="text-lg font-medium tracking-tight md:text-xl">{m.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted">{m.label}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 font-mono text-xs leading-relaxed text-muted">{project.stack.join(" · ")}</p>

          <div className="mt-6 flex gap-6 text-sm font-medium lg:mt-auto lg:pt-8">
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1">
                <span className="link-underline">Live site</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1">
                <span className="link-underline">Source code</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <a
            href={project.live ?? project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-xl border border-line bg-card"
            aria-label={`Open ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              loading="lazy"
              decoding="async"
              width={project.imageSize[0]}
              height={project.imageSize[1]}
              className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.025]"
            />
          </a>
        </Reveal>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <section id="work" className="container scroll-mt-16 pt-24 md:pt-32">
      <SectionHead index="01" label="Selected work" aside={`(${String(projects.length).padStart(2, "0")})`}>
        Projects where the <Em>evaluation</Em> mattered as much as the model.
      </SectionHead>
      <div className="border-b border-line">
        {projects.map((p, i) => (
          <ProjectRow key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
