import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li";
};

export function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  kicker,
  title,
  body,
  center,
  light,
}: {
  kicker: string;
  title: ReactNode;
  body?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <Reveal className={cn("max-w-2xl", center && "mx-auto text-center")}>
      <p className={cn("label-mono inline-flex items-center gap-3", center && "justify-center")}>
        <span className="h-px w-8 bg-primary" />
        {kicker}
      </p>
      <h2
        className={cn(
          "section-title mt-4 text-3xl md:text-5xl",
          light ? "text-accent-foreground" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {body && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            light ? "text-accent-foreground/70" : "text-muted-foreground",
          )}
        >
          {body}
        </p>
      )}
    </Reveal>
  );
}
