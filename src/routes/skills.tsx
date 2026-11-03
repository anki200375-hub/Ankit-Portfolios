import { createFileRoute } from "@tanstack/react-router";
import { PenTool, Box, Building2, CheckCircle2, Award } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Reveal, SectionHeading } from "@/components/reveal";
import { certifications, skillGroups, software } from "@/data/profile";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Software — AutoCAD, SolidWorks, Revit | Ankit Sharma" },
      {
        name: "description",
        content:
          "Technical skills of Ankit Sharma: 2D production drafting, orthographic projection, 3D part modeling in SolidWorks, Revit architectural drafting and NX CAD basics.",
      },
      { property: "og:title", content: "Skills & Software — Ankit Sharma" },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

const groupIcons = [PenTool, Box, Building2];

function Skills() {
  return (
    <>
      <PageBanner
        title="Skills"
        crumb="Skills"
        subtitle="The drafting, modeling and software toolkit I use to take a part from sketch to production drawing."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading kicker="Software" title="Tools of the trade" />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {software.map((s, i) => (
            <Reveal key={s.name} delay={(i % 2) * 120}>
              <div className="panel lift bg-background p-7">
                <div className="flex items-center gap-5">
                  <Ring value={s.level} />
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-foreground">
                      {s.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{s.note}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="blueprint-grid border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading kicker="Technical skills" title="What I bring to a drawing office" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {skillGroups.map((g, i) => {
              const Icon = groupIcons[i] ?? PenTool;
              return (
                <Reveal key={g.title} delay={i * 120} className="h-full">
                  <div className="panel h-full bg-background p-8">
                    <div className="flex items-center gap-4">
                      <span className="grid h-12 w-12 place-items-center bg-primary">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </span>
                      <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                        {g.title}
                      </h3>
                    </div>
                    <ul className="mt-7 space-y-3">
                      {g.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading kicker="Verified" title="Certifications" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c} delay={(i % 2) * 100}>
              <div className="lift flex items-center gap-5 border border-border border-l-4 border-l-primary bg-card p-6">
                <Award className="h-8 w-8 shrink-0 text-primary" />
                <p className="font-medium text-card-foreground">{c}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function Ring({ value }: { value: number }) {
  const r = 30;
  const c = 2 * Math.PI * r;
  return (
    <div className="relative h-20 w-20 shrink-0">
      <svg viewBox="0 0 72 72" className="h-full w-full -rotate-90">
        <circle cx="36" cy="36" r={r} fill="none" stroke="var(--border)" strokeWidth="6" />
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-lg font-bold text-foreground">
        {value}%
      </span>
    </div>
  );
}
