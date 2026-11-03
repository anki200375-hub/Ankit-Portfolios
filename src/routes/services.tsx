import { createFileRoute, Link } from "@tanstack/react-router";
import { Ruler, Box, Layers, Wrench, Building2, FileCheck2, ArrowRight } from "lucide-react";
import { PageBanner } from "@/components/page-banner";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "CAD Services — Drafting, 3D Modelling & Fixture Design | Ankit Sharma" },
      {
        name: "description",
        content:
          "CAD services from Ankit Sharma: 2D production drafting, SolidWorks 3D part and assembly modelling, jig & fixture concepts, Revit civil sheets and PDF-to-CAD conversion.",
      },
      { property: "og:title", content: "CAD Services — Drafting, 3D Modelling & Fixture Design" },
      {
        property: "og:description",
        content:
          "2D drafting, 3D modelling, fixture design, Revit civil sheets and drawing conversion.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  {
    icon: Ruler,
    title: "2D Production Drafting",
    body: "Detail and assembly sheets drawn to third-angle projection with complete dimensioning, hole tables, surface finish and general tolerance notes.",
    points: ["Detail & assembly sheets", "GD&T and fits", "Item tables and title blocks"],
  },
  {
    icon: Box,
    title: "3D Part Modelling",
    body: "Parametric SolidWorks models built with clean feature trees so revisions stay cheap, driven from sketches, prints or measured samples.",
    points: ["Parametric features", "Sheet metal parts", "Drawing extraction"],
  },
  {
    icon: Layers,
    title: "Assembly & Exploded Views",
    body: "Mated assemblies checked for interference, with exploded views and a bill of materials that assembly operators can follow on the floor.",
    points: ["Mates & interference checks", "Exploded views", "Bill of materials"],
  },
  {
    icon: Wrench,
    title: "Jig & Fixture Design",
    body: "Locating and clamping concepts for machining, welding and inspection operations, aimed at repeatability and quick load/unload.",
    points: ["Locating schemes", "Clamping layout", "Base plate detailing"],
  },
  {
    icon: Building2,
    title: "Civil Drafting in Revit",
    body: "Floor plans, elevations and layout sheets with wall types, openings, grid axes and dimension strings, issued to a consistent sheet standard.",
    points: ["Plans & elevations", "Grid and dimensioning", "Sheet set organisation"],
  },
  {
    icon: FileCheck2,
    title: "Drawing Conversion & Cleanup",
    body: "Scanned prints, PDFs and inherited files redrawn as accurate, layered, editable CAD with standardised text, linetypes and blocks.",
    points: ["PDF / paper to CAD", "Layer standardisation", "Legacy drawing rework"],
  },
];

const process = [
  ["01", "Inputs", "You share sketches, prints, PDFs, samples or a spec — whatever exists."],
  ["02", "Clarify", "I confirm scope, standards, units, tolerance policy and sheet format."],
  ["03", "Draft", "Modelling and drafting with a checkpoint file for your review mid-way."],
  ["04", "Deliver", "Final files in DWG, SLDPRT/SLDASM, RVT or PDF, plus revision notes."],
];

function Services() {
  return (
    <>
      <PageBanner
        title="Services"
        crumb="Services"
        subtitle="2D production drafting, 3D part modeling, fixture concepts and architectural drawings — delivered to standard."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="label-mono">Capabilities</p>
          <h2 className="section-title mt-4 text-3xl text-foreground md:text-4xl">
            What I can take off your desk
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="panel lift flex flex-col p-8">
              <s.icon className="h-9 w-9 text-primary" />
              <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-card-foreground">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">▸</span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="label-mono">How it runs</p>
            <h2 className="section-title mt-4 text-3xl text-foreground md:text-4xl">
              Working process
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {process.map(([code, title, body]) => (
              <div key={code} className="border-t-2 border-primary pt-5">
                <span className="font-display text-2xl font-bold text-primary">{code}</span>
                <h3 className="mt-2 font-display text-base font-bold uppercase tracking-wide text-card-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <h2 className="section-title max-w-xl text-2xl text-accent-foreground md:text-3xl">
            Tell me about your drawing package
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a quote <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
