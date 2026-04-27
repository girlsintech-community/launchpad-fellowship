import { useEffect, useRef } from "react";

/**
 * Soft circular cursor that scales on hover over interactive elements.
 * Disabled on touch devices and when prefers-reduced-motion is set.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;
    let scale = 1;
    let curScale = 1;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "a, button, [role=button], input, textarea, select, [data-cursor='hover']",
      );
      scale = interactive ? 2.2 : 1;
    };

    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      curScale += (scale - curScale) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${curScale})`;
      raf = requestAnimationFrame(tick);
    };

    document.body.classList.add("has-custom-cursor");
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.body.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="custom-cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] h-9 w-9 rounded-full border border-primary/70 mix-blend-difference"
        style={{ transition: "border-color 200ms ease" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] h-1.5 w-1.5 rounded-full bg-primary"
      />
    </>
  );
}
