import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  Globe2,
  Hammer,
  Heart,
  Laptop,
  Lightbulb,
  MapPin,
  MessageCircle,
  MousePointerClick,
  Quote,
  RefreshCw,
  Rocket,
  Send,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlowCard } from "@/components/site/GlowCard";
import { MagneticButton } from "@/components/site/MagneticButton";
import { SplitText } from "@/components/site/SplitText";
import { Marquee } from "@/components/site/Marquee";
import { FELLOWS, FELLOWS_STATS } from "@/data/fellows";

gsap.registerPlugin(ScrollTrigger);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I2P Fellowship" },
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

const STEPS = [
  {
    n: "01",
    t: "Idea",
    d: "Pressure-test your problem with mentors and peers. Sharpen the wedge.",
  },
  {
    n: "02",
    t: "Build",
    d: "Weekly building sprints. Workshops on shipping, scoping, and saying no.",
  },
  { n: "03", t: "Launch", d: "Get it out the door. First 100 users, real feedback, real lessons." },
  {
    n: "04",
    t: "Iterate",
    d: "Measure, talk to users, ship again. The loop that turns ideas into products.",
  },
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
  const stepsRef = useRef<HTMLDivElement>(null);

  // Steps reveal handled by framer-motion whileInView per-card (more reliable than GSAP from)

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
              className="lg:col-span-6"
            >
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-primary">
                The Fellowship
              </p>
              <h1 className="mt-3 font-serif text-5xl leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-[5.5rem]">
                <SplitText as="span" text="Idea to Product" className="block" />
                <SplitText
                  as="span"
                  text="(I2P) Fellowship."
                  className="block italic text-primary"
                  delay={0.2}
                />
              </h1>
              <p className="mt-6 font-serif text-xl italic text-muted-foreground">
                From idea to product, together.
              </p>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                A fellowship for students who'd rather build than enter another pitch competition.
                Real mentors. A real community. A real launch, to real users.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <MagneticButton>
                  <Link
                    to="/programme"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-all hover:shadow-lg"
                  >
                    See how it works
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-7 py-3.5 text-base font-medium text-foreground hover:bg-muted"
                  >
                    About I2P
                  </Link>
                </MagneticButton>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  12-week fellowship
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Virtual format
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  For student builders
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="relative lg:col-span-6"
              style={{ perspective: 1000 }}
            >
              <FellowshipHeroVideo />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">What you get</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
            Four things that change everything.
          </h2>
        </div>
        <div
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: 1000 }}
        >
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

      {/* Marquee strip — cities & colleges */}
      <section className="border-y border-border/60 bg-cream-deep/40 py-8">
        <Marquee
          speed={45}
          items={FELLOWS.map((f) => (
            <span key={f.name} className="flex items-center gap-3 whitespace-nowrap">
              <span className="font-serif text-2xl italic text-foreground">{f.city}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                {f.college}
              </span>
              <span className="mx-6 h-1.5 w-1.5 rounded-full bg-primary/60" />
            </span>
          ))}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-secondary px-8 py-16 text-secondary-foreground sm:px-14 lg:px-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-accent">
                Our philosophy
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
                This isn't a competition.
                <br />
                <span className="italic text-accent">It's a community.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed text-secondary-foreground/85">
                No leaderboards. No winners. No "demo day" theatre. Just a small group of student
                founders helping each other ship real things to real people, and getting honest
                feedback from people who've done it before.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/85">
                You'll leave with a product, not a pitch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-8 py-30 lg:px-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">
              The journey
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              Idea → Build → Launch → Iterate.
            </h2>
          </div>
          <Link
            to="/programme"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
          >
            See full programme <ArrowRight className="size-4" />
          </Link>
        </div>
        <div
          ref={stepsRef}
          className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: 1000 }}
        >
          {STEPS.map((s, i) => (
            <StepTiltCard key={s.n} step={s} isLast={i === STEPS.length - 1} index={i} />
          ))}
        </div>
      </section>

      {/* Mentors, coming soon */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-dashed border-primary/30 bg-cream-deep p-10 text-center lg:p-16">
          <p className="font-serif text-sm uppercase tracking-[0.22em] text-primary">Mentors</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">
            Our mentor bench is being curated.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            We're hand-picking operators, designers and founders who actually ship. Check back soon
            to meet them.
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
          "I built three things in college. I shipped{" "}
          <span className="underline-accent not-italic">none</span> of them. I2P is the programme I
          wish existed when I was 20."
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
              The I2P Fellowship is an initiative by{" "}
              <span className="font-medium text-foreground">Girls Leading Tech</span>, a global
              community building safer, kinder spaces for women and underrepresented students in
              tech.
            </p>
            <p>
              From hackathons and workshops to fellowships and storytelling, GLT exists to help more
              young builders find their people, ship their first thing, and lead with intention.
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

const HERO_VIDEO_PHASES = [
  { icon: Lightbulb, label: "Idea", detail: "30 user talks" },
  { icon: Hammer, label: "Build", detail: "weekly sprints" },
  { icon: Rocket, label: "Launch", detail: "first 100 users" },
  { icon: RefreshCw, label: "Iterate", detail: "ship again" },
];

const floatTransition = {
  repeat: Infinity,
  repeatType: "mirror" as const,
  duration: 3.2,
  ease: "easeInOut" as const,
};

function FellowshipHeroVideo() {
  return (
    <div
      className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl sm:min-h-[580px] lg:min-h-[640px]"
      aria-label="Animated story of fellows moving from idea to product"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,oklch(0.99_0.012_85),oklch(0.945_0.028_82)_46%,oklch(0.36_0.06_165/0.18))]" />
      <div className="paper-texture absolute inset-0 opacity-70" aria-hidden />

      <motion.div
        className="absolute left-[9%] top-[8%] rounded-full border border-primary/30 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary shadow-sm backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        12 weeks
      </motion.div>
      <motion.div
        className="absolute right-[8%] top-[10%] flex items-center gap-2 rounded-full border border-secondary/20 bg-background/85 px-4 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur"
        animate={{ y: [0, 9, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <CalendarCheck className="size-3.5 text-secondary" />
        Mentors online
      </motion.div>

      <div className="absolute inset-x-[7%] top-[21%] grid grid-cols-4 gap-2">
        {HERO_VIDEO_PHASES.map((phase, index) => (
          <motion.div
            key={phase.label}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35 + index * 0.14 }}
            className="relative rounded-2xl border border-border/80 bg-background/80 p-3 shadow-sm backdrop-blur"
          >
            <motion.div
              className="mb-2 flex size-8 items-center justify-center rounded-full bg-primary/10 text-primary"
              animate={{ scale: [1, 1.09, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: index * 0.45 }}
            >
              <phase.icon className="size-4" />
            </motion.div>
            <p className="font-serif text-base leading-none text-foreground">{phase.label}</p>
            <p className="mt-1 text-[0.64rem] uppercase tracking-[0.12em] text-muted-foreground">
              {phase.detail}
            </p>
          </motion.div>
        ))}
      </div>

      <svg
        className="absolute inset-x-[8%] top-[41%] h-[28%] w-[84%]"
        viewBox="0 0 680 190"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M20 126 C132 34 216 182 332 92 C448 0 524 136 660 54"
          stroke="currentColor"
          className="text-primary/25"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="14 16"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <motion.circle
          r="11"
          fill="currentColor"
          className="text-accent"
          animate={{ offsetDistance: ["0%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ offsetPath: "path('M20 126 C132 34 216 182 332 92 C448 0 524 136 660 54')" }}
        />
      </svg>

      <motion.div
        className="absolute left-[5%] top-[40%] w-[30%] rounded-3xl border border-border bg-background/90 p-4 shadow-lg backdrop-blur"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          <Laptop className="size-4" />
          Building sprint
        </div>
        <div className="mt-4 flex items-end gap-3">
          <LaptopBuilder />
          <div className="min-w-0 flex-1 rounded-2xl bg-foreground p-3 text-background">
            <div className="flex gap-1.5">
              <span className="size-1.5 rounded-full bg-primary" />
              <span className="size-1.5 rounded-full bg-accent" />
              <span className="size-1.5 rounded-full bg-secondary" />
            </div>
            <div className="mt-3 space-y-1.5">
              <motion.div
                className="h-1.5 rounded-full bg-background/75"
                animate={{ width: ["52%", "82%", "64%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="h-1.5 rounded-full bg-accent"
                animate={{ width: ["34%", "58%", "44%"] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <div className="h-1.5 w-3/4 rounded-full bg-background/45" />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-[5%] top-[39%] w-[30%] rounded-3xl border border-secondary/20 bg-background/92 p-4 shadow-lg backdrop-blur"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
          <MessageCircle className="size-4" />
          Mentor call
        </div>
        <div className="mt-4 flex items-center justify-between gap-3">
          <TalkingPerson gender="male" shirt="bg-secondary" delay={0.1} />
          <div className="flex-1 space-y-2">
            <motion.div
              className="ml-auto h-6 w-4/5 rounded-2xl rounded-br-sm bg-secondary/12"
              animate={{ opacity: [0.5, 1, 0.75] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="h-6 w-3/5 rounded-2xl rounded-bl-sm bg-primary/12"
              animate={{ opacity: [0.85, 0.45, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.45 }}
            />
          </div>
          <TalkingPerson gender="female" shirt="bg-primary" delay={0.6} />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[11%] left-[6%] w-[32%] rounded-3xl border border-border bg-background/90 p-4 shadow-lg backdrop-blur"
        animate={{ y: [0, 7, 0] }}
        transition={floatTransition}
      >
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          <MousePointerClick className="size-4" />
          People using it
        </div>
        <div className="mt-4 flex items-end gap-4">
          <ProductUsers />
          <div className="flex-1 rounded-2xl border border-border/70 bg-card p-3">
            <div className="h-2 w-3/4 rounded-full bg-muted" />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <motion.div
                className="h-9 rounded-xl bg-primary/70"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="h-9 rounded-xl bg-accent/80"
                animate={{ scale: [1.04, 1, 1.04] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[11%] right-[7%] w-[23%] overflow-hidden rounded-2xl border border-secondary/20 bg-foreground/95 p-3 text-background shadow-xl"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center justify-between">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-accent">
            v1 shipped
          </p>
          <Send className="size-3.5 text-accent" />
        </div>
        <div className="mt-3 rounded-xl bg-background/10 p-2">
          <div className="h-1.5 w-3/5 rounded-full bg-background/70" />
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            <motion.div
              className="h-7 rounded-lg bg-primary"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <motion.div
              className="h-7 rounded-lg bg-accent"
              animate={{ opacity: [1, 0.55, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <motion.div
              className="h-7 rounded-lg bg-secondary"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
          </div>
        </div>
        <p className="mt-2 font-serif text-base leading-none">Live product</p>
        <p className="mt-1 text-[0.65rem] text-background/70">small, real, improving</p>
      </motion.div>

      <motion.div
        className="absolute left-[41%] top-[58%] w-[20%] rounded-2xl border border-border bg-background/88 p-3 shadow-md backdrop-blur"
        animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-primary">
          <MessageCircle className="size-3.5" />
          Feedback
        </div>
        <div className="mt-2 space-y-1.5">
          <div className="h-1.5 w-11/12 rounded-full bg-muted" />
          <div className="h-1.5 w-8/12 rounded-full bg-muted" />
          <motion.div
            className="h-1.5 rounded-full bg-primary"
            animate={{ width: ["35%", "78%", "55%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-[4%] left-[9%] inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground shadow-md"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles className="size-3.5" />
        Not a pitch deck
      </motion.div>
    </div>
  );
}

function LaptopBuilder() {
  return (
    <motion.div
      className="relative flex w-16 shrink-0 flex-col items-center"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    >
      <IllustratedPerson gender="female" shirt="bg-primary" scale="large" />
      <div className="absolute bottom-0 h-5 w-14 rounded-t-lg border border-border bg-card shadow-sm">
        <motion.div
          className="mx-auto mt-1 h-1.5 rounded-full bg-primary"
          animate={{ width: ["35%", "72%", "45%"] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}

function TalkingPerson({
  gender,
  shirt,
  delay,
}: {
  gender: "female" | "male";
  shirt: string;
  delay: number;
}) {
  return (
    <motion.div
      className="relative flex w-11 shrink-0 flex-col items-center"
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut", delay }}
      aria-hidden
    >
      <motion.span
        className="absolute right-0 top-4 h-1.5 w-1.5 rounded-full bg-primary"
        animate={{ scale: [0.4, 1, 0.4], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity, delay }}
      />
      <IllustratedPerson gender={gender} shirt={shirt} />
    </motion.div>
  );
}

function ProductUsers() {
  return (
    <div className="flex w-24 shrink-0 items-end justify-center gap-2" aria-hidden>
      {[
        { delay: 0, gender: "female" as const, shirt: "bg-primary" },
        { delay: 0.35, gender: "male" as const, shirt: "bg-secondary" },
        { delay: 0.7, gender: "female" as const, shirt: "bg-accent" },
      ].map((person) => (
        <motion.span
          key={`${person.gender}-${person.delay}`}
          className="flex flex-col items-center"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: person.delay }}
        >
          <IllustratedPerson gender={person.gender} shirt={person.shirt} scale="small" />
        </motion.span>
      ))}
    </div>
  );
}

function IllustratedPerson({
  gender,
  shirt,
  scale = "base",
}: {
  gender: "female" | "male";
  shirt: string;
  scale?: "small" | "base" | "large";
}) {
  const sizes = {
    small: {
      head: "h-4 w-4",
      hair: "h-5 w-5",
      body: gender === "female" ? "h-8 w-7" : "h-8 w-6",
      legs: "h-4",
    },
    base: {
      head: "h-5 w-5",
      hair: "h-6 w-6",
      body: gender === "female" ? "h-10 w-8" : "h-10 w-7",
      legs: "h-5",
    },
    large: {
      head: "h-5 w-5",
      hair: "h-7 w-7",
      body: gender === "female" ? "h-11 w-9" : "h-11 w-8",
      legs: "h-5",
    },
  }[scale];

  return (
    <span className="flex flex-col items-center">
      <span className="relative flex items-center justify-center">
        {gender === "female" && (
          <span
            className={`absolute top-[-3px] rounded-t-full rounded-bl-full bg-foreground/80 ${sizes.hair}`}
          />
        )}
        {gender === "male" && (
          <span className="absolute top-[-2px] h-2.5 w-4 rounded-t-full bg-foreground/80" />
        )}
        <span className={`relative rounded-full bg-gold shadow-sm ${sizes.head}`}>
          <span className="absolute right-0.5 top-2 h-1 w-1 rounded-full bg-primary/70" />
        </span>
      </span>
      <span
        className={`relative mt-0.5 block ${sizes.body} ${
          gender === "female" ? "rounded-t-full rounded-b-sm" : "rounded-t-2xl"
        } ${shirt} shadow-md`}
      >
        {gender === "female" && (
          <span className="absolute -bottom-1 left-1/2 h-2 w-7 -translate-x-1/2 rounded-b-full bg-inherit" />
        )}
      </span>
      {gender === "male" && (
        <span className={`mt-[-1px] flex gap-1 ${sizes.legs}`}>
          <span className="h-full w-1.5 rounded-full bg-foreground/65" />
          <span className="h-full w-1.5 rounded-full bg-foreground/65" />
        </span>
      )}
    </span>
  );
}

function PillarTiltCard({ pillar: p }: { pillar: Pillar }) {
  const ref = useTilt<HTMLDivElement>();
  return (
    <GlowCard className="rounded-3xl">
      <div
        ref={ref}
        className="group relative rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl will-change-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        <h3 className="font-serif text-2xl" style={{ transform: "translateZ(28px)" }}>
          {p.title}
        </h3>
        <p
          className="mt-3 text-sm leading-relaxed text-muted-foreground"
          style={{ transform: "translateZ(18px)" }}
        >
          {p.body}
        </p>
      </div>
    </GlowCard>
  );
}

type Step = { n: string; t: string; d: string };

function StepTiltCard({ step: s, isLast, index }: { step: Step; isLast: boolean; index: number }) {
  const ref = useTilt<HTMLDivElement>();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      className="relative h-full"
    >
      <GlowCard className="rounded-3xl h-full">
        <div
          ref={ref}
          className="step-card group relative h-full rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span
            className="font-serif text-5xl text-accent"
            style={{ transform: "translateZ(34px)" }}
          >
            {s.n}
          </span>
          <h3 className="mt-3 font-serif text-2xl" style={{ transform: "translateZ(26px)" }}>
            {s.t}
          </h3>
          <p
            className="mt-2 text-sm leading-relaxed text-muted-foreground"
            style={{ transform: "translateZ(16px)" }}
          >
            {s.d}
          </p>
        </div>
      </GlowCard>
      {!isLast && (
        <ArrowRight className="absolute -right-4 top-1/2 hidden size-5 -translate-y-1/2 text-muted-foreground/40 lg:block" />
      )}
    </motion.div>
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
          Our pilot fellowship is already in motion, follow along as we build, launch and learn
          together.
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

function CountStat({
  value,
  label,
  icon: Icon,
}: {
  value: number;
  label: string;
  icon: LucideIcon;
}) {
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
