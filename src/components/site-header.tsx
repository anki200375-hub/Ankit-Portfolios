import { Link } from "@tanstack/react-router";
import { Mail, Linkedin, Menu, X, Phone, Download, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ExternalLink } from "@/components/external-link";
import { nav } from "@/data/nav";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="dark-surface sticky top-0 z-50 text-accent-foreground">
      {/* Top info bar */}
      <div
        className={cn(
          "overflow-hidden border-b border-white/5 bg-[oklch(0.2_0.04_258)] transition-all duration-300",
          scrolled ? "max-h-0 border-transparent" : "max-h-12",
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-2 text-xs">
          <span className="inline-flex items-center gap-2 text-accent-foreground/80">
            <span className="animate-pulse-ring h-2 w-2 rounded-full bg-emerald-400" />
            Available for drafting roles · India & GCC
          </span>
          <div className="flex items-center gap-1">
            <a
              href={profile.phoneHref}
              className="hidden items-center gap-2 rounded-full px-3 py-1 text-accent-foreground/70 transition-colors hover:bg-white/5 hover:text-accent-foreground md:inline-flex"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              {profile.phone}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="hidden items-center gap-2 rounded-full px-3 py-1 text-accent-foreground/70 transition-colors hover:bg-white/5 hover:text-accent-foreground lg:inline-flex"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              {profile.email}
            </a>
            <ExternalLink
              href={profile.linkedin}
              aria-label="LinkedIn"
              className="grid h-7 w-7 place-items-center rounded-full bg-white/5 text-accent-foreground/80 transition-colors hover:bg-[#0a66c2] hover:text-white"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </ExternalLink>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "relative border-b border-white/10 backdrop-blur-xl transition-all duration-300",
          scrolled ? "bg-accent/90 shadow-[0_10px_30px_-12px_oklch(0_0_0/0.5)]" : "bg-accent",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 transition-all duration-300",
            scrolled ? "py-2.5" : "py-4",
          )}
        >
          <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="bg-brand-gradient relative grid h-11 w-11 place-items-center rounded-lg font-display text-lg font-bold text-white shadow-lg shadow-primary/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
              AS
              <span className="absolute -bottom-1.5 -right-1.5 h-3.5 w-3.5 border-b-2 border-r-2 border-white/70" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-bold uppercase tracking-wide">
                Ankit <span className="text-primary">Sharma</span>
              </span>
              <span className="block text-[10px] uppercase tracking-[0.24em] text-accent-foreground/55">
                AutoCAD Draftsman
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="rounded-full px-3.5 py-2 font-display text-[13px] font-medium uppercase tracking-wide text-accent-foreground/80 transition-all duration-200 hover:bg-white/10 hover:text-accent-foreground [&.active]:bg-white/[0.12] [&.active]:text-white [&.active]:ring-1 [&.active]:ring-white/20"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.resume}
              download
              className="bg-brand-gradient btn-shine hidden items-center gap-2 rounded-full px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-transform hover:-translate-y-0.5 sm:inline-flex"
            >
              <Download className="h-4 w-4" /> Get CV
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/5 transition-colors hover:bg-white/10 xl:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Gradient accent line */}
        <span
          className="bg-brand-gradient absolute inset-x-0 -bottom-px h-px opacity-60"
          aria-hidden="true"
        />
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="animate-in fade-in slide-in-from-top-2 absolute inset-x-0 top-full h-[calc(100dvh-4.5rem)] overflow-y-auto bg-accent/98 backdrop-blur-xl xl:hidden">
          <nav className="blueprint-grid-dark mx-auto flex max-w-6xl flex-col px-6 py-6">
            {nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-4 font-display text-xl font-semibold uppercase tracking-wide text-accent-foreground/80 transition-colors hover:text-accent-foreground [&.active]:text-primary-bright"
              >
                <span className="flex items-baseline gap-4">
                  <span className="text-xs text-accent-foreground/35">0{i + 1}</span>
                  {item.label}
                </span>
                <ArrowUpRight className="h-5 w-5 opacity-40 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            ))}
            <a
              href={profile.resume}
              download
              className="bg-brand-gradient btn-shine mt-8 flex items-center justify-center gap-2 rounded-full px-5 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <div className="mt-6 flex justify-center gap-3 text-sm text-accent-foreground/70">
              <a
                href={profile.phoneHref}
                className="rounded-full bg-white/5 px-4 py-2 hover:text-primary"
              >
                Call
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-white/5 px-4 py-2 hover:text-primary"
              >
                Email
              </a>
              <ExternalLink
                href={profile.linkedin}
                className="rounded-full bg-white/5 px-4 py-2 hover:text-primary"
              >
                LinkedIn
              </ExternalLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
