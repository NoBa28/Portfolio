import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { GrainOverlay } from "@/components/layout/grain-overlay";
import { JsonLd } from "@/components/layout/json-ld";
import { ScrollRestore } from "@/components/layout/scroll-restore";
import { TypewriterProvider } from "@/components/motion/typewriter";
import { site, siteDescription, siteTitle } from "@/content/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  preload: false,
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  style: "normal",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: siteTitle,
    template: `%s — ${site.shortName}`,
  },
  description: siteDescription,
  applicationName: site.shortName,
  keywords: site.keywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: site.url,
    title: siteTitle,
    description: site.tagline,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: site.tagline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0b0a",
  colorScheme: "dark",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-paper">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var key="portfolio-scroll";var nav=performance.getEntriesByType("navigation")[0];var restore=null;if(nav&&nav.type==="reload"){history.scrollRestoration="manual";var raw=sessionStorage.getItem(key);var top=Number(raw);restore=raw!=null&&isFinite(top)?top:0;if(location.hash){history.replaceState(null,"",location.pathname+location.search)}var go=function(){window.scrollTo(0,restore)};document.addEventListener("DOMContentLoaded",go);window.addEventListener("load",function(){go();restore=null;history.scrollRestoration="auto"})}var save=function(){if(restore!=null)return;sessionStorage.setItem(key,String(window.scrollY))};window.addEventListener("scroll",save,{passive:true});window.addEventListener("pagehide",save)}catch(e){}`,
          }}
        />
        <JsonLd />
        <GrainOverlay />
        <ScrollRestore />
        <TypewriterProvider>{children}</TypewriterProvider>
      </body>
    </html>
  );
}
