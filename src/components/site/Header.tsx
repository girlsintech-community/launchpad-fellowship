import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/fellows", label: "Fellows" },
  { to: "/mentors", label: "Mentors" },
  { to: "/events", label: "Events" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4 lg:pt-6">
      <div
        className={cn(
          "flex items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-300",
          scrolled
            ? "border-border/60 bg-background/85 shadow-sm backdrop-blur-md"
            : "border-foreground/10 bg-background/60 backdrop-blur-sm",
        )}
      >
        <nav className="hidden items-center gap-0.5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 text-sm text-foreground/75 transition-colors hover:text-foreground hover:bg-muted"
              activeProps={{ className: "text-foreground bg-muted" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 hover:bg-muted lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-border/60 bg-background shadow-lg lg:hidden">
          <nav className="flex flex-col px-4 py-3">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground/80 hover:text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
