import { ArrowUp } from "lucide-react";
import { profile } from "@/content";
import { Logo } from "./Nav";

export function Footer() {
  return (
    <footer className="container">
      <div className="flex flex-col gap-5 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Logo />
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
        <a href="#top" className="group inline-flex items-center gap-1.5 font-medium transition-colors hover:text-fg">
          Back to the top
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
