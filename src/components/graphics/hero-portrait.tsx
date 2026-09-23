import Image from "next/image";
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
      <div className="relative flex min-h-0 w-full flex-1 items-center justify-center p-3">
        <Image
          src={src}
          alt={alt}
          width={900}
          height={1200}
          priority={priority}
          className="hero-portrait-image"
          sizes="(min-width: 1440px) 28vw, (min-width: 768px) 32vw, 90vw"
        />
      </div>
      {caption ? (
        <figcaption className="hero-portrait-caption mt-2 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
