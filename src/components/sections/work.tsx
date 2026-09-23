import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

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

      <ol className="space-y-16 md:space-y-24">
        {work.projects.map((project, index) => {
          const reverse = index % 2 === 1;
          return (
            <li key={project.slug}>
              <article
                className={cn(
                  "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                )}
              >
                <Reveal className={cn(reverse && "lg:order-2")}>
                  <a
                    href={project.href ?? "#kontakt"}
                    className="group relative block overflow-hidden bg-ink-soft"
                  >
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={1600}
                      height={900}
                      className="aspect-[16/10] w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                      sizes="(min-width: 1024px) 48vw, 100vw"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-80" />
                    <span className="absolute right-4 bottom-4 inline-flex size-10 items-center justify-center rounded-full border border-paper/20 bg-ink/50 text-paper opacity-0 transition duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </Reveal>

                <Reveal delay={0.1} className={cn(reverse && "lg:order-1")}>
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.24em] text-copper">
                    {String(index + 1).padStart(2, "0")} / {project.year}
                  </p>
                  <h3 className="font-display text-4xl tracking-tight text-paper md:text-5xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {project.role}
                  </p>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-paper-dim">
                    {project.summary}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
