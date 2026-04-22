import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Users } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentors — I2P Fellowship" },
      { name: "description", content: "Meet the operators, designers, engineers and founders mentoring the I2P Fellowship." },
      { property: "og:title", content: "Mentors — I2P Fellowship" },
      { property: "og:description", content: "The mentor bench behind I2P — being curated now." },
    ],
  }),
  component: MentorsPage,
});

function MentorsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-12 lg:px-10 lg:pt-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Mentors</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Builders <span className="italic underline-accent">helping</span> builders.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Our mentors are operators — people who've actually shipped, sold, designed and shaped products you've used.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24 pt-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2.5rem] border border-dashed border-primary/30 bg-cream-deep px-8 py-20 text-center sm:px-14 lg:py-24"
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Users className="size-7" />
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
            The bench is being <span className="italic text-primary">curated.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            We're hand-picking mentors who actually ship — operators, designers, engineers and founders. Check back soon to meet them.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:girlsleadingtech@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Mail className="size-4" /> Notify me
            </a>
            <a
              href="mailto:girlsleadingtech@gmail.com?subject=I'd%20like%20to%20mentor%20with%20I2P"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background px-7 py-3.5 text-sm font-medium text-foreground hover:bg-muted"
            >
              Mentor with us
            </a>
          </div>
        </motion.div>
      </section>
    </SiteLayout>
  );
}
