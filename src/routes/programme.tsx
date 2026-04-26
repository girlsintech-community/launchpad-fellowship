import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      { title: "Programme, How I2P Fellowship works" },
      { name: "description", content: "A 12-week phase-by-phase breakdown of the I2P Fellowship, what you'll do, what you get, and what we expect." },
      { property: "og:title", content: "Programme, How I2P Fellowship works" },
      { property: "og:description", content: "Idea → Build → Launch → Iterate. Twelve weeks. One real product." },
    ],
  }),
  component: ProgrammePage,
});

const PHASES = [
  {
    weeks: "Weeks 1–3",
    title: "Idea",
    body: "Sharpen the problem. Talk to 30 potential users. Define the wedge, the smallest, sharpest thing worth building first.",
    deliverable: "A one-page problem brief & a v0 spec.",
  },
  {
    weeks: "Weeks 4–7",
    title: "Build",
    body: "Weekly building sprints. Pair-programming sessions. Workshops on scoping, shipping fast, and saying no.",
    deliverable: "A working v1 in the hands of 10 friendly users.",
  },
  {
    weeks: "Weeks 8–10",
    title: "Launch",
    body: "Real launch. Public posts, communities, cold DMs that don't suck. First 100 real users, and what they actually do.",
    deliverable: "A live product with a real user base.",
  },
  {
    weeks: "Weeks 11–12",
    title: "Iterate",
    body: "Measure. Talk to users. Ship again. Decide what's next, keep going, pivot, or open-source it.",
    deliverable: "A founder's story you'll be proud to tell.",
  },
];

const PERKS = [
  "Weekly mentorship sessions with matched senior mentors",
  "Weekly cohort sessions · build sprints + show-and-tell",
  "A small community Slack / Discord, kept tiny on purpose",
  "Launch support · review, copy, channels, intros",
];

const FAQS = [
  { q: "How much does it cost?", a: "The pilot cohort is free for accepted students. Long-term we'll keep it accessible, no one will be priced out." },
  { q: "Is it online or in person?", a: "It's completely virtual. All sessions, mentorship and the closing showcase happen online so fellows from anywhere in the world can take part." },
  { q: "Do I need a co-founder or a team?", a: "Nope. You can apply solo or as a pair. Many fellows find their co-founders inside the cohort." },
  { q: "Do I need to know how to code?", a: "Helpful but not required. We'll lean on no-code, vibe-coding tools and AI to help non-technical builders ship." },
  { q: "Do you take equity?", a: "No. We don't take equity, fees or IP. The product is 100% yours." },
  { q: "How many fellows per cohort?", a: "The pilot is intentionally small, around 15 fellows. We'd rather go deep than wide." },
];

function ProgrammePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">The programme</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Twelve weeks. One real product. <span className="italic">Forever changed.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          A focused, phase-by-phase journey from "I have an idea" to "I have users", with the mentors, structure and peers to make it actually happen.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="space-y-5">
          {PHASES.map((p, i) => (
            <div key={p.title} className="grid gap-6 rounded-[2rem] border border-border bg-card p-8 lg:grid-cols-12 lg:gap-10 lg:p-12">
              <div className="lg:col-span-3">
                <span className="font-serif text-6xl text-accent">0{i + 1}</span>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.weeks}</p>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-serif text-3xl sm:text-4xl">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
              <div className="lg:col-span-3">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Outcome</p>
                <p className="mt-2 font-serif italic text-foreground">{p.deliverable}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">What you get</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Everything you need to ship.</h2>
            <p className="mt-4 text-muted-foreground">No fluff. No filler. Just the things that move the needle.</p>
          </div>
          <ul className="lg:col-span-7 grid gap-3 sm:grid-cols-1">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-4 rounded-2xl border border-border bg-card px-5 py-4">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">✓</span>
                <span className="text-foreground/90">{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="rounded-[2.5rem] bg-secondary px-8 py-14 text-secondary-foreground lg:p-16">
          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">Format</p>
              <h3 className="mt-3 font-serif text-2xl">Fully virtual</h3>
              <p className="mt-2 text-secondary-foreground/80">Weekly online sessions, mentorship and a closing showcase, open to fellows from any city or country.</p>
            </div>
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">Time</p>
              <h3 className="mt-3 font-serif text-2xl">~10 hours / week</h3>
              <p className="mt-2 text-secondary-foreground/80">Designed to fit alongside coursework. Most fellows do more, because they want to.</p>
            </div>
            <div>
              <p className="font-serif text-sm uppercase tracking-[0.2em] text-accent">Duration</p>
              <h3 className="mt-3 font-serif text-2xl">12 weeks</h3>
              <p className="mt-2 text-secondary-foreground/80">Long enough to ship something real. Short enough to keep momentum.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-10">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Questions</p>
        <h2 className="mt-3 font-serif text-4xl sm:text-5xl">Frequently asked.</h2>
        <Accordion type="single" collapsible className="mt-10">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left font-serif text-lg">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 text-center lg:px-10">
        <h2 className="font-serif text-4xl sm:text-5xl">Ready to build something real?</h2>
        <p className="mt-4 text-muted-foreground">Questions? Reach us at <a href="mailto:girlsleadingtech@gmail.com" className="text-primary hover:underline">girlsleadingtech@gmail.com</a>.</p>
      </section>
    </SiteLayout>
  );
}
