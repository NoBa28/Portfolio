"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Monogram } from "@/components/graphics/monogram";
import { site } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/cn";
import { handleSectionLink, scrollToSection } from "@/lib/scroll-to-section";

const ids = site.nav.map((item) => item.id);

export function SiteHeader() {
  const active = useActiveSection(ids);
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pendingHref = useRef<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const main = document.getElementById("inhalt");
    const footer = document.querySelector("footer");
    if (open) {
      main?.setAttribute("inert", "");
      footer?.setAttribute("inert", "");
    } else {
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    }
    return () => {
      document.body.style.overflow = "";
      main?.removeAttribute("inert");
      footer?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      return;
    }
    const href = pendingHref.current;
    if (!href) {
      return;
    }
    pendingHref.current = null;
    scrollToSection(href.slice(1));
  }, [open]);

  function followFromMenu(event: MouseEvent<HTMLAnchorElement>, href: string) {
    event.preventDefault();
    pendingHref.current = href;
    setOpen(false);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-colors duration-300",
        open
          ? "bottom-0 overflow-y-auto border-b border-line bg-ink"
          : scrolled
            ? "border-b border-line bg-ink/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        data-header-bar
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8 md:px-12 lg:px-16"
      >
        <a
          href="#top"
          onClick={(event) => handleSectionLink(event, "#top")}
          className="flex items-center gap-2.5 text-paper transition-colors hover:text-copper"
        >
          <Monogram className="size-8 text-copper" />
          <span className="font-display text-lg tracking-tight">
            {site.shortName}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Hauptnavigation">
          {site.nav.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(event) => handleSectionLink(event, item.href)}
                className={cn(
                  "relative font-mono text-[11px] uppercase tracking-[0.22em] transition-colors",
                  isActive ? "text-copper" : "text-paper-dim hover:text-paper",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-copper transition-all duration-300",
                    isActive ? "w-full" : "w-0",
                  )}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-sage">
            <span className="size-1.5 rounded-full bg-sage shadow-[0_0_10px_var(--sage)]" />
            {site.availability}
          </span>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-line-strong text-paper lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
          <span className="sr-only">
            {open ? "Menü schliessen" : "Menü öffnen"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            className="min-h-[calc(100dvh-4rem)] border-t border-line bg-ink lg:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-5 py-6"
              aria-label="Mobilnavigation"
            >
              {site.nav.map((item, index) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(event) => followFromMenu(event, item.href)}
                  className="flex items-baseline justify-between border-b border-line py-4"
                >
                  <span className="font-display text-3xl text-paper">
                    {item.label}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              ))}
              <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-sage">
                {site.availability}
              </p>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
