import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Briefcase } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlowCard } from "@/components/site/GlowCard";
import mannasImg from "@/assets/mentors/mannas.webp";
import varshaImg from "@/assets/mentors/varsha.webp";
import chiragImg from "@/assets/mentors/chirag.webp";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentors, I2P Fellowship" },
      { name: "description", content: "Meet the operators, designers, engineers and founders mentoring the I2P Fellowship." },
      { property: "og:title", content: "Mentors, I2P Fellowship" },
      { property: "og:description", content: "The mentor bench behind I2P — operators who actually ship." },
    ],
  }),
  component: MentorsPage,
});

const MENTORS = [
  {
    name: "Mannas Narang",
    company: "Wander",
    designation: "Product Engineer",
    linkedin: "https://www.linkedin.com/in/mannasnarang/",
    image: mannasImg,
    context:
      "Mannas is a product engineer and entrepreneur who turns ideas into scalable products. Currently a Product Engineer II at Wander, he's building technology that ships to real users every day.\n\nBefore Wander, he founded SerialBuilder and Bizspar — leading both ventures from ideation to execution, and picking up the reps that only come from running your own thing. He's also spent time on R&D at IIT Guwahati and freelance web development, working with clients across a wide spread of industries.\n\nA builder at heart, Mannas loves exploring emerging tech, shipping fast, and sharing what he learns along the way with anyone trying to do the same.",
    gradient: "from-primary/25 via-accent/25 to-secondary/15",
    initials: "MN",
  },
  {
    name: "Varsha Agarwal",
    company: "WICCI",
    designation: "Karnataka State VP, AI/ML Stream",
    linkedin: "https://www.linkedin.com/in/varsha-agarwal-change-maker/",
    image: varshaImg,
    context:
      "Varsha is a technology and business leader with 20+ years scaling enterprise products, data platforms, and AI systems for global organizations. She's built high-impact Centers of Excellence at Publicis Sapient and VMware — including an AI Innovation CoE taking initiatives from concept to production with real governance.\n\nShe's owned end-to-end delivery across product, engineering, DevOps, security and operations — managing portfolios north of $15M and 70+ person engineering teams supporting multi-billion-dollar businesses.\n\nSince 2024 she's focused on helping organizations unlock AI value: agentic systems, RAG architectures, human-in-the-loop workflows and production-grade AI. She also leads AI capability programs across India, the UAE and the UK, and serves as Karnataka VP (AI/ML) at WICCI.",
    gradient: "from-accent/30 via-primary/15 to-secondary/20",
    initials: "VA",
  },
  {
    name: "Chirag DS",
    company: "Stealth",
    designation: "Founder",
    linkedin: "https://www.linkedin.com/in/chiraggds/",
    image: chiragImg,
    context:
      "Chirag is an entrepreneur, builder and community leader focused on turning ideas into ventures that actually ship. He works at the intersection of leadership, technology and community — driving initiatives that foster collaboration, learning and sustainable growth.\n\nHis approach pairs a sharp read on market needs with a real commitment to execution, which is what lets him take ambitious visions and turn them into tangible outcomes.\n\nBeyond his own work, Chirag actively mentors aspiring professionals and founders — sharing what he's learned about innovation, leadership and building things that last. For him, entrepreneurship isn't just about businesses; it's about impact.",
    gradient: "from-secondary/20 via-primary/20 to-accent/30",
    initials: "CD",
  },
];

function MentorCard({
  mentor,
  index,
  reverse,
}: {
  mentor: (typeof MENTORS)[number];
  index: number;
  reverse: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      {/* Card */}
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>
        <GlowCard className="rounded-[2rem] h-full">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-all hover:border-primary/40 hover:shadow-xl sm:p-8">
            {/* Photo */}
            <div
              className={`relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${mentor.gradient}`}
            >
              {mentor.image ? (
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-7xl font-medium text-foreground/80 sm:text-8xl">
                    {mentor.initials}
                  </span>
                </div>
              )}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Name & meta */}
            <div className="mt-5">
              <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                {mentor.name}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-primary">
                {mentor.designation}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Briefcase className="size-3.5 shrink-0" />
                <span className="truncate">{mentor.company}</span>
              </p>
            </div>

            {/* LinkedIn CTA */}
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-auto inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground pt-2.5"
              style={{ marginTop: "1.25rem" }}
            >
              <Linkedin className="size-4" />
              Connect on LinkedIn
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </GlowCard>
      </div>

      {/* Context / bio */}
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>
        <div className="relative">
          {/* Decorative quote mark */}
          <span
            className="absolute -left-2 -top-6 font-serif text-7xl leading-none text-primary/15 select-none sm:-top-8 sm:text-8xl"
            aria-hidden
          >
            &ldquo;
          </span>
          <div className="space-y-4 text-[15px] leading-[1.8] text-muted-foreground">
            {mentor.context.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MentorsPage() {
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
            Mentors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Builders <span className="italic text-primary">helping</span> builders.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Our mentors are operators, people who've actually shipped, sold, designed and shaped products you've used. They show up for our fellows — not just with advice, but with reps.
          </motion.p>
        </div>
      </section>

      {/* Mentor rows */}
      <section className="relative mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="space-y-24 lg:space-y-32">
          {MENTORS.map((mentor, i) => (
            <MentorCard
              key={mentor.name}
              mentor={mentor}
              index={i}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="overflow-hidden rounded-[2.5rem] bg-secondary px-8 py-16 text-secondary-foreground sm:px-14 lg:px-20 lg:py-20">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-serif text-sm uppercase tracking-[0.22em] text-accent">
                For mentors
              </p>
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
