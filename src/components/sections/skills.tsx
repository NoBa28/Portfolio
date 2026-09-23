import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SkillLevel } from "@/components/ui/skill-level";
import { site } from "@/content/site";

export function Skills() {
  const { skills } = site;

  return (
    <Section id="faehigkeiten" className="bg-ink-soft/60">
      <SectionHeading
        index="02"
        eyebrow={skills.eyebrow}
        title={skills.title}
        lead={skills.lead}
      />

      <div className="grid gap-4 md:grid-cols-2">
        {skills.groups.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.06}>
            <article className="h-full border border-line bg-ink/40 p-6 transition-colors duration-300 hover:border-copper/50 md:p-7">
              <div className="mb-4 flex items-start justify-between gap-4">
                <h3 className="font-display text-2xl text-paper md:text-3xl">
                  {group.title}
                </h3>
                <span className="font-mono text-[10px] tracking-[0.2em] text-copper">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-muted">
                {group.description}
              </p>
              <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <SkillLevel
                      name={item.name}
                      level={item.level}
                      max={skills.levelMax}
                    />
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
