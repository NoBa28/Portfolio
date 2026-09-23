import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-14 max-w-3xl md:mb-20", className)}>
      <Reveal>
        <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-copper">
          <span aria-hidden="true">{index}</span>
          <span className="h-px w-8 bg-copper/70" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-[2.4rem] leading-[1.05] tracking-tight text-paper sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim md:text-lg">
            {lead}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
