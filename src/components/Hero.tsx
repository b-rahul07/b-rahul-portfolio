import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { profile, projects, experience } from "@/content";
import { Em } from "./SectionHead";

function useIstClock() {
  const fmt = () =>
    new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Kolkata",
    }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = window.setInterval(() => setTime(fmt()), 15_000);
    return () => window.clearInterval(id);
  }, []);
  return time;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const time = useIstClock();
  const latest = projects[0];
  const job = experience[0];

  const line = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { y: "105%" },
          animate: { y: "0%" },
          transition: { duration: 1, ease, delay },
        };
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease, delay },
        };

  return (
    <section id="top" className="container flex min-h-[100svh] flex-col pb-10 pt-28 md:pt-32">
      <motion.div {...fade(0)} className="flex flex-wrap items-center justify-between gap-3">
        <p className="eyebrow flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.status}
        </p>
        <p className="eyebrow">
          {profile.location} · {time} IST
        </p>
      </motion.div>

      <div className="flex flex-1 flex-col justify-center py-12 md:py-14">
        <h1 className="text-[clamp(3.6rem,16.5vw,12.5rem)] font-medium leading-[0.88] tracking-tightest">
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span {...line(0.1)} className="flex items-center gap-[0.18em]">
              {profile.firstName}
              <img
                src={profile.photo}
                alt=""
                width={300}
                height={180}
                className="inline-block h-[0.72em] w-[1.2em] rounded-full object-cover object-[50%_25%]"
              />
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.06em]">
            <motion.span {...line(0.22)} className="block">
              {profile.lastName}
              <span className="text-accent">.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          {...fade(0.5)}
          className="mt-8 max-w-2xl text-xl leading-snug text-muted sm:text-2xl md:mt-10 md:text-[1.75rem] lg:ml-auto lg:max-w-[34rem]"
        >
          CS (AI & ML) student building <span className="text-fg">data pipelines</span>,{" "}
          <span className="text-fg">analytics</span> and <span className="text-fg">ML systems</span>, and measuring
          them <Em>honestly</Em>.
        </motion.p>
      </div>

      <motion.dl
        {...fade(0.7)}
        className="grid grid-cols-1 gap-6 border-t border-line pt-6 sm:grid-cols-3 sm:gap-8"
      >
        <div>
          <dt className="eyebrow">Recently</dt>
          <dd className="mt-2 text-[15px] leading-snug">
            {job.role}
            <span className="block text-muted">{job.company.replace(" Pvt. Ltd.", "")}</span>
          </dd>
        </div>
        <div>
          <dt className="eyebrow">Studying</dt>
          <dd className="mt-2 text-[15px] leading-snug">
            B.Tech CSE (AI & ML), 2027
            <span className="block text-muted">Vardhaman College · CGPA 9.14</span>
          </dd>
        </div>
        <div>
          <dt className="eyebrow">Latest project</dt>
          <dd className="mt-2 text-[15px] leading-snug">
            <a href={`#${latest.slug}`} className="group inline-flex items-start gap-1">
              <span>
                <span className="link-underline">{latest.title}</span>
                <span className="block text-muted">{latest.kicker}</span>
              </span>
              <ArrowDownRight className="mt-0.5 h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </dd>
        </div>
      </motion.dl>
    </section>
  );
}
