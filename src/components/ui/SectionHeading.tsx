import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-2xl mb-12 md:mb-14 ${alignClass} ${className}`}>
      {eyebrow && (
        <p className="font-sans text-sm text-sushi-gold mb-3">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug">
        {title}
      </h2>
      {description && (
        <p className="font-sans text-sushi-muted text-base leading-relaxed mt-4">
          {description}
        </p>
      )}
    </header>
  );
}
