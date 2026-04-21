
# I2P Fellowship — Premium Marketing Website

A warm, human, community-driven marketing site for the Idea to Product (I2P) Fellowship pilot — designed to attract students, build trust, and clearly explain the programme.

## Design direction
- **Aesthetic**: Warm & human — soft cream/off-white backgrounds, earthy accent palette (terracotta, deep forest, muted gold), gentle rounded shapes, generous whitespace.
- **Typography**: Editorial serif headings (e.g. Fraunces / Instrument Serif) paired with a clean humanist sans (Inter) for body — premium magazine feel.
- **Motion**: Subtle scroll-triggered fades, gentle hover lifts, soft parallax on hero imagery — refined, never flashy.
- **Imagery**: Real-feeling placeholder photos of students collaborating, sketching, prototyping. Hand-drawn underlines and small illustrative accents to reinforce the "human" feel.

## Pages & structure

**1. Home (`/`)**
- Hero: Bold serif headline ("From idea to product. Together."), supportive subline, primary CTA (Apply / Learn more), secondary CTA (Watch how it works).
- Value pillars: 3–4 cards — Mentorship, Community, Real launch, Iterate with users.
- "Not a competition" section — a distinctive callout that reframes the programme's philosophy.
- How it works: 4-step visual journey (Idea → Build → Launch → Iterate).
- Mentor preview strip with avatars + logos.
- Testimonial / quote block (placeholder).
- Featured upcoming events teaser.
- Final CTA band.

**2. About (`/about`)**
- The story & mission behind I2P.
- What makes the pilot different (philosophy, no-competition ethos).
- Who it's for (eligibility, ideal participant).
- Team / organisers section.

**3. Programme (`/programme`)** *(How it works)*
- Detailed phase-by-phase breakdown with timeline visual.
- What participants get (mentorship hours, workshops, peer circles, launch support).
- Commitment & format (duration, weekly time, online/offline).
- FAQ accordion at the bottom.

**4. Mentors (`/mentors`)**
- Grid of mentor cards (photo, name, role, company, short bio).
- Filter chips by domain (Product, Design, Engineering, GTM, Fundraising) — visual only for now.
- Placeholder mentors with realistic profiles.

**5. Events (`/events`)**
- Upcoming events list with date chips, type tags (Workshop, Demo Day, Office Hours, Meetup), location/online indicator, short description.
- Past events section below.
- Visual timeline / calendar-style layout for the cohort schedule.

**6. Contact (`/contact`)**
- Friendly intro, email, social links.
- Simple contact form (frontend-only for now — non-functional, with note that backend can be wired up later).
- Location / partner institutions block.

## Global elements
- **Header**: Sticky, transparent-on-hero then solid; logo, nav links, prominent "Apply" button.
- **Footer**: Brand mark + tagline, nav columns, newsletter signup (UI only), social icons, fine print.
- **404 & error pages**: On-brand, warm, with helpful return links.
- **SEO**: Per-route `head()` with unique titles, descriptions, and og tags so every page is shareable independently.

## Out of scope (for now)
- No backend, no application form submission, no admin dashboard — pure marketing site. Backend (apply form + admin) can be added in a follow-up once the programme details are locked in.
- Past cohorts/showcase page deferred until the first batch wraps.

## Suggested next steps after launch
1. Wire the contact form and a real Apply form to Lovable Cloud.
2. Add a CMS-style mentor/events editor so you can update without code.
3. Add a Showcase page after the first cohort with real products & stories.
