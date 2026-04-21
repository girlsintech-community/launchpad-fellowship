import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentors — I2P Fellowship" },
      { name: "description", content: "Meet the operators, designers, engineers and founders mentoring the I2P pilot cohort." },
      { property: "og:title", content: "Mentors — I2P Fellowship" },
      { property: "og:description", content: "Builders helping builders. The mentor bench behind the I2P pilot." },
    ],
  }),
  component: MentorsPage,
});

type Domain = "All" | "Product" | "Design" | "Engineering" | "GTM" | "Fundraising";

const DOMAINS: Domain[] = ["All", "Product", "Design", "Engineering", "GTM", "Fundraising"];

const MENTORS: { name: string; role: string; company: string; domain: Exclude<Domain, "All">; bio: string }[] = [
  { name: "Aanya Rao", role: "Product Lead", company: "Razorpay", domain: "Product", bio: "Shipped payments products used by millions of small businesses. Loves obsessing over onboarding flows." },
  { name: "Karan Mehta", role: "Founder", company: "Stealth", domain: "Product", bio: "Two-time founder. One exit, one healthy crash. Will tell you the truth, kindly." },
  { name: "Priya Subramanian", role: "Design Director", company: "Swiggy", domain: "Design", bio: "Built design systems that scaled across hundreds of screens. Believes craft and speed aren't enemies." },
  { name: "Arjun Kapoor", role: "Staff Designer", company: "Notion", domain: "Design", bio: "Designed for tools used daily by knowledge workers worldwide. Obsessed with input affordances." },
  { name: "Rohan Iyer", role: "Eng Manager", company: "Stripe", domain: "Engineering", bio: "Backend systems at scale. Will help you ship messy v1s fast — then refactor with care." },
  { name: "Nikhil Sharma", role: "Founding Engineer", company: "Cred", domain: "Engineering", bio: "Built the core wallet stack from scratch. Loves vibe-coding with AI tools to ship in days." },
  { name: "Tanvi Joshi", role: "Head of GTM", company: "Notion", domain: "GTM", bio: "Took products from 0→1M users. Talks to every customer she can. Will teach you to do the same." },
  { name: "Dev Patel", role: "Marketing Lead", company: "Linear", domain: "GTM", bio: "Believes good marketing is just clear thinking, written down. No growth hacks here." },
  { name: "Maya Krishnan", role: "Investor", company: "Blume Ventures", domain: "Fundraising", bio: "Backs early-stage student founders. Will help you decide if you should raise — or not." },
  { name: "Vikram Sethi", role: "Angel Investor", company: "Independent", domain: "Fundraising", bio: "Wrote first checks into 30+ Indian SaaS companies. Practical advice, no theatre." },
];

function initials(name: string) {
  return name.split(" ").map((n) => n[0]).slice(0, 2).join("");
}

function MentorsPage() {
  const [filter, setFilter] = useState<Domain>("All");
  const filtered = filter === "All" ? MENTORS : MENTORS.filter((m) => m.domain === filter);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Mentors</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Builders <span className="italic underline-accent">helping</span> builders.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Our mentors are operators — people who've actually shipped, sold, designed and shaped products you've used. They're here to help you do the same.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-wrap gap-2">
          {DOMAINS.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-colors",
                filter === d
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground/75 hover:border-primary/40 hover:text-foreground",
              )}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <div key={m.name} className="group rounded-3xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent font-serif text-lg text-primary-foreground">
                  {initials(m.name)}
                </div>
                <div>
                  <h3 className="font-serif text-xl">{m.name}</h3>
                  <p className="text-xs text-muted-foreground">{m.role} · {m.company}</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              <span className="mt-5 inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium text-foreground/80">
                {m.domain}
              </span>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 text-center text-muted-foreground">No mentors in this domain yet — we're adding more weekly.</p>
        )}
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center lg:px-10">
        <h2 className="font-serif text-3xl sm:text-4xl">Want to mentor with I2P?</h2>
        <p className="mt-3 text-muted-foreground">We're always looking for thoughtful operators to join the bench.</p>
        <a href="mailto:mentors@i2pfellowship.org" className="mt-8 inline-flex items-center rounded-full border border-foreground/15 bg-background px-7 py-3.5 text-base font-medium text-foreground hover:bg-muted">
          Get in touch
        </a>
      </section>
    </SiteLayout>
  );
}
