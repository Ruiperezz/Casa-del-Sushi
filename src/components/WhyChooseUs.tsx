import { Sparkles, Armchair, Hexagon, Leaf } from "lucide-react";
import { motion } from "motion/react";
import SectionHeading from "./ui/SectionHeading";
import TiltCard from "./ui/TiltCard";
import { SITE } from "../data/site";
import { scrollToSection } from "../lib/scroll";

const features = [
  {
    icon: Sparkles,
    title: "Carta de autor incluida en el precio",
    desc: "Uramakis, nigiris flameados y entrantes de autor por 17,80 €. Pides en rondas, llega recién hecho desde la barra.",
    accent: "text-sushi-coral",
    bar: "rgba(232,103,60,0.85)",
  },
  {
    icon: Armchair,
    title: "Un salón con personalidad",
    desc: "Banquetas naranja, sillas azul, neón, vidriera y mármol negro con detalle dorado.",
    accent: "text-sushi-neon",
    bar: "rgba(26,140,255,0.85)",
  },
  {
    icon: Hexagon,
    title: "Barra y jardín vertical",
    desc: "Zona de barra con vegetación colgante, copas y vinos. Un rincón muy nuestro.",
    accent: "text-sushi-gold",
    bar: "rgba(201,169,110,0.85)",
  },
  {
    icon: Leaf,
    title: "Te adaptamos la carta",
    desc: "Opciones sin gluten, menú infantil y bebidas desde 3 €. Pregunta al reservar.",
    accent: "text-sushi-neon",
    bar: "rgba(26,140,255,0.6)",
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
  const [featured, ...rest] = features;

  return (
    <section className="section-pad bg-sushi-surface-warm/60 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 gold-veins opacity-50 pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          align="left"
          eyebrow="Por qué venir"
          title="Calidad, ambiente y trato cercano"
          description={`En ${SITE.location} reunimos buen producto, un local cuidado y un equipo que conoce la carta.`}
        />

        {/* ── Featured card — full-width horizontal ── */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          variants={fadeUp}
          className="mb-5"
        >
          <TiltCard intensity={5}>
            <article className="card-surface p-7 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 relative overflow-hidden border border-sushi-coral/20 hover:border-sushi-coral/35 hover:shadow-[0_0_48px_rgba(232,103,60,0.12)] transition-all duration-300">
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{ background: featured.bar }} />
              <featured.icon className={`w-10 h-10 ${featured.accent} shrink-0 mt-1`} strokeWidth={1} aria-hidden />

              <div className="flex-1 min-w-0">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-white mb-2 leading-snug">
                  {featured.title}
                </h3>
                <p className="font-sans text-sm text-sushi-muted leading-relaxed max-w-prose">{featured.desc}</p>
              </div>

              <div className="shrink-0 flex flex-col items-start sm:items-end gap-3">
                <div className="text-left sm:text-right">
                  <p className="font-display text-3xl font-bold text-sushi-coral leading-none">{SITE.buffetPrice}</p>
                  <p className="font-sans text-xs text-sushi-muted mt-1">por persona · IVA incl.</p>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection("reserva")}
                  className="btn-primary !py-2 !px-4 !text-xs whitespace-nowrap"
                >
                  Reservar mesa
                </button>
              </div>
            </article>
          </TiltCard>
        </motion.div>

        {/* ── Supporting features — 3-column row ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.map(({ icon: Icon, title, desc, accent, bar }, i) => (
            <motion.div
              key={title}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeUp}
            >
              <TiltCard intensity={10}>
                <article className="card-surface p-6 h-full flex flex-col relative overflow-hidden border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300">
                  <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{ background: bar }} />
                  <Icon className={`w-6 h-6 ${accent} mb-5 mt-2`} strokeWidth={1.25} aria-hidden />
                  <h3 className="font-display text-base font-semibold text-white mb-2">{title}</h3>
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
