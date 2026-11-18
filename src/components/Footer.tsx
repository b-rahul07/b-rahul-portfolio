import { ArrowUp } from "lucide-react";
import { profile } from "@/content";

export function Footer() {
  return (
    <footer className="container mt-24 md:mt-32">
      <div className="flex flex-col gap-4 border-t border-line py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a href="#top" className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
