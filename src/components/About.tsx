import { profile, skills } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead, Em } from "./SectionHead";

export function About() {
  return (
    <section id="about" className="container scroll-mt-16 pt-24 md:pt-32">
      <SectionHead index="03" label="About">
        Data first, models second, <Em>claims last</Em>.
      </SectionHead>

      <div className="grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-4">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            loading="lazy"
            width={900}
            height={841}
            className="aspect-[4/5] w-full max-w-sm rounded-xl object-cover object-[50%_20%]"
          />
        </Reveal>

        <div className="lg:col-span-8">
          <Reveal className="space-y-6 text-lg leading-relaxed md:text-xl">
            <p>
              I'm a final-year Computer Science (AI & ML) student at Vardhaman College of Engineering in Hyderabad. Most
              of my work sits where data meets decisions: analysing funnels and retention, building pipelines that keep
              historical data correct, and training models that are judged on the metrics that actually matter.
            </p>
            <p className="text-muted">
              This summer I was a Product Analytics Intern at Snapmint, working in SQL, Mixpanel, Airflow and
              ClickHouse. Outside work I build end-to-end projects; the latest, FinAdvisor, is an LLM financial advisor
              in which tested code, not the model, decides what advice is suitable.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <h3 className="eyebrow mb-2">Toolkit</h3>
            <dl className="divide-y divide-line border-y border-line">
              {skills.map((s) => (
                <div key={s.group} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="text-sm text-muted">{s.group}</dt>
                  <dd className="text-[15px]">{s.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
