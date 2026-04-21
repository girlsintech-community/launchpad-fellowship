import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Apply — I2P Fellowship" },
      { name: "description", content: "Apply to the I2P Fellowship pilot cohort or get in touch with the team." },
      { property: "og:title", content: "Contact & Apply — I2P Fellowship" },
      { property: "og:description", content: "Tell us about you, your idea, and what you'd like to build." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-8 lg:px-10 lg:pt-28">
        <p className="font-serif text-sm uppercase tracking-[0.2em] text-primary">Contact & Apply</p>
        <h1 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Tell us about <span className="italic underline-accent">you</span>.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Whether you're applying for the pilot, want to mentor, or just want to say hi — we'd love to hear from you.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="rounded-[2rem] border border-border bg-card p-8 lg:p-10"
            >
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Send className="size-7" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl">Thanks — we'll be in touch.</h3>
                  <p className="mt-2 text-muted-foreground">We read every message. Expect a reply within a few days.</p>
                </div>
              ) : (
                <>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name">
                      <input required className="form-input" placeholder="Aanya Rao" />
                    </Field>
                    <Field label="Email">
                      <input required type="email" className="form-input" placeholder="you@college.edu" />
                    </Field>
                  </div>
                  <Field label="College / University" className="mt-5">
                    <input className="form-input" placeholder="IIT, NID, Ashoka, anywhere…" />
                  </Field>
                  <Field label="I'm reaching out to…" className="mt-5">
                    <select className="form-input">
                      <option>Apply to the pilot cohort</option>
                      <option>Mentor with I2P</option>
                      <option>Partner / collaborate</option>
                      <option>Just say hi</option>
                    </select>
                  </Field>
                  <Field label="Tell us about your idea (or what you'd like to build)" className="mt-5">
                    <textarea required rows={5} className="form-input resize-none" placeholder="No need to be polished — just be real." />
                  </Field>

                  <button
                    type="submit"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    Send <Send className="size-4" />
                  </button>
                  <p className="mt-4 text-xs text-muted-foreground">
                    Note: this is a pilot site — submissions are saved locally for now. We'll wire up a real backend before applications close.
                  </p>
                </>
              )}
            </form>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border bg-cream-deep p-7">
              <Mail className="size-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl">Email</h3>
              <a href="mailto:hello@i2pfellowship.org" className="mt-1 block text-foreground hover:text-primary">hello@i2pfellowship.org</a>
              <p className="mt-1 text-sm text-muted-foreground">For mentors: mentors@i2pfellowship.org</p>
            </div>

            <div className="rounded-3xl border border-border bg-cream-deep p-7">
              <MapPin className="size-5 text-primary" />
              <h3 className="mt-3 font-serif text-xl">Where we are</h3>
              <p className="mt-1 text-foreground">Bangalore, India</p>
              <p className="mt-1 text-sm text-muted-foreground">Hybrid programme — open to students across India.</p>
            </div>

            <div className="rounded-3xl border border-border bg-secondary p-7 text-secondary-foreground">
              <h3 className="font-serif text-xl">Partner institutions</h3>
              <p className="mt-2 text-sm text-secondary-foreground/80">We work with student clubs, incubators and faculty across colleges to find builders. Want to bring I2P to your campus?</p>
              <a href="mailto:partners@i2pfellowship.org" className="mt-3 inline-block text-sm font-medium text-accent hover:underline">
                Become a partner →
              </a>
            </div>
          </aside>
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid var(--color-border);
          background: var(--color-background);
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent);
        }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, children, className = "" }: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  );
}
