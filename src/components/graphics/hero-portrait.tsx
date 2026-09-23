import { cn } from "@/lib/cn";

type HeroPortraitProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  className?: string;
};

export function HeroPortrait({
  src,
  alt,
  caption,
  priority = false,
  className,
}: HeroPortraitProps) {
  return (
    <figure
      className={cn(
        "flex h-full min-h-0 w-full flex-col items-center justify-center",
        className,
      )}
    >
      <div className="hero-portrait-slot relative min-h-0 w-full flex-1">
        <div className="absolute inset-0 flex items-center justify-center p-3">
          <div className="graphic-frame hero-portrait-box relative">
            <span className="graphic-corner graphic-corner-tl" aria-hidden="true" />
            <span className="graphic-corner graphic-corner-br" aria-hidden="true" />
            {/* Plain img so the browser loads public/images/portrait.jpg itself.
                next/image rewrites that to /_next/image and was still serving a cached file. */}
            <img
              src={src}
              alt={alt}
              width={900}
              height={878}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              className="hero-portrait-image graphic-hover graphic-fade-photo h-full w-full"
            />
          </div>
        </div>
      </div>
      {caption ? (
        <figcaption className="hero-portrait-caption mt-2 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
