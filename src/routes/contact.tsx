import { createFileRoute } from "@tanstack/react-router";
import type { FormEvent, MouseEvent } from "react";
import { Mail, Linkedin, MapPin, Clock, Phone, Download, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { PageBanner } from "@/components/page-banner";
import { ExternalLink } from "@/components/external-link";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hire a CAD Design Engineer | Ankit Sharma" },
      {
        name: "description",
        content:
          "Contact Ankit Sharma for AutoCAD 2D drafting, SolidWorks 3D modelling and Revit civil drawing work. Based in Hamirpur, Himachal Pradesh, available for remote projects.",
      },
      { property: "og:title", content: "Contact — Hire a CAD Design Engineer" },
      {
        property: "og:description",
        content: "Get in touch for drafting, modelling and drawing conversion work.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const details = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: "Phone / WhatsApp", value: profile.phone, href: profile.phoneHref },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin },
  { icon: MapPin, label: "Location", value: profile.location },
  {
    icon: Clock,
    label: "Availability",
    value: "Full-time drafting roles (India & GCC) and freelance work",
  },
];

function composeBrief(form: HTMLFormElement) {
  const data = new FormData(form);
  const get = (k: string) => String(data.get(k) ?? "").trim();
  const subject = `Project enquiry — ${get("scope")}`;
  const body = [
    `Name: ${get("name")}`,
    `Email: ${get("email")}`,
    `Work required: ${get("scope")}`,
    "",
    get("brief"),
  ].join("\n");
  return { subject, body };
}

function sendBrief(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const { subject, body } = composeBrief(e.currentTarget);
  window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function sendWhatsApp(e: MouseEvent<HTMLButtonElement>) {
  const form = e.currentTarget.form;
  if (!form || !form.reportValidity()) return;
  const { subject, body } = composeBrief(form);
  const text = encodeURIComponent(`${subject}\n\n${body}`);
  window.open(`${profile.whatsapp}?text=${text}`, "_blank", "noopener");
}

function Contact() {
  return (
    <>
      <PageBanner
        title="Contact"
        crumb="Contact"
        subtitle="Hiring for a drafting role or have a drawing package? I usually reply within a day."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="label-mono">Get in touch</p>
            <h2 className="section-title mt-4 text-3xl text-foreground md:text-4xl">
              Let's talk about your drawings
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Send across your sketches, prints or a short brief and I'll come back with scope,
              timeline and the file formats you'll receive. Email is the fastest way to reach me.
            </p>
            <a
              href={profile.resume}
              download
              className="mt-6 inline-flex items-center gap-2 border border-border px-5 py-3 font-display text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" /> Download my CV
            </a>

            <dl className="mt-10 space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center bg-primary shadow-lg shadow-primary/25">
                    <d.icon className="h-5 w-5 text-primary-foreground" />
                  </span>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-1 break-words text-base text-foreground">
                      {d.href ? (
                        d.href.startsWith("http") ? (
                          <ExternalLink href={d.href} className="hover:text-primary">
                            {d.value}
                          </ExternalLink>
                        ) : (
                          <a href={d.href} className="hover:text-primary">
                            {d.value}
                          </a>
                        )
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="panel border-t-4 border-t-primary p-8">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-card-foreground">
              Quick project brief
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this in and send it by email or WhatsApp — the message is prepared for you.
            </p>
            <form className="mt-8 space-y-5" onSubmit={sendBrief}>
              <div>
                <label
                  htmlFor="name"
                  className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div>
                <label
                  htmlFor="scope"
                  className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Work required
                </label>
                <select
                  id="scope"
                  name="scope"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >
                  <option>2D drafting & detailing</option>
                  <option>3D part or assembly modelling</option>
                  <option>Revit civil drawings</option>
                  <option>PDF / paper to CAD conversion</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="brief"
                  className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Project details
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={5}
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  className="bg-brand-gradient btn-shine inline-flex items-center justify-center gap-2 px-6 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" /> Send by email
                </button>
                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="inline-flex items-center justify-center gap-2 bg-[#25d366] px-6 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
