import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Sparkles, Mail } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events, I2P Fellowship" },
      { name: "description", content: "Open houses, workshops, office hours and meetups from the I2P Fellowship." },
      { property: "og:title", content: "Events, I2P Fellowship" },
      { property: "og:description", content: "Something good is brewing. Events coming soon." },
    ],
  }),
  component: EventsPage,
});

function EventsPage() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = orbRef.current;
    if (!el) return;
    const tween = gsap.to(el, {
      y: -18,
      rotate: 6,
      duration: 3,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    return () => {
      tween.kill();
    };
  }, []);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Events</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Drop in. <span className="italic">Look around.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Most of our events are open. Come meet the mentors, sit in on a workshop, or just see if the room feels right.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-border bg-cream-deep px-8 py-20 text-center sm:px-14 lg:py-28"
        >
          <div
            ref={orbRef}
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-primary/40 via-accent/40 to-secondary/30 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-gradient-to-tr from-secondary/30 via-primary/20 to-transparent blur-3xl"
          />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-primary backdrop-blur">
              <Sparkles className="size-3.5" /> Coming soon
            </span>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              We're cooking up something <span className="italic text-primary">good.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              No events lined up just yet, but workshops, open houses and office hours are on the way. Check back soon, or drop us a line and we'll keep you posted.
            </p>
            <a
              href="mailto:girlsleadingtech@gmail.com"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Mail className="size-4" /> Say hello
            </a>
          </div>

          <div className="relative mt-14 grid gap-3 sm:grid-cols-3">
            {["Workshops", "Open Houses", "Office Hours"].map((label, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-2xl border border-dashed border-border bg-background/60 px-5 py-6 text-sm text-muted-foreground"
              >
                <span className="font-serif text-base text-foreground">{label}</span>
                <p className="mt-1 text-xs">soon</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
