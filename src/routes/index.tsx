import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Ruler,
  Box,
  Layers,
  Building2,
  FileCheck2,
  ArrowRight,
  Download,
  CheckCircle2,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import portrait from "@/assets/ankit-portrait.jpg";
import { workItems } from "@/data/work";
import { experience, profile } from "@/data/profile";
import { Reveal, SectionHeading } from "@/components/reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ankit Sharma — AutoCAD Draftsman & SolidWorks CAD Modeler" },
      {
        name: "description",
        content:
          "Ankit Sharma — AutoCAD Draftsman, Mechanical Draftsman and SolidWorks CAD Modeler preparing 2D production drawings and 3D part models. Open to drafting roles in India and the GCC.",
      },
      {
        property: "og:title",
        content: "Ankit Sharma — AutoCAD Draftsman & SolidWorks CAD Modeler",
      },
      {
        property: "og:description",
        content:
          "AutoCAD 2D drafting, SolidWorks 3D modeling and Revit drawings — built to manufacture.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  {
    icon: Ruler,
    title: "2D Production Drafting",
    body: "Mechanical detail and assembly drawings of machine parts, with full dimensions, views and title blocks, ready for manufacturing.",
  },
  {
    icon: Box,
    title: "3D Part Modeling",
    body: "SolidWorks parts — gears, brackets and components — built from sketches and reference images.",
  },
  {
    icon: Layers,
    title: "Drawing Views",
    body: "Standard Top, Front, Side and Isometric views prepared cleanly through 2D drafting.",
  },
  {
    icon: Building2,
    title: "Architectural Drafting",
    body: "Floor plans, space planning and 2D-to-3D architectural conversion in AutoCAD and Revit.",
  },
  {
    icon: FileCheck2,
    title: "Drawing Review",
    body: "Checking drawings against projection and dimensioning practice, and correcting design errors.",
  },
  {
    icon: GraduationCap,
    title: "CAD Training",
    body: "Hands-on AutoCAD and SolidWorks part modeling, plus Revit architecture modeling exercises.",
  },
];

const stats = [
  ["1+ yr", "Professional CAD roles"],
  ["6 mo", "Shop-floor internship"],
  ["50+", "Drawings prepared"],
  ["4", "CAD tools"],
];

const tools = [
  "AutoCAD 2D",
  "SolidWorks",
  "Autodesk Revit",
  "NX CAD",
  "Orthographic Projection",
  "GD&T Basics",
  "Drawing Views",
  "Layout Design",
  "Blueprint Reading",
  "3D Part Modeling",
];

function HeroDrawing() {
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 h-full w-full text-sky-200/40"
      fill="none"
      aria-hidden="true"
    >
      <circle
        cx="200"
        cy="200"
        r="150"
        stroke="currentColor"
        strokeWidth="1"
        className="animate-draw"
        style={{ ["--len" as string]: 950 }}
      />
      <circle
        cx="200"
        cy="200"
        r="110"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 6"
      />
      <circle
        cx="200"
        cy="200"
        r="40"
        stroke="var(--primary)"
        strokeWidth="2"
        className="animate-draw"
        style={{ ["--len" as string]: 260 }}
      />
      <path
        d="M200 20 V380 M20 200 H380"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="14 4 2 4"
      />
      <path
        d="M50 365 H350 M50 358 V372 M350 358 V372"
        stroke="var(--primary)"
        strokeWidth="1.2"
        className="animate-draw"
        style={{ ["--len" as string]: 330 }}
      />
      <text
        x="200"
        y="358"
        textAnchor="middle"
        fill="currentColor"
        fontSize="11"
        fontFamily="Barlow"
        letterSpacing="2"
      >
        Ø300
      </text>
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6;
        return (
          <circle
            key={i}
            cx={200 + 130 * Math.cos(a)}
            cy={200 + 130 * Math.sin(a)}
            r="6"
            stroke="currentColor"
            strokeWidth="1"
          />
        );
      })}
    </svg>
  );
}

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-accent">
        <div className="blueprint-grid-dark absolute inset-0" />
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-700">
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-accent-foreground/90">
              <span className="animate-pulse-ring h-2 w-2 rounded-full bg-emerald-400" />
              Open to opportunities · India & GCC
            </span>
            <h1 className="section-title mt-6 text-5xl text-accent-foreground md:text-7xl">
              Precision drawings, <span className="text-gradient">built to manufacture.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-accent-foreground/85 md:text-lg">
              I'm <strong className="text-accent-foreground">Ankit Sharma</strong> — an AutoCAD
              Draftsman and SolidWorks CAD Modeler. I turn sketches and reference images into
              accurate 2D production drawings and 3D part models.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5"
              >
                View Portfolio{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 border border-accent-foreground/30 px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-accent-foreground/80">
              {["B.E. Mechanical", "M.E. (Pursuing)", "ISO-certified CAD"].map((t) => (
                <li key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md">
            <HeroDrawing />
            <div className="absolute inset-[18%] overflow-hidden rounded-full border-4 border-accent shadow-2xl ring-2 ring-primary/60">
              <img
                src={portrait}
                alt="Ankit Sharma, AutoCAD draftsman"
                width={888}
                height={1184}
                className="h-full w-full object-cover object-[50%_20%]"
              />
            </div>
            <div className="glass animate-float absolute left-0 top-[12%] rounded-lg px-4 py-3 text-accent-foreground">
              <p className="font-display text-2xl font-bold text-primary">2D</p>
              <p className="text-[11px] uppercase tracking-widest text-accent-foreground/80">
                AutoCAD
              </p>
            </div>
            <div
              className="glass animate-float absolute bottom-[10%] right-0 rounded-lg px-4 py-3 text-accent-foreground"
              style={{ animationDelay: "1.5s" }}
            >
              <p className="font-display text-2xl font-bold text-primary">3D</p>
              <p className="text-[11px] uppercase tracking-widest text-accent-foreground/80">
                SolidWorks
              </p>
            </div>
          </div>
        </div>

        {/* Tool marquee */}
        <div className="relative border-t border-accent-foreground/10 bg-accent/60 py-4">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[...tools, ...tools].map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-10 font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground/50"
              >
                {t} <span className="text-primary">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto -mt-px max-w-6xl px-6">
        <dl className="panel -mt-0 grid grid-cols-2 divide-border bg-background md:-mt-10 md:grid-cols-4 md:divide-x">
          {stats.map(([value, label], i) => (
            <Reveal key={label} delay={i * 100} className="p-6 text-center md:p-8">
              <dt className="font-display text-4xl font-bold text-primary md:text-5xl">{value}</dt>
              <dd className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {label}
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      {/* About */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <SectionHeading
            kicker="About me"
            title={
              <>
                A drafting-first approach to{" "}
                <span className="text-gradient">mechanical design</span>
              </>
            }
          />
          <Reveal delay={150} className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Mechanical Draftsman and CAD Modeler with hands-on experience in AutoCAD 2D drafting
              and SolidWorks 3D part modeling, gained through CAD engineer and modeler roles since
              September 2025.
            </p>
            <p>
              Strong grounding in orthographic projection (first and third angle) and technical
              drawing interpretation, backed by six months on a tractor assembly line at Sonalika
              Industries.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 pt-2 font-display text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
            >
              More about me <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="blueprint-grid border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading kicker="What I do" title="Capabilities" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 120} as="article" className="h-full">
                <div className="panel lift group relative h-full overflow-hidden bg-background p-8">
                  <span className="absolute right-6 top-6 font-display text-5xl font-bold text-foreground/5">
                    0{i + 1}
                  </span>
                  <span className="grid h-14 w-14 place-items-center bg-primary/10 transition-colors group-hover:bg-primary">
                    <s.icon className="h-7 w-7 text-primary transition-colors group-hover:text-primary-foreground" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wide text-card-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            to="/services"
            className="mt-12 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
          >
            All services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading kicker="Selected work" title="Recent drawings" />
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
          >
            Full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.slice(0, 3).map((w, i) => (
            <Reveal key={w.id} delay={i * 120} as="article">
              <Link to="/portfolio" className="work-card group block">
                <img
                  src={w.image}
                  alt={w.alt}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent via-accent/40 to-transparent opacity-90" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="label-mono text-[11px]">{w.category}</p>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide text-accent-foreground">
                    {w.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience snapshot */}
      <section className="bg-accent">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading kicker="Career" title="Where I've worked" light />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {experience.map((e, i) => (
              <Reveal key={e.org} delay={i * 120}>
                <div className="glass lift h-full p-7 text-accent-foreground">
                  <div className="flex items-center justify-between">
                    <Briefcase className="h-6 w-6 text-primary" />
                    {e.current && (
                      <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-accent-foreground/60">
                    {e.period}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide">
                    {e.role}
                  </h3>
                  <p className="mt-1 text-sm text-primary">{e.org}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link
            to="/experience"
            className="mt-12 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-primary hover:underline"
          >
            Full experience <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
