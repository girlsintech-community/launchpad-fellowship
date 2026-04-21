import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MapPin, Globe, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — I2P Fellowship" },
      { name: "description", content: "Open houses, workshops, office hours and meetups from the I2P Fellowship pilot cohort." },
      { property: "og:title", content: "Events — I2P Fellowship" },
      { property: "og:description", content: "Drop in, learn, build. The full schedule of I2P open events." },
    ],
  }),
  component: EventsPage,
});

type EventItem = {
  date: { day: string; month: string };
  title: string;
  type: "Workshop" | "Open House" | "Office Hours" | "Meetup" | "Demo Day";
  location: string;
  online: boolean;
  description: string;
};

const UPCOMING: EventItem[] = [
  { date: { day: "12", month: "May" }, title: "Open House: meet the I2P pilot team", type: "Open House", location: "Online", online: true, description: "An hour with the team — what we're building, who it's for, and how to apply. Q&A throughout." },
  { date: { day: "19", month: "May" }, title: "Workshop · Talking to users without selling", type: "Workshop", location: "HSR, Bangalore", online: false, description: "A hands-on workshop with practising founders on running real user interviews — and what to do with what you hear." },
  { date: { day: "02", month: "Jun" }, title: "Office hours with Aanya Rao (Razorpay)", type: "Office Hours", location: "Online", online: true, description: "Drop-in 1:1s for student founders. Bring your hardest product question." },
  { date: { day: "15", month: "Jun" }, title: "Founders meetup — pre-cohort kickoff", type: "Meetup", location: "Koramangala, Bangalore", online: false, description: "Casual evening with the incoming cohort, mentors and friends of I2P. Snacks included." },
];

const PAST: EventItem[] = [
  { date: { day: "08", month: "Apr" }, title: "Info session for Tier-2 college builders", type: "Open House", location: "Online", online: true, description: "Recording available on request." },
  { date: { day: "22", month: "Mar" }, title: "Workshop · Shipping with AI tools", type: "Workshop", location: "Online", online: true, description: "Hands-on session on vibe-coding a v1 in a weekend." },
];

const TYPE_COLORS: Record<EventItem["type"], string> = {
  "Workshop": "bg-primary/10 text-primary",
  "Open House": "bg-accent/30 text-foreground/80",
  "Office Hours": "bg-secondary/15 text-secondary",
  "Meetup": "bg-gold/20 text-foreground/80",
  "Demo Day": "bg-primary text-primary-foreground",
};

function EventCard({ e, past = false }: { e: EventItem; past?: boolean }) {
  return (
    <div className={`group flex flex-col gap-5 rounded-3xl border border-border bg-card p-6 transition-all sm:flex-row sm:items-center sm:gap-7 ${past ? "opacity-70" : "hover:border-primary/40 hover:shadow-lg"}`}>
      <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-cream-deep">
        <span className="font-serif text-3xl leading-none">{e.date.day}</span>
        <span className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">{e.date.month}</span>
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-medium ${TYPE_COLORS[e.type]}`}>{e.type}</span>
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            {e.online ? <Globe className="size-3" /> : <MapPin className="size-3" />}
            {e.location}
          </span>
        </div>
        <h3 className="mt-2 font-serif text-xl">{e.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
      </div>
      {!past && (
        <button className="shrink-0 inline-flex items-center gap-1.5 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-foreground/90">
          RSVP <ArrowRight className="size-3.5" />
        </button>
      )}
    </div>
  );
}

function EventsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Events</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Drop in. <span className="italic">Look around.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Most of our events are open. Come meet the mentors, sit in on a workshop, or just see if the room feels right before you apply.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl sm:text-4xl">Upcoming</h2>
          <span className="text-sm text-muted-foreground">{UPCOMING.length} events</span>
        </div>
        <div className="mt-8 space-y-4">
          {UPCOMING.map((e) => <EventCard key={e.title} e={e} />)}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl">Past events</h2>
        <div className="mt-8 space-y-4">
          {PAST.map((e) => <EventCard key={e.title} e={e} past />)}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <div className="rounded-[2rem] border border-border bg-cream-deep p-10 text-center lg:p-14">
          <h2 className="font-serif text-3xl sm:text-4xl">Get the next event in your inbox.</h2>
          <p className="mt-3 text-muted-foreground">No spam. Just a note when something good is coming up.</p>
          <form className="mx-auto mt-7 flex max-w-md gap-2">
            <input type="email" placeholder="your@email.com" className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
            <button type="button" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:-translate-y-0.5 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
