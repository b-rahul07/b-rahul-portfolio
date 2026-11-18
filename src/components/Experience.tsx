import { experience } from "@/content";
import { ActPanel, SubHead, Em, Dot } from "./Act";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 pt-24 md:pt-36">
      <ActPanel
        n="03"
        title={
          <>
            Where data met <Em>decisions</Em>
            <Dot />
          </>
        }
      >
        A summer in product analytics at a consumer-credit company: funnels, cohorts, pipelines, and the unglamorous
        work of making sure the numbers are right.
      </ActPanel>

      <div className="container pt-20 md:pt-28">
        {experience.map((job) => (
          <div key={job.company}>
            <SubHead
              tag="03.1"
              label={job.period}
              color="yellow"
              title={
                <>
                  {job.role}
                  <Dot />
                </>
              }
              aside={<p className="text-lg font-semibold md:text-right">{job.company}</p>}
            />

            <Reveal className="relative pt-9">
              <div className="absolute left-5 top-0 flex h-10 items-center gap-2 rounded-t-xl bg-act-yellow px-3.5 font-mono text-[11px] text-act-ink md:left-8">
                <span className="rounded bg-act-ink px-1 text-white">03</span> Snapmint
              </div>
              <div className="grid gap-10 rounded-2xl border border-line bg-card p-6 md:p-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
                <dl className="grid grid-cols-2 content-start gap-3">
                  {job.stats.map((s) => (
                    <div key={s.label} className="rounded-xl border border-line p-4">
                      <dt className="sr-only">{s.label}</dt>
                      <dd className="display text-4xl md:text-5xl">{s.value}</dd>
                      <dd className="mt-2 text-xs leading-snug text-muted">{s.label}</dd>
                    </div>
                  ))}
                </dl>
                <ol className="space-y-5">
                  {job.points.map((point, i) => (
                    <li key={i} className="grid grid-cols-[2.5rem_1fr] text-[15px] leading-relaxed md:text-base">
                      <span className="mt-0.5 h-fit w-fit rounded bg-act-yellow px-1.5 py-0.5 font-mono text-[11px] text-act-ink">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
