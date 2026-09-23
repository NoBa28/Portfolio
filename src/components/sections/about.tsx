import { Reveal } from "@/components/motion/reveal";
import { Typed } from "@/components/motion/typewriter";
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
          <figure className="w-full">
            <div className="relative w-full">
              <span className="graphic-corner graphic-corner-tl" aria-hidden="true" />
              <span className="graphic-corner graphic-corner-br" aria-hidden="true" />
              <div className="graphic-frame relative">
                <svg
                  viewBox="0 0 1200 900"
                  aria-hidden="true"
                  className="graphic-hover graphic-fade-mark aspect-[4/3] h-full w-full"
                >
                  <rect
                    x="120"
                    y="500"
                    width="420"
                    height="90"
                    rx="6"
                    className="fill-copper"
                  />
                  <circle cx="470" cy="478" r="30" className="fill-copper" />
                  <polygon
                    points="352,590 382,590 367,624"
                    className="fill-copper"
                  />
                  <path
                    d="M 210 500 C 210 385 345 385 345 500"
                    fill="none"
                    strokeWidth="32"
                    strokeLinecap="round"
                    className="stroke-copper"
                  />
                  <path
                    d="M 860 370 L 755 500 L 860 630"
                    fill="none"
                    strokeWidth="30"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-copper"
                  />
                  <path
                    d="M 1030 370 L 1135 500 L 1030 630"
                    fill="none"
                    strokeWidth="30"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-copper"
                  />
                  <path
                    d="M 945 420 V 580"
                    fill="none"
                    strokeWidth="30"
                    strokeLinecap="round"
                    className="stroke-copper"
                  />
                </svg>
              </div>
            </div>
            <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Schreiner · Informatiker
            </figcaption>
          </figure>
        </Reveal>

        <div>
          {about.body.map((paragraph, index) => (
            <Reveal key={paragraph} delay={0.08 * index}>
              <p className="mb-5 text-base leading-relaxed text-paper-dim md:text-lg">
                <Typed text={paragraph} />
              </p>
            </Reveal>
          ))}

          <dl className="mt-10 grid grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-3 sm:gap-x-4">
            {about.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={0.1 * index}>
                <div className="min-w-0 text-center sm:text-left">
                  <dd className="font-display text-4xl text-paper sm:text-5xl">
                    <Typed text={stat.value} />
                  </dd>
                  <dt className="mt-2 font-mono text-[10px] leading-snug tracking-[0.12em] text-muted uppercase">
                    <Typed text={stat.label} />
                  </dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
