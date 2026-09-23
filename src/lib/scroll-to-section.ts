function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function scrollOffset(): number {
  const bar = document.querySelector("[data-header-bar]");
  const barBottom = bar?.getBoundingClientRect().bottom ?? 68;
  const gap = window.matchMedia("(max-width: 767px)").matches ? 24 : 16;
  return barBottom + gap;
}

function scrollTarget(id: string): HTMLElement | null {
  if (id === "top") {
    return document.getElementById("top");
  }

  const section = document.getElementById(id);
  if (!section) {
    return null;
  }

  return section.querySelector<HTMLElement>("[data-section-heading]") ?? section;
}

export function scrollToSection(id: string): void {
  window.dispatchEvent(new CustomEvent("portfolio:jump", { detail: id }));

  const target = scrollTarget(id);
  if (!target) {
    return;
  }

  const top =
    id === "top"
      ? 0
      : Math.max(0, target.getBoundingClientRect().top + window.scrollY - scrollOffset());

  window.scrollTo({
    top,
    left: 0,
    behavior: prefersReducedMotion() ? "auto" : "smooth",
  });

  const hash = id === "top" ? "" : `#${id}`;
  const nextUrl = `${window.location.pathname}${window.location.search}${hash}`;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  if (nextUrl !== currentUrl) {
    history.pushState(null, "", nextUrl);
  }
}

export function handleSectionLink(
  event: { preventDefault(): void },
  href: string,
): void {
  if (!href.startsWith("#") || href.length < 2) {
    return;
  }

  event.preventDefault();
  scrollToSection(href.slice(1));
}
