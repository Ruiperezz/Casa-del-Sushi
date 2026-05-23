import { motion } from "motion/react";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

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
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-16px" }}
      transition={{ staggerChildren: 0.1 }}
      className={`max-w-2xl mb-12 md:mb-14 ${alignClass} ${className}`}
    >
      {eyebrow && (
        <motion.p variants={item} className="font-sans text-sm text-sushi-gold mb-3">
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={item}
        className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-tight leading-snug"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p variants={item} className="font-sans text-sushi-muted text-base leading-relaxed mt-4">
          {description}
        </motion.p>
      )}
    </motion.header>
  );
}
