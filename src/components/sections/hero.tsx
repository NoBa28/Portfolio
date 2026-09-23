"use client";

import { ArrowDownRight } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { HeroPortrait } from "@/components/graphics/hero-portrait";
import { Magnetic } from "@/components/motion/magnetic";
import { Typed } from "@/components/motion/typewriter";
import { ButtonLink } from "@/components/ui/button-link";
import { site } from "@/content/site";
import { easeOutExpo } from "@/lib/motion";

export function Hero() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) {
      return;
    }
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % site.roles.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [reduce]);

  return (
    <section
      id="top"
      className="relative isolate flex h-svh flex-col overflow-x-clip px-5 pt-[calc(4.75rem+env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-8 md:h-dvh md:px-12 md:pt-[calc(5.5rem+env(safe-area-inset-top))] lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 grid-fade" />

      <div className="hero-grid relative mx-auto min-h-0 w-full max-w-6xl flex-1 gap-3 sm:gap-5">
        <div className="hero-intro relative z-10 min-w-0">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.28em] text-copper sm:mb-5"
          >
            <span>
              <Typed text={`Portfolio / ${new Date().getFullYear()}`} />
            </span>
            <span className="h-px w-8 bg-copper/60" aria-hidden="true" />
            <span>
              <Typed text={site.location} />
            </span>
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: easeOutExpo }}
            className="font-display text-[clamp(2.6rem,10vw,6.25rem)] leading-[0.85] tracking-[-0.04em] text-paper"
          >
            <Typed text={site.shortName} />
            <span className="text-copper">.</span>
          </motion.h1>

          <div className="hero-role mt-3 max-w-full sm:mt-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={site.roles[index]}
                initial={reduce ? false : { y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduce ? undefined : { y: -18, opacity: 0 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
              >
                {site.roles[index]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.14, ease: easeOutExpo }}
          className="hero-portrait relative min-h-0 w-full"
        >
          <HeroPortrait
            src={site.portrait.src}
            alt={site.portrait.alt}
            caption={site.portrait.caption}
            priority
          />
        </motion.div>

        <div className="hero-copy relative z-10 min-w-0 shrink-0">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease: easeOutExpo }}
            className="hero-copy-text max-w-md text-sm leading-relaxed text-paper-dim sm:text-base md:text-lg"
          >
            <Typed text={site.manifesto} />
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease: easeOutExpo }}
            className="hero-actions mt-4 flex flex-wrap items-center gap-3 sm:mt-6"
          >
            <Magnetic>
              <ButtonLink href="#arbeit">
                <Typed text="Projekte ansehen" />
                <ArrowDownRight size={16} />
              </ButtonLink>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="#kontakt" variant="ghost">
                <Typed text="Kontakt" />
              </ButtonLink>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <div className="hero-marquee relative mx-auto mt-3 w-full max-w-6xl shrink-0 overflow-hidden border-y border-line py-2.5 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] sm:mt-5 md:mt-6">
        <div className="marquee-track flex w-max gap-10 pr-10">
          {[...site.keywords, ...site.keywords].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.24em] text-muted"
            >
              {item}
              <span className="size-1 rounded-full bg-copper/80" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
