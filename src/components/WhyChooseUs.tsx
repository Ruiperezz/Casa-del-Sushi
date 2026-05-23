import { motion } from "motion/react";
import { Sparkles, Users, Clock, Leaf } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const features = [
  {
    icon: Sparkles,
    title: "Sushi de autor",
    desc: "Carta premium incluida en el buffet. Uramakis, nigiris flameados y creaciones del chef.",
    color: "sushi-coral",
  },
  {
    icon: Clock,
    title: "Servicio en rondas",
    desc: "Cada pieza recién elaborada a tu mesa, directamente de la barra. Garantizamos frescura en cada ronda.",
    color: "sushi-neon",
  },
  {
    icon: Users,
    title: "Atmósfera Premium",
    desc: "Diseño de lujo: neón azul, banquetas coral, mármol negro, jardín vertical. Interior real.",
    color: "sushi-gold",
  },
  {
    icon: Leaf,
    title: "Opciones Especiales",
    desc: "Menú infantil, alternativas sin gluten, y bebidas desde 3€ (cervezas, sake, cócteles de la casa).",
    color: "sushi-neon",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-gradient-to-b from-sushi-dark via-sushi-surface to-sushi-dark relative border-t border-sushi-gold/10 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sushi-coral/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sushi-neon/2 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Por qué Casa del Sushi"
          title="Lujo artesanal accesible"
          description="La experiencia de un restaurante gastronómico con la libertad de un buffet premium. Así lo experimentan nuestros clientes."
        />

        {/* Grid de características */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map(({ icon: Icon, title, desc, color }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                className="card-surface p-6 h-full border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
              >
                <div className="flex gap-4">
                  {/* Ícono animado */}
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `var(--color-${color})/15`,
                      boxShadow: `0 0 12px rgba(${
                        color === "sushi-coral"
                          ? "242, 88, 71"
                          : color === "sushi-neon"
                            ? "0, 217, 255"
                            : "232, 184, 74"
                      }, 0.1)`,
                    }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{
                        color: `var(--color-${color})`,
                      }}
                    />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-sushi-coral-light transition-colors">
                      {title}
                    </h3>
                    <p className="font-sans text-sm text-sushi-muted leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Barra de estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: "4.9★", label: "Valoración en Google" },
            { value: "17,80€", label: "Precio por persona" },
            { value: "+30", label: "Piezas diferentes" },
            { value: "Desde 2026", label: "En el corazón de Cartagena" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
              className="p-4 bg-gradient-to-br from-sushi-coral/10 to-sushi-neon/5 border border-white/[0.05] rounded-lg text-center"
            >
              <p className="font-display text-2xl font-bold text-sushi-coral mb-1">
                {stat.value}
              </p>
              <p className="font-sans text-xs text-sushi-muted">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
