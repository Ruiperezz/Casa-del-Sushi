import type { ReactNode } from "react";
import { motion } from "motion/react";

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
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-3xl mb-14 md:mb-18 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <p className="font-accent text-[11px] font-semibold uppercase tracking-[0.22em] text-sushi-gold mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-[2.85rem] font-bold text-white tracking-tight leading-[1.1]">
        {title}
      </h2>
      <div
        className={`h-px w-14 bg-sushi-gold/50 mt-6 mb-6 ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
      {description && (
        <p className="font-sans text-gray-400 text-sm sm:text-[15px] leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.header>
  );
}
