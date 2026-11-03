import type { ReactNode } from "react";

type Props = {
  href: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
};

export function ExternalLink({ href, className, children, ...rest }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer external"
      className={className}
      {...rest}
    >
      {children}
    </a>
  );
}
