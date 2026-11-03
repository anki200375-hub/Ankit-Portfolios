import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import banner from "@/assets/blueprint-hero.jpg";

export function PageBanner({
  title,
  crumb,
  subtitle,
}: {
  title: string;
  crumb: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-accent">
      <img
        src={banner}
        alt=""
        width={1920}
        height={900}
        className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-luminosity"
      />
      <div className="blueprint-grid-dark absolute inset-0" />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute -bottom-40 -left-24 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent-foreground/60">
          <Link to="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-primary">{crumb}</span>
        </p>
        <h1 className="section-title mt-5 text-5xl text-accent-foreground md:text-7xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-accent-foreground/70 md:text-lg">
            {subtitle}
          </p>
        )}
        <div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-accent-foreground/40">
          <span className="h-px w-16 bg-primary" />
          Drawing No. AS-{crumb.slice(0, 3).toUpperCase()}-001
        </div>
      </div>
    </section>
  );
}
