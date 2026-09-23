import { Star } from "lucide-react";
import { cn } from "@/lib/cn";

type SkillLevelProps = {
  name: string;
  level: number;
  max?: number;
};

export function SkillLevel({ name, level, max = 5 }: SkillLevelProps) {
  const clampedMax = Math.max(1, max);
  const filled = Math.min(clampedMax, Math.max(0, Math.round(level)));

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm text-paper">{name}</span>
      <span
        className="flex shrink-0 items-center gap-0.5"
        role="img"
        aria-label={`${name}: ${filled} von ${clampedMax}`}
      >
        {Array.from({ length: clampedMax }, (_, index) => {
          const isFilled = index < filled;
          return (
            <Star
              key={index}
              size={13}
              strokeWidth={1.6}
              className={cn(
                isFilled
                  ? "fill-copper text-copper"
                  : "fill-transparent text-line-strong",
              )}
              aria-hidden="true"
            />
          );
        })}
      </span>
    </div>
  );
}
