import { experience } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead, Em } from "./SectionHead";

export function Experience() {
  return (
    <section id="experience" className="container scroll-mt-16 pt-24 md:pt-32">
      <SectionHead index="02" label="Experience">
        Turning product data into <Em>decisions</Em>.
      </SectionHead>

      {experience.map((job) => (
        <Reveal key={job.company} as="article" className="grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">{job.period}</p>
            <h3 className="mt-4 text-2xl font-medium tracking-tight md:text-3xl">{job.role}</h3>
            <p className="mt-1 text-muted">{job.company}</p>
          </div>
          <ol className="space-y-5 lg:col-span-8">
            {job.points.map((point, i) => (
              <li key={i} className="grid grid-cols-[2.25rem_1fr] text-[15px] leading-relaxed md:text-base">
                <span className="pt-1 font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      ))}
    </section>
  );
}
