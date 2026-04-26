import { createFileRoute } from "@tanstack/react-router";
import { Heart, Compass, Users, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About, I2P Fellowship" },
      { name: "description", content: "The story, mission and people behind the Idea to Product Fellowship, a programme for student builders, not pitch competitors." },
      { property: "og:title", content: "About, I2P Fellowship" },
      { property: "og:description", content: "Why we're building a fellowship that's not a competition, and who it's for." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Heart, t: "Generosity by default", d: "We share knowledge, intros and time. The whole cohort wins together." },
  { icon: Compass, t: "Build, don't pitch", d: "Slides don't ship. Working products do." },
  { icon: Users, t: "Small on purpose", d: "Tiny cohorts so everyone gets real attention." },
  { icon: Sparkles, t: "Curiosity over credentials", d: "We pick people, not résumés." },
];


function AboutPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 lg:px-10 lg:pt-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">About I2P</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          We started I2P because <span className="italic underline-accent">the world has enough</span> pitch competitions.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Most student "innovation" programmes optimise for the wrong thing, slides, not shipped software; trophies, not users. I2P is a quiet pushback. A small, warm, focused space where students take an idea, build it, launch it, and learn from real people using it.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 rounded-[2rem] border border-border bg-card p-10 lg:grid-cols-2 lg:p-16">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">Our mission</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Help student founders ship their first real product to real users, with the mentorship, structure and community that's almost impossible to assemble alone.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">What makes us different</h2>
            <ul className="mt-4 space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> No leaderboards, no winners, no demo-day theatre.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Mentors who've actually shipped, not just advised.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Tiny cohorts so the room stays human.</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Outcomes measured in users and learnings, not awards.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <h2 className="font-serif text-4xl sm:text-5xl">What we believe.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.t} className="rounded-3xl border border-border bg-card p-7">
              <v.icon className="size-6 text-primary" />
              <h3 className="mt-4 font-serif text-xl">{v.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Who it's for</p>
            <h2 className="mt-3 font-serif text-4xl sm:text-5xl">The kind of person we built this for.</h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground">
            <p>You're a student (undergrad or postgrad) with an idea that won't leave you alone.</p>
            <p>You can give the programme ~10 hours a week for 12 weeks.</p>
            <p>You'd rather build something tiny and real than something big and imaginary.</p>
            <p>You're kind. You give feedback as generously as you take it.</p>
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
        <h2 className="font-serif text-4xl sm:text-5xl">Sound like your kind of room?</h2>
        <p className="mt-4 text-muted-foreground">Get in touch at <a href="mailto:girlsleadingtech@gmail.com" className="text-primary hover:underline">girlsleadingtech@gmail.com</a>.</p>
      </section>
    </SiteLayout>
  );
}
