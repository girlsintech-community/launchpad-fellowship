import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Globe2, MapPin, Quote, Heart, type LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteLayout } from "@/components/site/SiteLayout";
import { FELLOWS_STATS } from "@/data/fellows";
import heroImage from "@/assets/hero-fellow.jpg";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I2P Fellowship, From idea to product. Together." },
      {
        name: "description",
        content:
          "A pilot fellowship for students to turn ideas into real products, with mentorship, community, and real users. Not a competition, a community.",
      },
      { property: "og:title", content: "I2P Fellowship, From idea to product. Together." },
      {
        property: "og:description",
        content:
          "Build, launch and iterate on your idea alongside fellow student founders and industry mentors.",
      },
    ],
  }),
  component: HomePage,
});

const PILLARS = [
  {
    title: "Real mentorship",
    body: "Weekly 1:1s and office hours with operators who've shipped products people use.",
  },
  {
    title: "A real cohort",
    body: "A small group of student founders who push, support and ship alongside you.",
  },
  {
    title: "A real launch",
    body: "Don't stop at a pitch deck. Ship to real users and learn what they actually do.",
  },
  {
    title: "Iterate forever",
    body: "Feedback loops, not finish lines. Leave with a product you keep building.",
  },
];

const HERO_IMAGE = heroImage;

const STEPS = [
  { n: "01", t: "Idea", d: "Pressure-test your problem with mentors and peers. Sharpen the wedge." },
  { n: "02", t: "Build", d: "Weekly building sprints. Workshops on shipping, scoping, and saying no." },
  { n: "03", t: "Launch", d: "Get it out the door. First 100 users, real feedback, real lessons." },
  { n: "04", t: "Iterate", d: "Measure, talk to users, ship again. The loop that turns ideas into products." },
];

function useTilt<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(el, {
        rotateY: x * 12,
        rotateX: -y * 12,
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
  return ref;
}

function HomePage() {
  const heroCardRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  // 3D tilt on hero card (mouse parallax)
  useEffect(() => {
    const el = heroCardRef.current;
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

  // Scroll-triggered 3D reveal on steps
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-card", {
        opacity: 0,
        y: 60,
        rotateX: -25,
        transformPerspective: 800,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: stepsRef.current, start: "top 80%" },
      });
    }, stepsRef);
    return () => ctx.revert();
  }, []);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="paper-texture absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7"
            >
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-primary">The Fellowship</p>
              <h1 className="mt-3 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[5.5rem]">
                Idea to Product
                <br />
                <span className="italic text-primary">(I2P) Fellowship.</span>
              </h1>
              <p className="mt-6 font-serif text-xl italic text-muted-foreground">
                From idea to product, together.
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A fellowship for students who'd rather build than enter another pitch competition. Real mentors. A real community. A real launch, to real users.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/programme"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  See how it works
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-7 py-3.5 text-base font-medium text-foreground hover:bg-muted"
                >
                  About I2P
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" />4-week fellowship</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Virtual format</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />For student builders</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="relative lg:col-span-5"
              style={{ perspective: 1000 }}
            >
              <div
                ref={heroCardRef}
                className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/20 to-secondary/15 shadow-xl will-change-transform"
              >
                <img
                  src={HERO_IMAGE}
                  alt="An I2P fellow building"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border/60 bg-background/85 p-5 backdrop-blur">
                  <p className="font-serif text-sm italic text-muted-foreground">"Felt less like a programme and more like a small studio of friends shipping together."</p>
                  <p className="mt-2 text-xs font-medium text-foreground">~ A future fellow, hopefully you</p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border-2 border-dashed border-primary/40 lg:block"
                aria-hidden
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">What you get</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Four things that change everything.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1000 }}>
          {PILLARS.map((p) => (
            <PillarTiltCard key={p.title} pillar={p} />
          ))}
        </div>
      </section>

      {/* Cohort stats */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="grid gap-6 rounded-[2rem] border border-border bg-card p-8 sm:grid-cols-3 lg:p-12"
        >
          <CountStat value={FELLOWS_STATS.fellows} label="Fellows" icon={Users} />
          <CountStat value={FELLOWS_STATS.countries} label="Countries" icon={Globe2} />
          <CountStat value={FELLOWS_STATS.states} label="States" icon={MapPin} />
        </motion.div>
        <div className="mt-6 flex justify-center">
          <Link
            to="/fellows"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
          >
            Meet the fellows <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-secondary px-8 py-16 text-secondary-foreground sm:px-14 lg:px-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-accent">Our philosophy</p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
                This isn't a competition.
                <br />
                <span className="italic text-accent">It's a community.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-secondary-foreground/85">
                No leaderboards. No winners. No "demo day" theatre. Just a small group of student founders helping each other ship real things to real people, and getting honest feedback from people who've done it before.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/85">
                You'll leave with a product, not a pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">The journey</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Idea → Build → Launch → Iterate.</h2>
          </div>
          <Link to="/programme" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
            See full programme <ArrowRight className="size-4" />
          </Link>
        </div>
        <div ref={stepsRef} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4" style={{ perspective: 1000 }}>
          {STEPS.map((s, i) => (
            <StepTiltCard key={s.n} step={s} isLast={i === STEPS.length - 1} />
          ))}
        </div>
      </section>

      {/* Mentors, coming soon */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-dashed border-primary/30 bg-cream-deep p-10 text-center lg:p-16">
          <p className="font-serif text-sm uppercase tracking-[0.22em] text-primary">Mentors</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Our mentor bench is being curated.</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We're hand-picking operators, designers and founders who actually ship. Check back soon to meet them.
          </p>
          <Link
            to="/mentors"
            className="mt-7 inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
          >
            Learn more <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
        <Quote className="mx-auto size-8 text-accent" />
        <blockquote className="mt-6 font-serif text-3xl leading-tight italic text-foreground sm:text-4xl">
          "I built three things in college. I shipped <span className="underline-accent not-italic">none</span> of them. I2P is the programme I wish existed when I was 20."
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground">~ Programme advisor</p>
      </section>

      {/* Girls Leading Tech, the org behind I2P */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid items-center gap-10 rounded-[2.5rem] border border-border bg-card p-10 lg:grid-cols-12 lg:p-16"
        >
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-primary">
              <Heart className="size-3.5" /> Powered by
            </span>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] sm:text-5xl">
              Girls Leading <span className="italic text-primary">Tech.</span>
            </h2>
          </div>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground lg:col-span-7">
            <p>
              The I2P Fellowship is an initiative by <span className="font-medium text-foreground">Girls Leading Tech</span>, a global community building safer, kinder spaces for women and underrepresented students in tech.
            </p>
            <p>
              From hackathons and workshops to fellowships and storytelling, GLT exists to help more young builders find their people, ship their first thing, and lead with intention.
            </p>
            <div className="flex flex-wrap gap-3 pt-3">
              <a
                href="https://www.linkedin.com/company/girlsleadingtech"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Visit Girls Leading Tech <ArrowRight className="size-4" />
              </a>
              <a
                href="https://girlsintech.substack.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
              >
                Read the newsletter
              </a>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10" style={{ perspective: 1200 }}>
        <FinalCtaTiltCard />
      </section>
    </SiteLayout>
  );
}

type Pillar = { title: string; body: string };

function PillarTiltCard({ pillar: p }: { pillar: Pillar }) {
  const ref = useTilt<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="group relative rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-xl will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <h3 className="font-serif text-2xl" style={{ transform: "translateZ(28px)" }}>{p.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground" style={{ transform: "translateZ(18px)" }}>{p.body}</p>
    </div>
  );
}

function FinalCtaTiltCard() {
  const ref = useTilt<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 text-center text-primary-foreground shadow-xl will-change-transform sm:px-14 lg:py-28"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.78_0.12_78/0.3),transparent_50%),radial-gradient(circle_at_80%_80%,oklch(0.36_0.06_165/0.4),transparent_50%)]" />
      <div className="relative" style={{ transform: "translateZ(40px)" }}>
        <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          Stop waiting for the perfect idea. Start with the one you have.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/85">
          Our pilot fellowship is already in motion, follow along as we build, launch and learn together.
        </p>
        <Link
          to="/programme"
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-medium text-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Explore the programme <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}

function CountStat({ value, label, icon: Icon }: { value: number; label: string; icon: LucideIcon }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%" },
      onUpdate: () => {
        el.textContent = Math.round(obj.v).toString();
      },
    });
    return () => {
      tween.kill();
    };
  }, [value]);
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>
      <div className="font-serif text-6xl leading-none text-foreground sm:text-7xl">
        <span ref={ref}>0</span>
      </div>
      <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</div>
    </div>
  );
}

