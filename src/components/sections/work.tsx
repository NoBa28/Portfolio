import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Typed } from "@/components/motion/typewriter";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { site } from "@/content/site";

export function Work() {
  const { work } = site;

  return (
    <Section id="arbeit">
      <SectionHeading
        index="03"
        eyebrow={work.eyebrow}
        title={work.title}
        lead={work.lead}
      />

      <ol className="border-t border-line">
        {work.projects.map((project, index) => {
          const external = project.href?.startsWith("http");
          return (
            <li key={project.slug} className="border-b border-line">
              <Reveal>
                <article className="grid gap-6 py-12 md:grid-cols-12 md:gap-10 md:py-16">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-copper md:col-span-3 md:pt-3">
                    {String(index + 1).padStart(2, "0")} / {project.year}
                  </p>
                  <div className="md:col-span-9">
                    <a
                      href={project.href ?? "#kontakt"}
                      className="group inline-flex max-w-full items-start gap-3 text-paper transition-colors hover:text-copper"
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : undefined)}
                    >
                      <h3 className="min-w-0 font-display text-4xl tracking-tight break-words sm:text-5xl md:text-6xl">
                        <Typed text={project.title} />
                      </h3>
                      <ArrowUpRight
                        className="mt-2 size-6 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:size-7"
                        aria-hidden="true"
                      />
                    </a>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                      <Typed text={project.role} />
                    </p>
                    <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-dim md:text-lg">
                      <Typed text={project.summary} />
                    </p>
                    <ul className="mt-8 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag}>
                          <Tag>{tag}</Tag>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
