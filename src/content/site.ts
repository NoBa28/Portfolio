import type { SiteContent } from "@/types/site";

/**
 * Single source of content for the site.
 * All visible copy, links, and image paths live here —
 * components stay free of copy.
 */
export const site: SiteContent = {
  name: "Noah Balzan",
  shortName: "Noah",
  role: "Software Engineer",
  location: "St.Gallen, Schweiz",
  availability: "Abacus · Lohnbuchhaltung",
  email: "noah.balzan@bluewin.ch",
  url: "https://example.com",
  tagline: "Produkte, die sich präzise anfühlen.",
  manifesto:
    "Informatiker EFZ mit Fokus Applikationsentwicklung. Bei Abacus entwickle und warte ich die ERP-Software im Bereich Lohnbuchhaltung — auf einer von Delphi nach Java überführten Codebasis, die wir laufend erweitern und modernisieren.",
  roles: [
    "Software Development Engineer",
    "ERP Lohnbuchhaltung",
    "Full-Stack Engineer",
    "Informatiker EFZ",
  ],
  keywords: [
    "Java",
    "Vaadin",
    "ULC",
    "Gradle",
    "SVN",
    "SQL",
    "JavaScript",
    "Linux",
  ],
  // Replace public/images/portrait.jpg — the path can stay the same.
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Platzhalterporträt — später durch ein eigenes Foto ersetzen",
    caption: "Porträt — Platzhalter",
  },
  nav: [
    { id: "ueber", href: "#ueber", label: "Über" },
    { id: "faehigkeiten", href: "#faehigkeiten", label: "Fähigkeiten" },
    { id: "arbeit", href: "#arbeit", label: "Arbeit" },
    { id: "werdegang", href: "#werdegang", label: "Werdegang" },
    { id: "kontakt", href: "#kontakt", label: "Kontakt" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/NoBa28" },
    { label: "Mail", href: "mailto:noah.balzan@bluewin.ch" },
  ],
  about: {
    eyebrow: "Über mich",
    title: "Handwerk vor Lautstärke.",
    lead:
      "Ich komme aus St.Gallen und entwickle bei Abacus die ERP-Software im Bereich Lohnbuchhaltung.",
    body: [
      "Von 2021 bis 2025 habe ich bei der Abacus Research AG in Wittenbach die Lehre als Informatiker Fachrichtung Applikationsentwicklung EFZ abgeschlossen. Danach blieb ich im Unternehmen als Software Development Engineer.",
      "Im Fachbereich Lohnbuchhaltung entwickle ich Features, behebe Fehler und warte die produktive Abacus-ERP. Die Anwendung steht auf Legacy-Code, der von Delphi nach Java portiert wurde; diesen Bestand erweitern und modernisieren wir täglich — unter anderem durch die Umstellung der Oberfläche von ULC auf Vaadin.",
    ],
    image: {
      src: "/images/atelier.jpg",
      alt: "Stillleben eines Ateliers: Zirkel, Tinte und Papier auf einem Holzschreibtisch",
    },
    stats: [
      { value: "2021", label: "Lehre begonnen" },
      { value: "2025", label: "EFZ abgeschlossen" },
      { value: "ERP", label: "Lohnbuchhaltung" },
    ],
  },
  skills: {
    eyebrow: "Fähigkeiten",
    title: "Alltag, Handwerk, Umgebung.",
    lead:
      "Was ich täglich bei der Portierung einsetze — und was ich zusätzlich gelernt habe.",
    // 1 = basics, 5 = strongest. Add items as { name, level }.
    levelMax: 5,
    groups: [
      {
        id: "daily",
        title: "Berufsalltag",
        description:
          "Täglich im Einsatz bei Abacus — Portierung und Weiterentwicklung, aktuell die Umstellung von ULC auf Vaadin.",
        items: [
          { name: "Java", level: 5 },
          { name: "ULC", level: 5 },
          { name: "Vaadin", level: 4 },
          { name: "c-tree", level: 5 },
          { name: "SVN", level: 4 },
          { name: "Gradle", level: 4 },
          { name: "Jira (Atlassian)", level: 5 },
        ],
      },
      {
        id: "learned",
        title: "Sprachen & Web",
        description:
          "In der Ausbildung und darüber hinaus gelernt — bereit, im Projekt wieder aufzunehmen.",
        items: [
          { name: "SQL", level: 4 },
          { name: "HTML", level: 3 },
          { name: "CSS", level: 3 },
          { name: "JavaScript", level: 3 },
          { name: "Tailwind CSS", level: 2 },
          { name: "Python", level: 3 },
          { name: "C", level: 3 },
          { name: "C#", level: 3 },
          { name: "React Native", level: 2 },
        ],
      },
      {
        id: "environment",
        title: "Systeme & KI",
        description:
          "Umgebung im Alltag und privat — plus der Umgang mit KI-Werkzeugen.",
        items: [
          { name: "Windows", level: 5 },
          { name: "Linux (Debian, Ubuntu)", level: 4 },
          { name: "KI-Tools", level: 5 },
        ],
      },
    ],
  },
  work: {
    eyebrow: "Ausgewählte Arbeit",
    title: "Fälle, keine Galerie.",
    lead:
      "Platzhalter: Drei Projekte, die Wirkung, Rolle und Handschrift zeigen. Bilder und Texte später durch echte Case Studies ersetzen.",
    projects: [
      {
        slug: "atlas",
        title: "Atlas",
        year: "2025",
        role: "Lead Engineer",
        summary:
          "Platzhalter: Plattform für interne Abläufe. Komplexität reduziert, Ladezeiten halbiert, ein Design-System, das andere Teams übernehmen konnten.",
        tags: ["Next.js", "TypeScript", "Design System"],
        image: {
          src: "/images/project-atlas.jpg",
          alt: "Makroaufnahme überlappender Kupfer- und Metallflächen",
        },
        href: "#kontakt",
      },
      {
        slug: "signal",
        title: "Signal",
        year: "2024",
        role: "Full-Stack",
        summary:
          "Platzhalter: Produkt mit Echtzeit-Feedback. Klare Informationsarchitektur, robuste API, Interface, das unter Last ruhig bleibt.",
        tags: ["React", "Node.js", "Realtime"],
        image: {
          src: "/images/project-signal.jpg",
          alt: "Glasplatten in einem dunklen Raster mit kupfernem Licht",
        },
        href: "#kontakt",
      },
      {
        slug: "lumen",
        title: "Lumen",
        year: "2024",
        role: "Product Engineer",
        summary:
          "Platzhalter: Exploratives Werkzeug für Daten. Visualisierung, die Entscheidungen beschleunigt statt Dashboards aufzublähen.",
        tags: ["Python", "Visualization", "UX"],
        image: {
          src: "/images/project-lumen.jpg",
          alt: "Kupferfarbene Tinte, die sich verästelt in dunklem Wasser",
        },
        href: "#kontakt",
      },
    ],
  },
  experience: {
    eyebrow: "Werdegang",
    title: "Lehre, Beruf, Weiterbildung.",
    lead:
      "Von der Lehre zum Engineering an der Abacus-ERP — und die Weiterbildung, die dazugehört.",
    items: [
      {
        company: "ZBW St.Gallen",
        role: "Informatiker HF",
        period: "2026 — heute",
        location: "St.Gallen",
        summary:
          "Höhere Fachschule Informatik an der ZBW, berufsbegleitend.",
        highlights: [
          "Studiengang Informatiker HF",
          "Berufsbegleitend neben der Anstellung bei Abacus",
        ],
      },
      {
        company: "Abacus Research AG",
        role: "Software Development Engineer",
        period: "2025 — heute",
        location: "Wittenbach, St.Gallen",
        summary:
          "Full-Stack-Entwicklung an der Abacus-ERP im Bereich Lohnbuchhaltung: Features, Bugfixes und Wartung.",
        highlights: [
          "Weiterentwicklung und Wartung der Lohnbuchhaltung in der Abacus-ERP",
          "Arbeit an der von Delphi nach Java überführten Codebasis — laufend erweitern und modernisieren",
          "UI-Portierung von ULC nach Vaadin",
          "Pensum seit 2026: 90 %",
        ],
      },
      {
        company: "Abacus Research AG",
        role: "Informatiker EFZ, Applikationsentwicklung",
        period: "2021 — 2025",
        location: "Wittenbach, St.Gallen",
        summary:
          "Vierjährige Lehre als Informatiker Fachrichtung Applikationsentwicklung EFZ bei der Abacus Research AG.",
        highlights: [
          "Abschluss Informatiker EFZ, Fachrichtung Applikationsentwicklung",
          "Ausbildung bei der Abacus Research AG in Wittenbach",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Lass uns etwas Präzises bauen.",
    lead:
      "Ich arbeite in St.Gallen an der Abacus-ERP im Bereich Lohnbuchhaltung. Kein Formular-Theater: schreib direkt.",
    cta: "Nachricht senden",
  },
  footer: {
    note: "Gebaut als lebendiges System, nicht als Folie.",
  },
};

export const siteTitle = `${site.name} — ${site.role}`;
export const siteDescription = `${site.tagline} ${site.manifesto}`;
