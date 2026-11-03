import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Reveal, SectionHeading } from "@/components/reveal";
import { workItems, type WorkItem } from "@/data/work";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — CAD Drafting & 3D Modelling Samples | Ankit Sharma" },
      {
        name: "description",
        content:
          "Selected CAD work by Ankit Sharma: AutoCAD 2D detail drawings, SolidWorks 3D parts and assemblies, exploded views, jig & fixture concepts and Revit plans.",
      },
      { property: "og:title", content: "Portfolio — CAD Drafting & 3D Modelling Samples" },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const filters = ["All", ...Array.from(new Set(workItems.map((w) => w.category)))];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState<WorkItem | null>(null);
  const items = filter === "All" ? workItems : workItems.filter((w) => w.category === filter);

  return (
    <>
      <PageBanner
        title="Portfolio"
        crumb="Portfolio"
        subtitle="Drafting and modeling work across mechanical and architectural disciplines, prepared to standard projection and dimensioning practice."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading kicker="Work samples" title="Drawings, models & design studies" />

        <div className="mt-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "border px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.14em] transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:border-primary hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((w, i) => (
            <Reveal key={w.id} delay={(i % 3) * 100} as="article">
              <button
                type="button"
                onClick={() => setActive(w)}
                className="work-card lift group flex h-full w-full flex-col bg-background text-left"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={w.image}
                    alt={w.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-60 w-full object-cover"
                  />
                  <div className="absolute inset-0 grid place-items-center bg-accent/70 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="border border-accent-foreground/50 px-4 py-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
                      View details
                    </span>
                  </div>
                  <span className="absolute left-0 top-0 bg-primary px-3 py-1.5 font-display text-[11px] font-semibold uppercase tracking-[0.14em] text-primary-foreground">
                    {w.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-foreground">
                    {w.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {w.note}
                  </p>
                  <p className="mt-5 border-t border-border pt-4 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Tool — <span className="text-primary">{w.tool}</span>
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="animate-in fade-in fixed inset-0 z-[60] grid place-items-center bg-accent/85 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="animate-in zoom-in-95 relative max-h-[90vh] w-full max-w-4xl overflow-auto bg-background shadow-2xl"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 z-10 grid h-10 w-10 place-items-center bg-accent text-accent-foreground hover:bg-primary"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={active.image}
              alt={active.alt}
              className="max-h-[60vh] w-full object-contain bg-card"
            />
            <div className="p-7">
              <p className="label-mono">{active.category}</p>
              <h3 className="mt-2 font-display text-2xl font-bold uppercase tracking-wide text-foreground">
                {active.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{active.note}</p>
              <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Tool — <span className="text-primary">{active.tool}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
