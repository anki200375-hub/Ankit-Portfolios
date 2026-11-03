import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap, MapPin, Download } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Reveal, SectionHeading } from "@/components/reveal";
import { education, experience, profile } from "@/data/profile";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience & Education | Ankit Sharma" },
      {
        name: "description",
        content:
          "Ankit Sharma's experience: CAD Engineer & Mechanical Modeler at Techcadd, Mechanical CAD Engineer at PG Tech Solutions, assembly internship at Sonalika Industries; B.E. and M.E. in Mechanical Engineering.",
      },
      { property: "og:title", content: "Experience & Education — Ankit Sharma" },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

function Experience() {
  return (
    <>
      <PageBanner
        title="Experience"
        crumb="Experience"
        subtitle="From the tractor assembly line to the CAD office — hands-on roles in drafting, modeling and training."
      />

      <section className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <SectionHeading kicker="Professional record" title="Work experience" />

        <ol className="relative mt-16 space-y-12 before:absolute before:bottom-0 before:left-[19px] before:top-0 before:w-px before:bg-border md:before:left-1/2">
          {experience.map((e, i) => (
            <Reveal
              as="li"
              key={e.org}
              className={`relative grid gap-6 pl-14 md:grid-cols-2 md:gap-14 md:pl-0 ${i % 2 ? "md:[&>div:first-of-type]:order-2" : ""}`}
            >
              <span className="absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full bg-primary text-primary-foreground ring-8 ring-background md:left-1/2 md:-translate-x-1/2">
                <Briefcase className="h-5 w-5" />
              </span>
              <div className={i % 2 ? "md:pl-10" : "md:pr-10 md:text-right"}>
                <p className="label-mono">{e.period}</p>
                <p
                  className={`mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground ${i % 2 ? "" : "md:flex-row-reverse"}`}
                >
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {e.place}
                </p>
                {e.current && (
                  <p className="mt-3">
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-600">
                      Current role
                    </span>
                  </p>
                )}
              </div>
              <div className={i % 2 ? "md:pr-10" : "md:pl-10"}>
                <div className="panel lift bg-background p-7">
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-primary">{e.org}</p>
                  <ul className="mt-5 space-y-2.5">
                    {e.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="blueprint-grid border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading kicker="Academics" title="Education" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {education.map((ed, i) => (
              <Reveal key={ed.degree} delay={i * 120} className="h-full">
                <div className="panel lift h-full bg-background p-7">
                  <GraduationCap className="h-9 w-9 text-primary" />
                  <p className="mt-5 text-xs uppercase tracking-[0.16em] text-primary">
                    {ed.period}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {ed.degree}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{ed.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <h2 className="section-title max-w-xl text-2xl text-primary-foreground md:text-3xl">
            Want the full picture? Grab my CV.
          </h2>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 bg-accent px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-all hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>
      </section>
    </>
  );
}
