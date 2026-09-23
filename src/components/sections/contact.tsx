import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "@/components/motion/magnetic";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";

export function Contact() {
  const { contact } = site;

  return (
    <Section id="kontakt" className="pb-28 lg:pb-36">
      <Reveal>
        <p className="mb-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em] text-copper">
          <span>05</span>
          <span className="h-px w-8 bg-copper/70" />
          {contact.eyebrow}
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="max-w-4xl font-display text-[12vw] leading-[0.9] tracking-[-0.04em] text-paper sm:text-7xl md:text-8xl">
          {contact.title}
        </h2>
      </Reveal>

      <Reveal delay={0.16}>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-paper-dim md:text-lg">
          {contact.lead}
        </p>
      </Reveal>

      <Reveal delay={0.22}>
        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex items-center gap-4 font-display text-3xl text-paper transition-colors hover:text-copper sm:text-5xl"
        >
          {site.email}
          <ArrowUpRight className="size-7 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 sm:size-9" />
        </a>
      </Reveal>

      <Reveal delay={0.28}>
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Magnetic>
            <ButtonLink href={`mailto:${site.email}`}>
              {contact.cta}
              <ArrowUpRight size={16} />
            </ButtonLink>
          </Magnetic>
          {site.social
            .filter((item) => item.label !== "Mail")
            .map((item) => (
              <ButtonLink key={item.label} href={item.href} variant="ghost">
                {item.label}
              </ButtonLink>
            ))}
        </div>
      </Reveal>
    </Section>
  );
}
