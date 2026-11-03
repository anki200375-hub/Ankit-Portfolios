import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  ExternalLink as OpenIcon,
  Mail,
  Phone,
  Linkedin,
  MapPin,
  FileText,
} from "lucide-react";
import { PageBanner } from "@/components/page-banner";
import { Reveal } from "@/components/reveal";
import { ExternalLink } from "@/components/external-link";
import { profile, experience, education } from "@/data/profile";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume / CV — Ankit Sharma, AutoCAD Draftsman" },
      {
        name: "description",
        content:
          "View and download the CV of Ankit Sharma — AutoCAD Draftsman, Mechanical Draftsman and SolidWorks CAD Modeler.",
      },
      { property: "og:title", content: "Resume / CV — Ankit Sharma" },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

function Resume() {
  return (
    <>
      <PageBanner
        title="Resume"
        crumb="Resume"
        subtitle="View my CV right here or download the PDF for your records."
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <Reveal>
            <div className="panel overflow-hidden bg-background">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-5 py-3">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <FileText className="h-4 w-4 text-primary" />
                  Ankit_Sharma_AutoCAD_Draftsman_Resume.pdf
                </span>
                <div className="flex gap-2">
                  <ExternalLink
                    href={profile.resume}
                    className="inline-flex items-center gap-1.5 border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground hover:border-primary hover:text-primary"
                  >
                    <OpenIcon className="h-3.5 w-3.5" /> Open
                  </ExternalLink>
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex items-center gap-1.5 bg-primary px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:opacity-90"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                </div>
              </div>
              <object
                data={`${profile.resume}#view=FitH`}
                type="application/pdf"
                className="h-[80vh] min-h-[560px] w-full"
              >
                <div className="grid h-full place-items-center p-10 text-center">
                  <div>
                    <p className="text-muted-foreground">
                      Your browser can't display the PDF inline.
                    </p>
                    <a
                      href={profile.resume}
                      download
                      className="mt-5 inline-flex items-center gap-2 bg-primary px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground"
                    >
                      <Download className="h-4 w-4" /> Download CV
                    </a>
                  </div>
                </div>
              </object>
            </div>
          </Reveal>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal delay={100}>
              <div className="bg-accent p-7 text-accent-foreground">
                <h2 className="font-display text-2xl font-bold uppercase">{profile.name}</h2>
                <p className="mt-1 text-sm text-primary">AutoCAD & Mechanical Draftsman</p>
                <ul className="mt-6 space-y-3 text-sm text-accent-foreground/75">
                  <li className="flex gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-primary" />
                    <a href={`mailto:${profile.email}`} className="break-all hover:text-primary">
                      {profile.email}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-primary" />
                    <a href={profile.phoneHref} className="hover:text-primary">
                      {profile.phone}
                    </a>
                  </li>
                  <li className="flex gap-3">
                    <Linkedin className="h-4 w-4 shrink-0 text-primary" />
                    <ExternalLink href={profile.linkedin} className="hover:text-primary">
                      {profile.linkedinLabel}
                    </ExternalLink>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="h-4 w-4 shrink-0 text-primary" />
                    {profile.location}
                  </li>
                </ul>
                <a
                  href={profile.resume}
                  download
                  className="mt-7 flex items-center justify-center gap-2 bg-primary px-5 py-3.5 font-display text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5"
                >
                  <Download className="h-4 w-4" /> Download PDF
                </a>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="panel bg-background p-7">
                <h3 className="label-mono">At a glance</h3>
                <ul className="mt-5 space-y-4">
                  {experience.map((e) => (
                    <li key={e.org} className="border-l-2 border-primary pl-4">
                      <p className="text-sm font-semibold text-foreground">{e.role}</p>
                      <p className="text-xs text-muted-foreground">
                        {e.org} · {e.period}
                      </p>
                    </li>
                  ))}
                  {education.slice(0, 2).map((ed) => (
                    <li key={ed.degree} className="border-l-2 border-border pl-4">
                      <p className="text-sm font-semibold text-foreground">{ed.degree}</p>
                      <p className="text-xs text-muted-foreground">
                        {ed.org} · {ed.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
