import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  items: ReactNode[];
  speed?: number; // seconds per loop
  className?: string;
};

export function Marquee({ items, speed = 40, className }: Props) {
  const list = [...items, ...items];
  return (
    <div className={cn("group relative w-full overflow-hidden", className)}>
      <div
        className="flex w-max animate-[marquee_var(--marquee-speed)_linear_infinite] gap-12 group-hover:[animation-play-state:paused]"
        style={{ ["--marquee-speed" as never]: `${speed}s` }}
      >
        {list.map((it, i) => (
          <div key={i} className="flex shrink-0 items-center gap-3">
            {it}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
