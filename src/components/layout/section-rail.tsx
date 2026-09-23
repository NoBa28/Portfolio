"use client";

import { site } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/cn";

const ids = site.nav.map((item) => item.id);

export function SectionRail() {
  const active = useActiveSection(ids);

  return (
    <nav
      aria-label="Abschnitte"
      className="pointer-events-none fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ol className="pointer-events-auto flex flex-col items-end gap-3">
        {site.nav.map((item, index) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase transition-colors",
                  isActive ? "text-copper" : "text-muted hover:text-paper",
                )}
                aria-current={isActive ? "true" : undefined}
              >
                <span className="opacity-0 transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
                <span
                  className={cn(
                    "h-px transition-all duration-300",
                    isActive
                      ? "w-8 bg-copper"
                      : "w-4 bg-line-strong group-hover:w-6 group-hover:bg-paper",
                  )}
                />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
