import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, MapPin, Phone, Download, ArrowUpRight } from "lucide-react";
import { ExternalLink } from "@/components/external-link";
import { nav } from "@/data/nav";
import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-accent text-accent-foreground">
      <div className="blueprint-grid-dark absolute inset-0 opacity-60" />
      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-accent-foreground/10 py-12 md:flex-row md:items-center">
          <h2 className="section-title max-w-xl text-3xl md:text-4xl">
            Let's build something <span className="text-gradient">precise.</span>
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-primary px-7 py-4 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center bg-primary font-display text-lg font-bold">
                AS
              </span>
              <span className="font-display text-xl font-bold uppercase tracking-wide">
                Ankit Sharma
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-accent-foreground/70">
              AutoCAD Draftsman and SolidWorks CAD Modeler preparing accurate 2D production drawings
              and 3D part models. Open to drafting roles in India and the GCC region.
            </p>
            <a
              href={profile.resume}
              download
              className="mt-6 inline-flex items-center gap-2 border border-accent-foreground/25 px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em]">Navigate</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {nav.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-accent-foreground/70 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em]">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-accent-foreground/70">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${profile.email}`} className="break-all hover:text-primary">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={profile.phoneHref} className="hover:text-primary">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <ExternalLink href={profile.linkedin} className="hover:text-primary">
                  {profile.linkedinLabel}
                </ExternalLink>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-accent-foreground/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-5 text-xs text-accent-foreground/60">
          <p>© 2026 Ankit Sharma. All rights reserved.</p>
          <p className="uppercase tracking-[0.2em]">Drawn to scale · Built with care</p>
        </div>
      </div>
    </footer>
  );
}
