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
  tagline: "Informatiker aus St.Gallen. Vorher Schreiner.",
  manifesto:
    "Ich entwickle bei Abacus die Software für die Lohnbuchhaltung. Informatiker EFZ, und davor habe ich Schreiner gelernt.",
  roles: [
    "Software Development Engineer",
    "Informatiker EFZ",
    "Gelernter Schreiner",
    "Informatik HF, berufsbegleitend",
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
  portrait: {
    src: "/images/portrait.jpg",
    alt: "Porträt von Noah Balzan",
    caption: "",
  },
  nav: [
    { id: "ueber", href: "#ueber", label: "Über" },
    { id: "faehigkeiten", href: "#faehigkeiten", label: "Fähigkeiten" },
    { id: "arbeit", href: "#arbeit", label: "Projekte" },
    { id: "werdegang", href: "#werdegang", label: "Werdegang" },
    { id: "kontakt", href: "#kontakt", label: "Kontakt" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/NoBa28" },
    { label: "Mail", href: "mailto:noah.balzan@bluewin.ch" },
  ],
  about: {
    eyebrow: "Über mich",
    title: "Zwei Lehren.",
    lead:
      "Die erste in der Werkstatt, die zweite am Computer. Dazwischen das Militär.",
    body: [
      "Von 2016 bis 2020 habe ich die Schreinerlehre bei der hr rechsteiner ag in Gossau gemacht, einer Schreinerei für Küchen und Innenausbau. Vier Jahre lang heisst das: Mass nehmen, zuschneiden, zusammenbauen, und am Schluss siehst du, ob es im Raum wirklich passt.",
      "Danach war ich bei der Koster AG Holzwelten in Arnegg, bis ich ins Militär bin. 2021 habe ich bei der Abacus Research AG in Wittenbach noch einmal von vorne angefangen, als Informatiker Fachrichtung Applikationsentwicklung. 2025 das EFZ, und ich bin geblieben.",
      "Heute bin ich Software Development Engineer in der Lohnbuchhaltung: Funktionen bauen, Fehler beheben, die Software am Laufen halten. Seit 2026 arbeite ich 90 Prozent. Ab Oktober 2026 studiere ich an der ZBW berufsbegleitend Informatik und bleibe in der Lohnbuchhaltung.",
    ],
    stats: [
      { value: "2016", label: "Schreinerlehre" },
      { value: "2021", label: "Informatiklehre" },
      { value: "2025", label: "EFZ Informatik" },
    ],
  },
  skills: {
    eyebrow: "Fähigkeiten",
    title: "Womit ich arbeite.",
    lead:
      "Bei Abacus ist es Java und die Lohnbuchhaltung. Alles andere kommt aus der Ausbildung oder aus dem, was ich privat ausprobiere.",
    // 1 = basics, 5 = strongest. Add items as { name, level }.
    levelMax: 5,
    groups: [
      {
        id: "daily",
        title: "Berufsalltag",
        description:
          "Täglich bei Abacus. Gerade stellen wir die Oberfläche von ULC auf Vaadin um.",
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
          "In der Ausbildung und in eigenen Projekten gelernt. Nicht alles davon brauche ich jede Woche.",
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
          "Systeme, mit denen ich arbeite, und KI-Werkzeuge, die ich ständig nutze.",
        items: [
          { name: "Windows", level: 5 },
          { name: "Linux (Debian, Ubuntu)", level: 4 },
          { name: "KI-Tools", level: 5 },
        ],
      },
    ],
  },
  work: {
    eyebrow: "Projekte",
    title: "Eigene Projekte bis jetzt...",
    lead:
      "Die Lohnbuchhaltung bei Abacus kann ich hier nicht herzeigen. Das hier sind zwei Programme, die ich selbst geschrieben habe. Beides liegt auf GitHub.",
    projects: [
      {
        slug: "smart-work-companion",
        title: "Smart Work Companion",
        year: "2026",
        role: "Persönliches Projekt",
        summary:
          "Eine kleine Web-App für Aufgaben, Zeiterfassung und Notizen. Python, FastAPI und Jinja. Die Daten liegen lokal als JSON-Dateien, eine separate Datenbank braucht es nicht.",
        tags: ["Python", "FastAPI", "Jinja"],
        href: "https://github.com/NoBa28/Smart-Work-Companion-SWC",
      },
      {
        slug: "person-management",
        title: "Person Management",
        year: "2026",
        role: "Persönliches Projekt",
        summary:
          "Ein Konsolenprogramm für Personen und ihre Adressen. Python und MySQL, aufgeteilt in Model, View und Controller, damit Logik, Ausgabe und Ablauf nicht in einem Haufen landen. Die wichtigen Abläufe haben Tests.",
        tags: ["Python", "MySQL", "MVC"],
        href: "https://github.com/NoBa28/Person-Management",
      },
    ],
  },
  experience: {
    eyebrow: "Werdegang",
    title: "Bisher.",
    lead:
      "Schreinerei, Militär, dann der Wechsel zu Abacus. Ab Oktober 2026 studiere ich berufsbegleitend an der ZBW.",
    items: [
      {
        company: "hr rechsteiner ag",
        role: "Schreinerlehre",
        period: "2016 — 2020",
        location: "Gossau",
        summary:
          "Erste Lehre. Vier Jahre in einer Schreinerei für Küchen und Innenausbau.",
        highlights: [
          "Abgeschlossen 2020",
          "Anschliessend Wechsel zur Koster AG Holzwelten",
        ],
      },
      {
        company: "Koster AG Holzwelten",
        role: "Schreiner",
        period: "2020 — 2021",
        location: "Arnegg",
        summary:
          "Nach der Lehre als Schreiner gearbeitet, bis das Militär angefangen hat.",
        highlights: [
          "Koster AG Holzwelten in Arnegg",
          "Danach, 2021, der Start der Informatiklehre",
        ],
      },
      {
        company: "Abacus Research AG",
        role: "Informatiker EFZ, Applikationsentwicklung",
        period: "2021 — 2025",
        location: "Wittenbach, St.Gallen",
        summary:
          "Zweite Lehre: Informatiker EFZ, Fachrichtung Applikationsentwicklung.",
        highlights: [
          "Vier Jahre, Abschluss mit dem EFZ 2025",
          "Die ganze Lehre bei der Abacus Research AG in Wittenbach",
        ],
      },
      {
        company: "Abacus Research AG",
        role: "Software Development Engineer",
        period: "2025 — heute",
        location: "Wittenbach, St.Gallen",
        summary:
          "Geblieben nach der Lehre. Entwicklung an der Lohnbuchhaltung der Abacus-ERP.",
        highlights: [
          "Neue Funktionen, Fehler beheben, Bestehendes warten",
          "Java-Code, ursprünglich von Delphi portiert",
          "Oberfläche von ULC nach Vaadin",
          "Seit 2026 mit 90 Prozent Pensum",
        ],
      },
      {
        company: "ZBW St.Gallen",
        role: "Informatiker HF",
        period: "ab Oktober 2026",
        location: "St.Gallen",
        summary:
          "Ab Oktober 2026 studiere ich hier berufsbegleitend Informatik. Die Arbeit bei Abacus geht weiter.",
        highlights: [
          "Studiengang Informatiker HF an der ZBW St.Gallen",
          "Berufsbegleitend zur Stelle bei Abacus",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Hit me up.",
    lead: "Für die Arbeit, die Programme oder einfach so. Eine Mail reicht.",
    cta: "Mail schreiben",
  },
  footer: {
    note: "Schreiner gelernt, jetzt Software. Aus St.Gallen.",
  },
};

export const siteTitle = `${site.name} — ${site.role}`;
export const siteDescription = `${site.tagline} ${site.manifesto}`;
