import { education, certifications } from "@/content";
import { Reveal } from "./Reveal";
import { SectionHead, Em } from "./SectionHead";

type Row = { title: string; place: string; detail?: string; year: string };

function List({ heading, rows }: { heading: string; rows: Row[] }) {
  return (
    <Reveal>
      <h3 className="eyebrow mb-2">{heading}</h3>
      <ul className="divide-y divide-line border-y border-line">
        {rows.map((r) => (
          <li key={r.title} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-5 md:grid-cols-[1fr_14rem_6rem]">
            <div>
              <p className="text-[15px] font-medium md:text-base">{r.title}</p>
              <p className="text-sm text-muted">{r.place}</p>
            </div>
            <p className="order-last col-span-2 text-sm text-muted md:order-none md:col-span-1 md:self-center">
              {r.detail}
            </p>
            <p className="text-right font-mono text-xs text-muted md:self-center">{r.year}</p>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Credentials() {
  return (
    <section id="credentials" className="container scroll-mt-16 pt-24 md:pt-32">
      <SectionHead index="04" label="Education & certifications">
        The <Em>paper trail</Em>.
      </SectionHead>
      <div className="space-y-14">
        <List heading="Education" rows={education} />
        <List heading="Certifications" rows={certifications} />
      </div>
    </section>
  );
}
