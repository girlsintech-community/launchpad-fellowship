import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlowCard } from "@/components/site/GlowCard";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials, I2P Fellowship" },
      { name: "description", content: "Fellows share their I2P Fellowship experience in their own words." },
      { property: "og:title", content: "Testimonials, I2P Fellowship" },
      { property: "og:description", content: "Fellows share their I2P Fellowship experience in their own words." },
    ],
  }),
  component: TestimonialsPage,
});

type Testimonial = {
  id: string;
  title: string;
  subtitle: string;
};

const TESTIMONIALS: Testimonial[] = [
  { id: "p6Db6t8wjcQ", title: "Fellow interview 01", subtitle: "In their own words" },
  { id: "Ia1dJsR4R1k", title: "Fellow interview 02", subtitle: "In their own words" },
  { id: "MzIkUVFxB3M", title: "Fellow interview 03", subtitle: "In their own words" },
  { id: "D7JzcDryV_I", title: "Fellow interview 04", subtitle: "In their own words" },
  { id: "tD39xnYjgDY", title: "Fellow interview 05", subtitle: "In their own words" },
];

function VideoCard({ item, index }: { item: Testimonial; index: number }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://i.ytimg.com/vi/${item.id}/maxresdefault.jpg`;
  const fallback = `https://i.ytimg.com/vi/${item.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
    >
      <GlowCard className="rounded-[1.75rem]">
        <div className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all hover:border-primary/40 hover:shadow-xl">
          <div className="relative aspect-video w-full bg-muted">
            {playing ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${item.id}?autoplay=1&rel=0`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${item.title}`}
                className="group absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={thumb}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = fallback;
                  }}
                  alt={item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="relative flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:size-20">
                  <Play className="size-7 translate-x-0.5 fill-current sm:size-9" />
                </span>
              </button>
            )}
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-serif text-xs uppercase tracking-[0.2em] text-primary">
              {item.title}
            </p>
            <h3 className="mt-2 font-serif text-xl leading-tight text-foreground sm:text-2xl">
              {item.subtitle}
            </h3>
            <a
              href={`https://youtu.be/${item.id}`}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Youtube className="size-4" /> Watch on YouTube
            </a>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

function TestimonialsPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="paper-texture absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-20 lg:px-10 lg:pt-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-sm uppercase tracking-[0.22em] text-primary"
          >
            Testimonials
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Fellows, <span className="italic text-primary">in their own words</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Short interviews with I2P fellows on what they built, what broke, and what changed.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {TESTIMONIALS.map((item, i) => (
            <VideoCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-28 lg:px-10">
        <div className="mb-10">
          <p className="font-serif text-sm uppercase tracking-[0.22em] text-primary">Written notes</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-4xl">Fellows on what they took away.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <figure className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <blockquote className="font-serif text-lg leading-relaxed italic text-foreground">
              "My biggest takeaway from this fellowship was gaining the confidence to put myself and my ideas out there. The overall experience was amazing, but meeting new people and being exposed to fresh perspectives was honestly the best part."
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-medium text-foreground">Tia Sharma</span>
              <span className="text-muted-foreground"> · Fellow</span>
            </figcaption>
          </figure>
          <figure className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <blockquote className="font-serif text-lg leading-relaxed italic text-foreground">
              "I learned how to turn an idea into a user-focused product through expert mentorship and practical guidance."
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-medium text-foreground">Samriddhi Dua</span>
              <span className="text-muted-foreground"> · Fellow</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </SiteLayout>
  );
}
