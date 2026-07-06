import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { GlowCard } from "@/components/site/GlowCard";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "Library, I2P Fellowship" },
      { name: "description", content: "Recordings of I2P masterclasses — real operators, real reps, on-demand." },
      { property: "og:title", content: "Library, I2P Fellowship" },
      { property: "og:description", content: "Recordings of I2P masterclasses — real operators, real reps, on-demand." },
    ],
  }),
  component: LibraryPage,
});

type Masterclass = {
  id: string;
  title: string;
  subtitle: string;
};

const MASTERCLASSES: Masterclass[] = [
  {
    id: "-Pnfmr80-PM",
    title: "Masterclass 01",
    subtitle: "Founders, feedback, and reps",
  },
  {
    id: "jBXzzJ6QyOc",
    title: "Masterclass 02",
    subtitle: "Shipping and shipping again",
  },
  {
    id: "UHpEOQjf6nk",
    title: "Masterclass 03",
    subtitle: "Product thinking in practice",
  },
  {
    id: "7M6dTnAQmcc",
    title: "Masterclass 04",
    subtitle: "Foundations for young builders",
  },
];

function VideoCard({ item, index }: { item: Masterclass; index: number }) {
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

function LibraryPage() {
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
            Library
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-4 font-serif text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Masterclass <span className="italic text-primary">recordings</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            Every masterclass we've run — mentors, operators and founders sharing their reps. Watch on-demand, whenever it clicks for you.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2">
          {MASTERCLASSES.map((item, i) => (
            <VideoCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
