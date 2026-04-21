import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, Rocket, RefreshCcw, Calendar, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "I2P Fellowship — From idea to product. Together." },
      {
        name: "description",
        content:
          "A pilot fellowship for students to turn ideas into real products — with mentorship, community, and real users. Not a competition, a community.",
      },
      { property: "og:title", content: "I2P Fellowship — From idea to product. Together." },
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
    icon: Sparkles,
    title: "Real mentorship",
    body: "Weekly 1:1s and office hours with operators who've shipped products people use.",
  },
  {
    icon: Users,
    title: "A real cohort",
    body: "A small group of student founders who push, support and ship alongside you.",
  },
  {
    icon: Rocket,
    title: "A real launch",
    body: "Don't stop at a pitch deck. Ship to real users and learn what they actually do.",
  },
  {
    icon: RefreshCcw,
    title: "Iterate forever",
    body: "Feedback loops, not finish lines. Leave with a product you keep building.",
  },
];

const STEPS = [
  { n: "01", t: "Idea", d: "Pressure-test your problem with mentors and peers. Sharpen the wedge." },
  { n: "02", t: "Build", d: "Weekly building sprints. Workshops on shipping, scoping, and saying no." },
  { n: "03", t: "Launch", d: "Get it out the door. First 100 users, real feedback, real lessons." },
  { n: "04", t: "Iterate", d: "Measure, talk to users, ship again. The loop that turns ideas into products." },
];

const MENTORS = [
  { name: "Aanya Rao", role: "Product Lead, Razorpay" },
  { name: "Karan Mehta", role: "Founder, Stealth" },
  { name: "Priya S.", role: "Design Director, Swiggy" },
  { name: "Rohan Iyer", role: "Eng Manager, Stripe" },
  { name: "Tanvi Joshi", role: "GTM, Notion" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="paper-texture absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-16 lg:px-10 lg:pb-32 lg:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 animate-fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Pilot cohort · Applications open
              </span>
              <h1 className="mt-6 font-serif text-5xl leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                From idea to product.
                <br />
                <span className="italic text-primary">Together.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                I2P is a fellowship for students who'd rather build than enter another pitch competition. Real mentors. A real cohort. A real launch — to real users.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Apply to the pilot
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/programme"
                  className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-7 py-3.5 text-base font-medium text-foreground hover:bg-muted"
                >
                  See how it works
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-secondary" />12-week cohort</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />Hybrid format</div>
                <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />For student builders</div>
              </div>
            </div>

            <div className="relative lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary/15 via-accent/20 to-secondary/15 shadow-xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.12_78/0.4),transparent_55%),radial-gradient(circle_at_70%_80%,oklch(0.62_0.14_38/0.35),transparent_55%)]" />
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border/60 bg-background/85 p-5 backdrop-blur">
                  <p className="font-serif text-sm italic text-muted-foreground">"Felt less like a programme and more like a small studio of friends shipping together."</p>
                  <p className="mt-2 text-xs font-medium text-foreground">— A future fellow, hopefully you</p>
                </div>
              </div>
              <div className="absolute -left-6 -top-6 hidden h-24 w-24 rotate-12 rounded-full border-2 border-dashed border-primary/40 lg:block" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-2xl">
          <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">What you get</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">Four things that change everything.</h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-serif text-xl">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Not a competition */}
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
                No leaderboards. No winners. No "demo day" theatre. Just a small group of student founders helping each other ship real things to real people — and getting honest feedback from people who've done it before.
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
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card p-7">
              <span className="font-serif text-5xl text-accent">{s.n}</span>
              <h3 className="mt-3 font-serif text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              {i < STEPS.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 hidden size-5 -translate-y-1/2 text-muted-foreground/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mentors strip */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-border bg-cream-deep p-10 lg:p-14">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Mentors</p>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Builders helping builders.</h2>
            </div>
            <Link to="/mentors" className="text-sm font-medium text-primary hover:underline">Meet the mentors →</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            {MENTORS.map((m) => (
              <div key={m.name} className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent font-serif text-sm font-medium text-primary-foreground">
                  {m.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="text-sm">
                  <p className="font-medium text-foreground">{m.name}</p>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-10">
        <Quote className="mx-auto size-8 text-accent" />
        <blockquote className="mt-6 font-serif text-3xl leading-tight italic text-foreground sm:text-4xl">
          "I built three things in college. I shipped <span className="underline-accent not-italic">none</span> of them. I2P is the programme I wish existed when I was 20."
        </blockquote>
        <p className="mt-6 text-sm text-muted-foreground">— Programme advisor</p>
      </section>

      {/* Events teaser */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Coming up</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight">Open events for the curious.</h2>
            <p className="mt-4 text-muted-foreground">Drop in before you apply. Meet the mentors, see the vibe.</p>
            <Link to="/events" className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all">
              All events <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-8 space-y-3">
            {[
              { date: "May 12", title: "Open House: meet the I2P pilot team", tag: "Online" },
              { date: "May 19", title: "Workshop · Talking to users without selling", tag: "Bangalore" },
              { date: "Jun 02", title: "Office hours with Aanya Rao (Razorpay)", tag: "Online" },
            ].map((e) => (
              <div key={e.title} className="group flex items-center gap-5 rounded-2xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-accent/30">
                  <Calendar className="size-4 text-foreground/60" />
                  <span className="mt-0.5 font-serif text-xs">{e.date}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{e.title}</p>
                  <p className="mt-0.5 text-xs uppercase tracking-wider text-muted-foreground">{e.tag}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-20 text-center text-primary-foreground sm:px-14 lg:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.78_0.12_78/0.3),transparent_50%),radial-gradient(circle_at_80%_80%,oklch(0.36_0.06_165/0.4),transparent_50%)]" />
          <div className="relative">
            <h2 className="mx-auto max-w-3xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Stop waiting for the perfect idea. Start with the one you have.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-primary-foreground/85">
              Applications for the pilot cohort close soon. Spots are limited — and that's the point.
            </p>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-base font-medium text-foreground shadow-md transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Apply to the pilot <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
