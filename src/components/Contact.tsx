import { useState, type FormEvent } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { profile } from "@/content";
import { Reveal } from "./Reveal";
import { Em } from "./SectionHead";

const FORM_ENDPOINT = "https://formspree.io/f/mjgwyaqr";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-b border-line bg-transparent py-3 text-base text-fg placeholder:text-muted/80 transition-colors focus:border-fg focus:outline-none";

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
    <section id="contact" className="container scroll-mt-16 pt-24 md:pt-32">
      <Reveal>
        <div className="flex items-center justify-between border-t border-line pt-4">
          <p className="eyebrow">
            <span className="text-fg">05</span>
            <span className="mx-2">/</span>Contact
          </p>
        </div>
        <h2 className="mt-8 text-[clamp(2.75rem,9vw,7.5rem)] font-medium leading-[0.92] tracking-tightest">
          Have a role in mind?
          <br />
          <Em>Let's talk.</Em>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Email</p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="link-underline break-all text-xl font-medium tracking-tight sm:text-2xl"
            >
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-muted transition-colors hover:border-fg hover:text-fg"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <p className="eyebrow mt-10">Elsewhere</p>
          <ul className="mt-3 divide-y divide-line border-y border-line">
            {[
              { label: "LinkedIn", href: profile.links.linkedin },
              { label: "GitHub", href: profile.links.github },
              { label: "Resume (PDF)", href: profile.resume },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3.5 text-[15px]"
                >
                  {l.label}
                  <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <p className="eyebrow">Or leave a message</p>
          <form onSubmit={onSubmit} className="mt-3 space-y-2">
            <label className="block">
              <span className="sr-only">Name</span>
              <input name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Email</span>
              <input name="email" type="email" required autoComplete="email" placeholder="Your email" className={field} />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea name="message" required rows={4} placeholder="What's on your mind?" className={`${field} resize-none`} />
            </label>
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-85 disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <p role="status" aria-live="polite" className="text-sm text-muted">
                {status === "sent" && "Thanks, I'll get back to you soon."}
                {status === "error" && "That didn't go through. Please email me instead."}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
