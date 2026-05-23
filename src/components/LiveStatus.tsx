import { motion } from "motion/react";
import { Zap, Users, Heart } from "lucide-react";

const LIVE_STATS = [
  { icon: Users, label: "Buffet ilimitado", value: "17,80€", emoji: "🍽️" },
  { icon: Zap, label: "Sushi fresco", value: "Al momento", emoji: "🔥" },
  { icon: Heart, label: "Valoración", value: "4.9★", emoji: "❤️" },
];

export default function LiveStatus() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-sushi-dark via-sushi-coral/[0.08] to-sushi-dark border-y border-sushi-coral/20 relative overflow-hidden">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-sushi-neon/5 rounded-full blur-3xl"
          animate={{ y: [-20, 20], x: [10, -10] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-sushi-coral rounded-full"
            />
            <span className="font-accent text-[11px] uppercase tracking-[0.2em] text-sushi-coral font-semibold">
              EN DIRECTO HOY
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
            La energía del local, en tiempo real
          </h2>
        </motion.div>

        {/* Grid de estadísticas vivas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {LIVE_STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(242, 88, 71, 0.15)",
                }}
                className="p-6 rounded-2xl bg-gradient-to-br from-sushi-dark/80 to-sushi-dark/40 border border-sushi-coral/20
                          hover:border-sushi-coral/50 transition-all duration-300 cursor-default group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl font-bold text-white tabular-nums">
                    {stat.value}
                  </div>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-3xl"
                  >
                    {stat.emoji}
                  </motion.div>
                </div>
                <p className="font-sans text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </p>

                {/* Pulse indicator */}
                <motion.div
                  className="mt-3 h-0.5 bg-gradient-to-r from-sushi-coral/40 via-sushi-coral/80 to-transparent rounded-full"
                  animate={{ scaleX: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="font-sans text-sm text-gray-400">
            ¿Listo para ser parte de la experiencia?{" "}
            <a
              href="#reserva"
              className="text-sushi-coral hover:text-sushi-coral-light font-semibold underline-offset-2 hover:underline transition-colors"
            >
              Reserva tu mesa ahora
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
