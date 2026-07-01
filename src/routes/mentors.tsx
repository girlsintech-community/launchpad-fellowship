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
    context:
      "Mannas Narang is a product engineer and entrepreneur passionate about building technology-driven solutions that solve real-world problems. With experience spanning software development, product engineering, and startup leadership, he has consistently demonstrated a strong ability to transform ideas into scalable products.\n\nCurrently serving as a Product Engineer II at Wander, Mannas works on developing and enhancing technology products that deliver impactful user experiences. Prior to this, he founded SerialBuilder and Bizspar, where he gained hands-on experience in entrepreneurship, product strategy, and business development, leading ventures from ideation to execution.\n\nHis professional journey also includes a research and development internship at the Indian Institute of Technology (IIT) Guwahati and freelance web development projects, where he collaborated with clients to design and build digital solutions tailored to diverse business needs. These experiences have strengthened his expertise in software engineering, product thinking, and rapid execution.\n\nKnown for his builder mindset and entrepreneurial drive, Mannas enjoys exploring emerging technologies, creating innovative products, and sharing insights from his startup and engineering journey. His work reflects a commitment to continuous learning, problem-solving, and leveraging technology to create meaningful impact.",
    gradient: "from-primary/25 via-accent/25 to-secondary/15",
    initials: "MN",
  },
  {
    name: "Varsha Agarwal",
    company: "WICCI – Women's Indian Chamber of Commerce and Industry",
    designation: "Karnataka State Vice President AI/ML Stream",
    linkedin: "https://www.linkedin.com/in/varsha-agarwal-change-maker/",
    context:
      "Varsha Agarwal is a seasoned technology and business leader with over two decades of experience building and scaling enterprise products, platforms, data ecosystems, and AI-driven solutions for global organizations. Throughout her career, she has led large-scale digital transformation initiatives, combining strategic vision with deep execution expertise across product management, engineering, data, and operations.\n\nHer leadership journey includes establishing high-impact Centers of Excellence (CoEs) at leading organizations such as Publicis Sapient and VMware. At VMware, she spearheaded the creation of an AI Innovation CoE, developing frameworks that enabled organizations to take AI initiatives from concept to production while ensuring governance, scalability, and cost accountability. She also led the development of enterprise-grade platforms spanning customer data, revenue systems, MarTech, analytics, and business-critical applications used daily by sales, marketing, executive, and employee communities.\n\nWith end-to-end ownership across product strategy, engineering, quality, DevOps, security, and operations, Varsha has successfully managed delivery portfolios exceeding $15 million and led engineering organizations of more than 70 professionals supporting multi-billion-dollar businesses. Her experience extends to direct P&L ownership and driving measurable business outcomes for global clients.\n\nSince 2024, Varsha has been focused on helping organizations unlock the value of AI through strategy development, use-case prioritization, data readiness, and AI-first product design. Her expertise includes agentic AI systems, RAG architectures, model and tool orchestration, human-in-the-loop workflows, observability, governance, and production-grade AI implementation.\n\nBeyond her corporate leadership, Varsha is deeply committed to advancing AI education and ecosystem development. She leads AI capability-building programs for enterprises and academic institutions across India, the UAE, and the UK. She also serves as the Karnataka State Vice President (AI/ML) at WICCI, advises emerging innovation initiatives, and is a sought-after speaker at industry forums including NASSCOM, Adobe Symposium, Rakuten, Red Hat, Global Women in Tech, and premier academic institutions.\n\nRecognized for her ability to bridge business strategy, technology innovation, and execution at scale, Varsha continues to empower organizations and professionals to successfully navigate the evolving AI landscape.",
    gradient: "from-accent/30 via-primary/15 to-secondary/20",
    initials: "VA",
  },
  {
    name: "Chirag DS",
    company: "Stealth",
    designation: "Founder",
    linkedin: "https://www.linkedin.com/in/chiraggds/",
    context:
      "Chirag is an entrepreneur, builder, and community-driven leader passionate about transforming ideas into impactful ventures. With a strong focus on innovation, business growth, and problem-solving, he has consistently demonstrated the ability to identify opportunities, develop strategic solutions, and create value for diverse stakeholders.\n\nThroughout his entrepreneurial journey, Chirag has worked at the intersection of leadership, technology, and community building, driving initiatives that foster collaboration, learning, and sustainable growth. His approach combines a deep understanding of market needs with a commitment to execution, enabling him to turn ambitious visions into tangible outcomes.\n\nKnown for his entrepreneurial mindset and dedication to empowering others, Chirag actively mentors aspiring professionals and founders, sharing insights on innovation, leadership, and building meaningful ventures. His work reflects a belief that entrepreneurship is not just about creating businesses, but about creating lasting impact.",
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
        <GlowCard className="rounded-[2rem]">
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-sm transition-all hover:border-primary/40 hover:shadow-xl sm:p-10">
            {/* Avatar area */}
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${mentor.gradient}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.78_0.12_78/0.35),transparent_55%),radial-gradient(circle_at_70%_80%,oklch(0.62_0.14_38/0.3),transparent_55%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-serif text-7xl font-medium text-foreground/80 sm:text-8xl">
                  {mentor.initials}
                </span>
              </div>
            </div>

            {/* Name & meta */}
            <div className="mt-6">
              <h3 className="font-serif text-2xl leading-tight text-foreground sm:text-3xl">
                {mentor.name}
              </h3>
              <p className="mt-1.5 text-sm font-medium text-primary">
                {mentor.designation}
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Briefcase className="size-3.5" />
                {mentor.company}
              </p>
            </div>

            {/* LinkedIn CTA */}
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground"
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
