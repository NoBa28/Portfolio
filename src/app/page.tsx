import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SectionRail } from "@/components/layout/section-rail";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <SkipLink />
      <ScrollProgress />
      <SiteHeader />
      <SectionRail />
      <main id="inhalt">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
