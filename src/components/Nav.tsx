import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "@/content";
import { useTheme } from "@/lib/theme";

const links = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(links.some((l) => l.id === e.target.id) ? e.target.id : null);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["top", "intro", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
}

export function Logo() {
  return (
    <a
      href="#top"
      className="group inline-flex -rotate-1 items-center gap-1.5 rounded-lg bg-act-ink px-3 py-1.5 text-white shadow-[3px_3px_0_0_#EA5434] transition-transform hover:rotate-0 dark:ring-1 dark:ring-white/15"
      aria-label={`${profile.name}, back to top`}
    >
      <span className="text-[15px] font-extrabold uppercase leading-none tracking-[-0.04em]">Rahul's</span>
      <span className="font-serif text-[17px] italic leading-none">folio</span>
    </a>
  );
}

export function Nav() {
  const { theme, toggle } = useTheme();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur-md" : "border-b border-transparent bg-bg"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <div className="flex items-center gap-8">
          <Logo />
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`text-[13px] transition-colors ${
                    active === l.id ? "font-semibold text-fg" : "text-muted hover:text-fg"
                  }`}
                  aria-current={active === l.id ? "true" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 text-[13px] text-muted transition-colors hover:text-fg"
              >
                Resume <ArrowUpRight className="h-3 w-3" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-fg hover:text-fg"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href="#contact" className="btn-hard hidden !px-4 !py-2 sm:inline-flex">
            Let's talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="container pb-6 md:hidden">
          <ul className="divide-y divide-line border-t border-line">
            {links.map((l, i) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between py-4 text-3xl font-extrabold tracking-tightest"
                >
                  {l.label}
                  <span className="label text-muted">0{i + 2}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 text-3xl font-extrabold tracking-tightest"
              >
                Resume <ArrowUpRight className="h-6 w-6" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
