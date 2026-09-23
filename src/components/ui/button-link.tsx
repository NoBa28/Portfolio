import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: ButtonLinkProps) {
  const isHttp = href.startsWith("http");
  const isExternal = isHttp || href.startsWith("mailto:");
  const classes = cn(
    "group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300",
    variant === "primary" &&
      "bg-paper text-ink hover:bg-copper hover:text-ink",
    variant === "ghost" &&
      "border border-line-strong text-paper hover:border-paper hover:bg-paper/5",
    className,
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
