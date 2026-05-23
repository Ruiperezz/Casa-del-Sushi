import { motion } from "motion/react";

const items = [
  { value: "4,9★",    label: "Google Maps",    detail: "Más de 200 valoraciones" },
  { value: "17,80€",  label: "Buffet libre",    detail: "IVA incluido · Todos los días" },
  { value: "12–16:30", label: "Turno de comida", detail: "Lunes a domingo" },
  { value: "19–00:00", label: "Turno de cena",   detail: "Vie–Sáb hasta las 24:00" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Indicadores de confianza" className="relative z-20 border-y border-white/[0.06] bg-sushi-marble/95">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 py-5"
      >
        <ul className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/[0.06]">
          {items.map(({ value, label, detail }) => (
            <li key={label} className="flex flex-col px-5 first:pl-0 last:pr-0 py-1">
              <span className="font-display text-xl font-bold text-white tabular-nums leading-tight">
                {value}
              </span>
              <span className="font-accent text-[11px] font-semibold uppercase tracking-[0.15em] text-sushi-gold mt-0.5">
                {label}
              </span>
              <span className="font-sans text-[11px] text-gray-500 mt-0.5">{detail}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
