import { Reveal } from "@/components/motion/reveal";
import { Typed } from "@/components/motion/typewriter";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";

export function Experience() {
  const { experience } = site;

  return (
    <Section id="werdegang" className="bg-ink-soft/60">
      <SectionHeading
        index="04"
        eyebrow={experience.eyebrow}
        title={experience.title}
        lead={experience.lead}
      />

      <ol className="relative space-y-0">
        <span
          aria-hidden="true"
          className="absolute top-2 bottom-2 left-[5px] w-px bg-line md:left-[7px]"
        />
        {experience.items.map((item, index) => (
          <li key={`${item.company}-${item.period}`} className="relative pb-12 last:pb-0 pl-8 md:pl-12">
            <span
              aria-hidden="true"
              className="absolute top-2 left-0 size-2.5 rounded-full border border-copper bg-ink md:size-3.5"
            />
            <Reveal delay={index * 0.05}>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-2xl text-paper md:text-3xl">
                  <Typed text={item.role} />
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper">
                  <Typed text={item.period} />
                </p>
              </div>
              <p className="mt-1 text-sm text-paper-dim">
                <Typed text={`${item.company} · ${item.location}`} />
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                <Typed text={item.summary} />
              </p>
              <ul className="mt-4 space-y-2">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex gap-3 text-sm leading-relaxed text-paper-dim"
                  >
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-copper" />
                    <Typed text={highlight} />
                  </li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
