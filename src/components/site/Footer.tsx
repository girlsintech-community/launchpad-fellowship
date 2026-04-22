import { Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Instagram, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programme", label: "Programme" },
  { to: "/mentors", label: "Mentors" },
  { to: "/events", label: "Events" },
] as const;

const SOCIALS = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:girlsleadingtech@gmail.com" },
];

export function Footer() {
  const wordmarkRef = useRef<HTMLDivElement>(null);

  // Subtle parallax drift on the giant wordmark as you scroll into view
  useEffect(() => {
    const el = wordmarkRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // Map element position to a small horizontal drift
      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      gsap.to(el, { x: (progress - 0.5) * 30, duration: 0.6, ease: "power2.out" });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-32 overflow-hidden border-t border-border/60 bg-secondary text-secondary-foreground">
      {/* Ambient gradient orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-accent/30 via-primary/10 to-transparent blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Top — tagline + mailto pill */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-serif text-xs uppercase tracking-[0.28em] text-accent">
              From idea to product, together.
            </p>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
            >
              Got an idea?{" "}
              <span className="italic text-accent">Let's talk.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-5">
            <a
              href="mailto:girlsleadingtech@gmail.com"
              className="group flex items-center justify-between gap-4 rounded-full border border-secondary-foreground/20 bg-secondary-foreground/5 px-6 py-4 text-secondary-foreground backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-secondary-foreground/10"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-secondary">
                  <Mail className="size-4" />
                </span>
                <span className="text-sm sm:text-base">girlsleadingtech@gmail.com</span>
              </span>
              <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-3 px-2 text-xs text-secondary-foreground/60">
              Drop us a line — we read everything.
            </p>
          </div>
        </div>

        {/* Middle — nav + socials */}
        <div className="mt-16 grid gap-10 border-t border-secondary-foreground/15 pt-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.22em] text-secondary-foreground/60">
              Explore
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-y-2 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-1 text-secondary-foreground/85 transition-colors hover:text-accent"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-all group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.22em] text-secondary-foreground/60">
              Follow along
            </h4>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-secondary-foreground/15 bg-secondary-foreground/5 text-secondary-foreground/80 transition-all hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent hover:text-secondary"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xs uppercase tracking-[0.22em] text-secondary-foreground/60">
              Made by
            </h4>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-secondary-foreground/80">
              A pilot fellowship by{" "}
              <a
                href="mailto:girlsleadingtech@gmail.com"
                className="text-accent underline-offset-4 hover:underline"
              >
                Girls Leading Tech
              </a>{" "}
              — helping students turn ideas into real products.
            </p>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="mt-16 overflow-hidden">
          <div
            ref={wordmarkRef}
            className="select-none whitespace-nowrap font-serif text-[22vw] font-light leading-none tracking-tight text-secondary-foreground/10 lg:text-[16rem]"
            aria-hidden
          >
            I2P Fellowship.
          </div>
        </div>

        {/* Fine print */}
        <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-secondary-foreground/15 pt-6 text-xs text-secondary-foreground/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Idea to Product Fellowship. Made with care.</p>
          <p className="italic">Not a competition. A community.</p>
        </div>
      </div>
    </footer>
  );
}
