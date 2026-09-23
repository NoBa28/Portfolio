import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-start justify-center px-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-copper">
        404
      </p>
      <h1 className="mt-4 font-display text-6xl tracking-tight text-paper md:text-8xl">
        Diese Seite gibt es nicht.
      </h1>
      <p className="mt-6 max-w-md text-paper-dim">
        Hier liegt nichts. Zurück zur Startseite.
      </p>
      <div className="mt-10">
        <ButtonLink href="/">Zur Startseite</ButtonLink>
      </div>
    </main>
  );
}
