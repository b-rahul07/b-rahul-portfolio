import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Check, Linkedin, Github, FileText } from "lucide-react";
import { profile } from "@/content";
import { ActTag, Em } from "./Act";
import { Reveal } from "./Reveal";

const FORM_ENDPOINT = "https://formspree.io/f/mjgwyaqr";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-base text-white placeholder:text-white/50 transition-colors focus:border-white/60 focus:outline-none";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  }

  return (
    <section id="contact" className="scroll-mt-16 pt-24 md:pt-36">
      <div className="relative mx-2 overflow-hidden rounded-[1.75rem] bg-act-ink text-white md:mx-4 md:rounded-[2.25rem] dark:bg-card dark:ring-1 dark:ring-white/10">
        <span
          aria-hidden
          className="outline-num pointer-events-none absolute -bottom-[0.2em] right-[-0.04em] select-none text-[clamp(11rem,36vw,32rem)] font-extrabold leading-none tracking-tightest opacity-[0.12]"
        >
          05
        </span>
        <div className="container relative py-20 md:py-28">
          <Reveal>
            <ActTag n="05" light />
            <h2 className="display mt-8 text-[clamp(3rem,9vw,8rem)]">
              Got a role
              <br />
              or a dataset? <Em>Let's talk</Em>
              <span className="text-accent">.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="label text-white/60">Email me</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="break-all text-2xl font-bold tracking-tight underline decoration-accent decoration-2 underline-offset-[6px] transition-colors hover:text-accent sm:text-3xl"
                >
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-3 py-1 text-xs text-white/75 transition-colors hover:border-white hover:text-white"
                >
                  {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <p className="label mt-12 text-white/60">Elsewhere</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  { label: "LinkedIn", href: profile.links.linkedin, icon: Linkedin, bg: "#3456E6", fg: "#fff" },
                  { label: "GitHub", href: profile.links.github, icon: Github, bg: "#ffffff", fg: "#141414" },
                  { label: "Resume", href: profile.resume, icon: FileText, bg: "#F4C430", fg: "#141414" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:-translate-y-0.5"
                    style={{ background: l.bg, color: l.fg }}
                  >
                    <l.icon className="h-4 w-4" /> {l.label} <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <p className="mt-12 max-w-sm text-sm leading-relaxed text-white/60">
                Based in {profile.location}. Open to data science, machine learning and analytics roles from 2027,
                and to internships before then.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="label text-white/60">Or leave a note</p>
              <form onSubmit={onSubmit} className="mt-3 space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="sr-only">Name</span>
                    <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
                  </label>
                  <label className="block">
                    <span className="sr-only">Email</span>
                    <input name="email" type="email" required autoComplete="email" placeholder="Your email" className={field} />
                  </label>
                </div>
                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea name="message" required rows={5} placeholder="What's on your mind?" className={`${field} resize-none`} />
                </label>
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-act-ink shadow-[4px_4px_0_0_#EA5434] transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending…" : "Send it"}
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <p role="status" aria-live="polite" className="text-sm text-white/70">
                    {status === "sent" && "Thanks, I'll get back to you soon."}
                    {status === "error" && "That didn't go through. Please email me instead."}
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
