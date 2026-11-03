import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gauge, Users, ArrowRight, Download, MapPin, Globe2 } from "lucide-react";
import portrait from "@/assets/ankit-portrait.jpg";
import { PageBanner } from "@/components/page-banner";
import { Reveal, SectionHeading } from "@/components/reveal";
import { profile } from "@/data/profile";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ankit Sharma, AutoCAD Draftsman" },
      {
        name: "description",
        content:
          "About Ankit Sharma: Mechanical Draftsman and SolidWorks CAD Modeler with a B.E. in Mechanical Engineering, pursuing an M.E., experienced in AutoCAD 2D drafting and 3D part modeling.",
      },
      { property: "og:title", content: "About — Ankit Sharma, AutoCAD Draftsman" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    icon: Target,
    title: "Accuracy first",
    body: "Every dimension, view and note is checked against projection and drafting standards.",
  },
  {
    icon: Eye,
    title: "Readable drawings",
    body: "Clear layouts that a machinist or fabricator can follow without asking questions.",
  },
  {
    icon: Gauge,
    title: "Speed with discipline",
    body: "Fast drafting built on clean layers, blocks and well-defined sketches.",
  },
  {
    icon: Users,
    title: "Teacher's clarity",
    body: "Years of explaining CAD to students means I communicate design intent clearly.",
  },
];

const facts = [
  ["Name", profile.name],
  ["Role", "AutoCAD / Mechanical Draftsman"],
  ["Degree", "B.E. Mechanical Engineering"],
  ["Studying", "M.E. Mechanical (2025 — 2027)"],
  ["Location", profile.location],
  ["Seeking", "Drafting roles · India & GCC"],
];

const journey = [
  ["2021", "Started B.E. in Mechanical Engineering at Bahra University."],
  ["2025", "Six-month internship in the assembly department at Sonalika Industries (ICML)."],
  ["2025", "Graduated and began M.E.; joined PG Tech Solutions as Mechanical CAD Engineer."],
  ["2026", "Joined Techcadd as CAD Engineer & Mechanical Modeler."],
];

function About() {
  return (
    <>
      <PageBanner
        title="About Me"
        crumb="About"
        subtitle="Mechanical Draftsman and CAD Modeler who turns sketches and reference images into accurate, manufacturable drawings."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-3 border border-primary/50" aria-hidden="true" />
            <div
              className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary/15"
              aria-hidden="true"
            />
            <img
              src={portrait}
              alt="Portrait of Ankit Sharma"
              width={888}
              height={1184}
              className="relative aspect-[3/4] w-full object-cover object-[50%_20%] shadow-xl"
            />
            <div className="absolute -left-6 bottom-10 bg-accent px-5 py-4 text-accent-foreground shadow-xl">
              <p className="font-display text-3xl font-bold text-primary">B.E.</p>
              <p className="text-[11px] uppercase tracking-widest text-accent-foreground/70">
                Mechanical
              </p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              kicker="Who I am"
              title={
                <>
                  Hi, I'm Ankit — I draw <span className="text-gradient">what gets built.</span>
                </>
              }
            />
            <Reveal
              delay={120}
              className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground"
            >
              <p>
                I'm a Mechanical Draftsman and CAD Modeler with hands-on experience in AutoCAD 2D
                drafting and SolidWorks 3D part modeling. Since September 2025 I've worked in CAD
                engineer and modeler roles, preparing 2D technical drawings and layouts for
                manufacturing, converting 2D sketches and reference images into 3D models, and
                generating standard drawing views.
              </p>
              <p>
                My time on the shop floor at Sonalika Industries — in the weld shop, paint shop and
                final assembly line — showed me how drawings become real parts. That's why I care
                about drawings that are clear, complete and easy to manufacture from.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <dl className="mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
                {facts.map(([k, v]) => (
                  <div key={k} className="bg-background p-4">
                    <dt className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={260} className="mt-10 flex flex-wrap gap-4">
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-border px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Contact me <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="blueprint-grid border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading kicker="How I work" title="Principles behind every drawing" center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="h-full">
                <div className="panel lift h-full bg-background p-7 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/10">
                    <v.icon className="h-7 w-7 text-primary" />
                  </span>
                  <h3 className="mt-5 font-display text-base font-bold uppercase tracking-wide text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading kicker="Journey" title="Milestones so far" />
        <ol className="relative mt-14 grid gap-10 md:grid-cols-4">
          <span
            className="absolute left-0 right-0 top-[11px] hidden h-px bg-border md:block"
            aria-hidden="true"
          />
          {journey.map(([year, text], i) => (
            <Reveal as="li" key={text} delay={i * 120} className="relative">
              <span className="relative z-10 block h-6 w-6 rounded-full border-4 border-background bg-primary ring-2 ring-primary/30" />
              <p className="mt-5 font-display text-3xl font-bold text-primary">{year}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-accent">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-2">
          <Reveal className="glass flex items-start gap-5 p-7 text-accent-foreground">
            <MapPin className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                Based in Himachal Pradesh
              </h3>
              <p className="mt-2 text-sm text-accent-foreground/70">
                Working from Hamirpur and Punjab, available for on-site and remote drafting work.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="glass flex items-start gap-5 p-7 text-accent-foreground">
            <Globe2 className="h-8 w-8 shrink-0 text-primary" />
            <div>
              <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                Ready for the GCC
              </h3>
              <p className="mt-2 text-sm text-accent-foreground/70">
                Actively seeking AutoCAD Draftsman and mechanical drafting opportunities in the GCC
                region.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
