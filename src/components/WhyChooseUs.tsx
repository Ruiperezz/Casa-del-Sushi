import { Sparkles, Armchair, Hexagon, Leaf } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";
import { SITE } from "../data/site";

const features = [
  {
    icon: Sparkles,
    title: "Carta incluida en el buffet",
    desc: "Uramakis, nigiris flameados y entrantes de autor por 17,80 €. Pides en rondas, llega recién hecho.",
    accent: "text-sushi-coral",
    iconBg: "bg-sushi-coral/12",
    iconBorder: "border-sushi-coral/30",
    hoverBorder: "hover:border-sushi-coral/30",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(255,92,23,0.1)]",
  },
  {
    icon: Armchair,
    title: "Un salón con personalidad",
    desc: "Banquetas naranja, sillas azul, neón, vidriera y mármol negro con detalle dorado. Tal como en las fotos.",
    accent: "text-sushi-neon",
    iconBg: "bg-sushi-neon/10",
    iconBorder: "border-sushi-neon/25",
    hoverBorder: "hover:border-sushi-neon/30",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(0,170,255,0.09)]",
  },
  {
    icon: Hexagon,
    title: "Barra y jardín vertical",
    desc: "Zona de barra con vegetación colgante, copas y vinos. Un rincón muy nuestro.",
    accent: "text-sushi-gold",
    iconBg: "bg-sushi-gold/12",
    iconBorder: "border-sushi-gold/25",
    hoverBorder: "hover:border-sushi-gold/30",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(200,149,42,0.1)]",
  },
  {
    icon: Leaf,
    title: "Te adaptamos la carta",
    desc: "Opciones sin gluten, menú infantil y bebidas desde 3 €. Pregunta al reservar o al llegar.",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-900/30",
    iconBorder: "border-emerald-700/30",
    hoverBorder: "hover:border-emerald-700/40",
    hoverGlow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.06)]",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-sushi-surface-warm/60 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 gold-veins opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Por qué venir"
          title="Calidad, ambiente y trato cercano"
          description={`En ${SITE.location} reunimos buen producto, un local cuidado y un equipo que conoce la carta.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map(({ icon: Icon, title, desc, accent, iconBg, iconBorder, hoverBorder, hoverGlow }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
            >
              <TiltCard intensity={8}>
                <article
                  className={`card-surface p-6 h-full flex flex-col transition-all duration-300 ${hoverBorder} ${hoverGlow} border border-white/[0.07]`}
                >
                  <div className={`w-12 h-12 rounded-2xl ${iconBg} border ${iconBorder} flex items-center justify-center mb-5 transition-transform duration-300 hover:scale-110`}>
                    <Icon className={`w-5 h-5 ${accent}`} strokeWidth={1.5} aria-hidden />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{title}</h3>
                  <p className="font-sans text-sm text-sushi-muted leading-relaxed">{desc}</p>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
