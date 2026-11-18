import { profile, skills, education, certifications } from "@/content";
import { ActPanel, SubHead, Em, Dot } from "./Act";
import { Reveal } from "./Reveal";

const chipColors = ["#3456E6", "#EA5434", "#22A35E", "#F4C430", "#D6338A"];

type Row = { title: string; place: string; detail?: string; year: string };

function Receipt({ heading, rows }: { heading: string; rows: Row[] }) {
  return (
    <div className="rounded-2xl border border-line bg-card p-5 md:p-7">
      <p className="label flex items-center justify-between text-muted">
        {heading}
        <span>{String(rows.length).padStart(2, "0")} items</span>
      </p>
      <ul className="mt-4 divide-y divide-dashed divide-line">
        {rows.map((r) => (
          <li key={r.title} className="flex items-start justify-between gap-4 py-4">
            <div>
              <p className="font-semibold leading-snug">{r.title}</p>
              <p className="mt-0.5 text-sm text-muted">
                {r.place}
                {r.detail && <> · <span className="text-fg">{r.detail}</span></>}
              </p>
            </div>
            <span className="shrink-0 font-mono text-xs text-muted">{r.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="scroll-mt-16 pt-24 md:pt-36">
      <ActPanel
        n="04"
        title={
          <>
            Data first, models second, <Em>claims last</Em>
            <Dot />
          </>
        }
      >
        A final-year CS (AI & ML) student at Vardhaman College of Engineering, Hyderabad. I like problems where the
        honest answer is more useful than the impressive one.
      </ActPanel>

      <div className="container pt-20 md:pt-28">
        <SubHead tag="04.1" label="Inside my head" color="green" title={<>A bit about me<Dot /></>} />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16">
          <Reveal className="flex justify-center lg:block">
            <figure className="relative w-full max-w-[300px] rotate-[-2deg] bg-white p-3 pb-12 shadow-[0_18px_40px_-14px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
              <span className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-act-green/70" aria-hidden />
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                loading="lazy"
                width={596}
                height={745}
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="absolute bottom-3 left-0 right-0 text-center font-serif text-xl italic text-act-ink">
                Rahul, Hyderabad
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal className="space-y-5 text-lg leading-relaxed md:text-xl">
              <p>
                Most of my work sits where data meets decisions: analysing funnels and retention, building pipelines
                that keep historical data correct, and training models that are judged on the metrics that actually
                matter.
              </p>
              <p className="text-muted">
                This summer I was a Product Analytics Intern at Snapmint, working in SQL, Mixpanel, Airflow and
                ClickHouse. Outside work I build end-to-end projects; the latest, FinAdvisor, is an LLM financial
                advisor in which tested code, not the model, decides what advice is suitable.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <p className="label text-muted">Toolkit</p>
              <div className="mt-4 space-y-5">
                {skills.map((s, gi) => (
                  <div key={s.group} className="grid gap-2 sm:grid-cols-[9.5rem_1fr] sm:gap-4">
                    <p className="flex items-center gap-2 pt-1.5 text-sm font-semibold">
                      <span className="h-2 w-2 rounded-full" style={{ background: chipColors[gi % chipColors.length] }} />
                      {s.group}
                    </p>
                    <ul className="flex flex-wrap gap-1.5">
                      {s.items.map((item) => (
                        <li key={item} className="rounded-full border border-line bg-soft px-3 py-1 text-[13px]">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pt-24 md:pt-32">
          <SubHead
            tag="04.2"
            label="Education & certifications"
            color="green"
            title={
              <>
                The paper <Em>trail</Em>
                <Dot />
              </>
            }
          />
          <Reveal className="grid gap-5 lg:grid-cols-2">
            <Receipt heading="Education" rows={education} />
            <Receipt heading="Certifications" rows={certifications} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
