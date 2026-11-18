import { useEffect, useState } from "react";
import { acts } from "@/content";
import { actStyle } from "@/lib/actStyle";

/** Floating pill in the corner that says which act you're reading. */
export function ActIndicator() {
  const [current, setCurrent] = useState<(typeof acts)[number]>(acts[0]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const act = acts.find((a) => a.id === e.target.id);
          if (act) setCurrent(act);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    acts.forEach((a) => {
      const el = document.getElementById(a.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const s = actStyle[current.color];
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed bottom-4 left-4 z-40 hidden items-center gap-2 rounded-full bg-fg py-1.5 pl-2 pr-3.5 text-bg shadow-lg sm:inline-flex"
    >
      <span className={`h-2.5 w-2.5 rounded-full ring-2 ring-bg/30 ${s.dot}`} />
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] opacity-70">Act {current.n}</span>
      <span className="text-xs font-semibold">{current.name}</span>
    </div>
  );
}
