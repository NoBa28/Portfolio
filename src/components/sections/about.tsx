import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { site } from "@/content/site";

export function About() {
  const { about } = site;

  return (
    <Section id="ueber">
      <SectionHeading
        index="01"
        eyebrow={about.eyebrow}
        title={about.title}
        lead={about.lead}
      />

      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <Reveal>
          <figure className="relative">
            <div className="absolute -top-3 -left-3 h-24 w-24 border-t border-l border-copper/70" />
            <div className="absolute -right-3 -bottom-3 h-24 w-24 border-r border-b border-copper/40" />
            <div className="relative overflow-hidden bg-ink-soft">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                width={1200}
                height={900}
                className="aspect-[4/3] h-full w-full object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Atelier — Platzhalterbild
            </figcaption>
          </figure>
        </Reveal>

        <div>
          {about.body.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 * index}>
              <p className="mb-5 text-base leading-relaxed text-paper-dim md:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
            {about.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.1 * index}>
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 font-display text-4xl text-paper md:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
