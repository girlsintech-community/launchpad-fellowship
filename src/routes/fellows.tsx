import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Linkedin, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlowCard } from "@/components/site/GlowCard";
import { FELLOWS, FELLOWS_STATS, fellowInitials, type Fellow } from "@/data/fellows";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/fellows")({
  head: () => ({
    meta: [
      { title: "Fellows, I2P Fellowship" },
      {
        name: "description",
        content:
          "Meet the 13 fellows shipping real products in the pilot Idea to Product (I2P) Fellowship, across 3 countries and 9 states.",
      },
      { property: "og:title", content: "Fellows, I2P Fellowship" },
      {
        property: "og:description",
        content:
          "13 fellows. 3 countries. 9 states. The pilot cohort of student builders behind the I2P Fellowship.",
      },
    ],
  }),
  component: FellowsPage,
});

const GRADIENTS = [
  "from-primary/25 via-accent/25 to-secondary/15",
  "from-accent/30 via-primary/15 to-secondary/20",
  "from-secondary/15 via-accent/25 to-primary/25",
  "from-primary/30 via-secondary/15 to-accent/25",
  "from-accent/25 via-secondary/20 to-primary/20",
  "from-secondary/20 via-primary/20 to-accent/30",
];

function FellowCard({ fellow, index }: { fellow: Fellow; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(el, {
        rotateY: x * 14,
        rotateX: -y * 14,
        transformPerspective: 900,
        transformOrigin: "center",
        duration: 0.6,
        ease: "power3.out",
      });
    };
    const onLeave = () =>
      gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power3.out" });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const gradient = GRADIENTS[index % GRADIENTS.length];
  const showImage = fellow.image && !imgFailed;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.05, ease: "easeOut" }}
      ref={ref}
      className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-500 will-change-transform hover:border-primary/40 hover:shadow-xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div>
        {/* Avatar block */}
        <div
          className={`relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${gradient}`}
          style={{ transform: "translateZ(40px)" }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.12_78/0.35),transparent_55%),radial-gradient(circle_at_70%_80%,oklch(0.62_0.14_38/0.3),transparent_55%)]" />
          {showImage ? (
            <img
              src={fellow.image}
              alt={fellow.name}
              loading="lazy"
              onError={() => setImgFailed(true)}
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-6xl font-medium text-foreground/80 sm:text-7xl">
                {fellowInitials(fellow.name)}
              </span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="mt-5" style={{ transform: "translateZ(28px)" }}>
          <h3 className="font-serif text-xl leading-tight text-foreground">{fellow.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{fellow.college}</p>
          <p className="mt-1 text-xs text-muted-foreground/80">{fellow.year}</p>
        </div>

        <div
          className="mt-4 flex items-center justify-between gap-3 border-t border-border/70 pt-4"
          style={{ transform: "translateZ(20px)" }}
        >
          <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            {fellow.city}, {fellow.country}
          </span>
          <a
            href={fellow.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${fellow.name} on LinkedIn`}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-foreground/70 transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
          >
            <Linkedin className="size-4" />
          </a>
        </div>

        {/* Idea placeholder */}
        <div
          className="mt-4 rounded-xl border border-dashed border-border bg-muted/40 p-3 text-xs italic text-muted-foreground"
          style={{ transform: "translateZ(15px)" }}
        >
          Idea coming soon, we'll share what they're building shortly.
        </div>
      </div>
    </motion.div>
  );
}

function StatBlock({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toString();
      },
    });
    return () => {
      tween.kill();
    };
  }, [value]);
  return (
    <div className="text-center">
      <div className="font-serif text-6xl leading-none text-primary sm:text-7xl">
        <span ref={ref}>0</span>
      </div>
      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

function FellowsPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="paper-texture absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 lg:px-10 lg:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-sm uppercase tracking-[0.22em] text-primary"
          >
            The pilot cohort
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Meet our <span className="italic text-primary">fellows.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Thirteen students, building in public, shipping for real users. They come from different cities, colleges and time zones, but they're all here for the same reason: to turn an idea into a product.
          </motion.p>

          <div className="mt-12 grid grid-cols-3 gap-6 rounded-3xl border border-border bg-card p-8 sm:gap-10 lg:p-10">
            <StatBlock value={FELLOWS_STATS.fellows} label="Fellows" />
            <StatBlock value={FELLOWS_STATS.countries} label="Countries" />
            <StatBlock value={FELLOWS_STATS.states} label="States" />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {FELLOWS.map((f, i) => (
            <FellowCard key={f.name} fellow={f} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-secondary px-8 py-16 text-secondary-foreground sm:px-14 lg:px-20 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-accent">For mentors</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">
                Want to <span className="italic text-accent">guide</span> the next batch?
              </h2>
              <p className="mt-4 max-w-xl text-secondary-foreground/85">
                If you've shipped products, run teams, or sold to real users, share your reps. We're always looking for mentors who'll show up for our fellows.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="https://airtable.com/appeThZsiIJFxoIjD/pag8RLV7ysAwhXOQ7/form"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-medium text-secondary transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Apply to mentor <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
