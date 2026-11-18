import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  label: string;
  children: ReactNode;
  aside?: ReactNode;
};

export function SectionHead({ index, label, children, aside }: Props) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center justify-between border-t border-line pt-4">
        <p className="eyebrow">
          <span className="text-fg">{index}</span>
          <span className="mx-2">/</span>
          {label}
        </p>
        {aside && <div className="eyebrow">{aside}</div>}
      </div>
      <h2 className="mt-8 max-w-4xl text-4xl font-medium leading-[1.02] tracking-tightest sm:text-5xl md:text-6xl">
        {children}
      </h2>
    </Reveal>
  );
}

/** Serif italic accent for a word or two inside a heading. */
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal italic tracking-normal">{children}</em>;
}
