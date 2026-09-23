import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-2xl text-paper">{site.name}</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            {site.footer.note}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {site.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim transition-colors hover:text-copper"
                {...(item.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : undefined)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            © {year} · {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
