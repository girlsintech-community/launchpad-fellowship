import { useRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlowCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  glowColor?: string;
  /** Tailwind classes for the inner radial intensity. */
  intensity?: string;
};

/**
 * Wraps any card with a cursor-following radial glow.
 * Tracks pointer via CSS variables (no React re-renders).
 */
export function GlowCard({
  children,
  className,
  glowColor = "var(--primary)",
  intensity = "0.18",
  ...rest
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
    el.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
    el.style.setProperty("--glow-opacity", "1");
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--glow-opacity", "0");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("relative isolate overflow-hidden", className)}
      style={
        {
          "--glow-x": "50%",
          "--glow-y": "50%",
          "--glow-opacity": "0",
          "--glow-color": glowColor,
          "--glow-intensity": intensity,
        } as React.CSSProperties
      }
      {...rest}
    >
      {/* Cursor-following glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          opacity: "var(--glow-opacity)",
          background:
            "radial-gradient(380px circle at var(--glow-x) var(--glow-y), color-mix(in oklab, var(--glow-color) calc(var(--glow-intensity) * 100%), transparent), transparent 60%)",
        }}
      />
      {/* Subtle border highlight at cursor */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300"
        style={{
          opacity: "var(--glow-opacity)",
          background:
            "radial-gradient(220px circle at var(--glow-x) var(--glow-y), color-mix(in oklab, var(--glow-color) 35%, transparent), transparent 70%)",
          mask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
          WebkitMask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />
      {children}
    </div>
  );
}
