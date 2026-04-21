import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-cream-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-lg font-semibold">
                i
              </span>
              <span className="font-serif text-xl">I2P Fellowship</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A pilot programme helping students turn ideas into real products — with mentorship, community, and the courage to ship.
            </p>
            <form className="mt-6 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 rounded-full border border-border bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="button"
                className="rounded-full bg-foreground px-4 py-2.5 text-sm font-medium text-background hover:bg-foreground/90"
              >
                Notify me
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-muted-foreground">
              Programme
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/programme" className="hover:text-primary">How it works</Link></li>
              <li><Link to="/mentors" className="hover:text-primary">Mentors</Link></li>
              <li><Link to="/events" className="hover:text-primary">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-wider text-muted-foreground">
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><a href="mailto:hello@i2pfellowship.org" className="hover:text-primary">hello@i2pfellowship.org</a></li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 hover:bg-muted hover:text-primary"><Instagram className="size-4" /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-border p-2 hover:bg-muted hover:text-primary"><Linkedin className="size-4" /></a>
              <a href="#" aria-label="Twitter" className="rounded-full border border-border p-2 hover:bg-muted hover:text-primary"><Twitter className="size-4" /></a>
              <a href="mailto:hello@i2pfellowship.org" aria-label="Email" className="rounded-full border border-border p-2 hover:bg-muted hover:text-primary"><Mail className="size-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Idea to Product Fellowship. Made with care.</p>
          <p className="italic">Not a competition. A community.</p>
        </div>
      </div>
    </footer>
  );
}
