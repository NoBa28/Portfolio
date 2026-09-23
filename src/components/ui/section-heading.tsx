import { Reveal } from "@/components/motion/reveal";
import { Typed } from "@/components/motion/typewriter";
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
    <div
      data-section-heading
      className={cn("mb-14 max-w-3xl scroll-mt-24 md:mb-20", className)}
    >
      <Reveal>
        <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-copper">
          <span aria-hidden="true">{index}</span>
          <span className="h-px w-8 bg-copper/70" />
          <Typed text={eyebrow} />
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-[clamp(2.15rem,8vw,3.75rem)] leading-[1.08] tracking-tight text-balance text-paper md:text-6xl">
          <Typed text={title} />
        </h2>
      </Reveal>
      {lead ? (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-paper-dim md:text-lg">
            <Typed text={lead} />
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
