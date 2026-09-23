export type NavItem = {
  href: string;
  label: string;
  id: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type Skill = {
  name: string;
  /** Proficiency from 1 (basic) to `skills.levelMax` (strongest). */
  level: number;
};

export type SkillGroup = {
  id: string;
  title: string;
  description: string;
  items: Skill[];
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  role: string;
  summary: string;
  tags: string[];
  href?: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
};

export type SiteContent = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  availability: string;
  email: string;
  url: string;
  tagline: string;
  manifesto: string;
  roles: string[];
  keywords: string[];
  portrait: {
    src: string;
    alt: string;
    caption: string;
  };
  nav: NavItem[];
  social: SocialLink[];
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string[];
    stats: Stat[];
  };
  skills: {
    eyebrow: string;
    title: string;
    lead: string;
    levelMax: number;
    groups: SkillGroup[];
  };
  work: {
    eyebrow: string;
    title: string;
    lead: string;
    projects: Project[];
  };
  experience: {
    eyebrow: string;
    title: string;
    lead: string;
    items: Experience[];
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    cta: string;
  };
  footer: {
    note: string;
  };
};
