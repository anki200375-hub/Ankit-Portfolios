import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden bg-accent px-6 py-24">
      <div className="blueprint-grid-dark absolute inset-0" />
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative max-w-lg text-center">
        <p className="label-mono">Error · Drawing not found</p>
        <h1 className="section-title text-gradient mt-4 text-8xl md:text-9xl">404</h1>
        <h2 className="section-title mt-4 text-2xl text-accent-foreground">
          This sheet isn't in the set
        </h2>
        <p className="mt-3 text-sm text-accent-foreground/70">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="bg-brand-gradient inline-flex items-center justify-center rounded-full px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white"
          >
            Go home
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-accent-foreground hover:border-primary hover:text-primary"
          >
            View portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
