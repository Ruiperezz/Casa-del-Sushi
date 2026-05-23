import { motion } from "motion/react";
import { Camera } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

// Galería visual del espacio
const photos = [
  {
    id: 1,
    title: "Salón Principal",
    desc: "Banquetas coral, neón azul, mármol negro",
    url: "https://images.unsplash.com/photo-1559339352-11feac07a11d?auto=format&fit=crop&q=80&w=800&h=600",
    aspect: "landscape",
  },
  {
    id: 2,
    title: "Zona de Mesas",
    desc: "Distribución abierta y luminosa",
    url: "https://images.unsplash.com/photo-1517457373614-b7152f80ff81?auto=format&fit=crop&q=80&w=800&h=600",
    aspect: "landscape",
  },
  {
    id: 3,
    title: "Detalle del Techo",
    desc: "Iluminación neón característica",
    url: "https://images.unsplash.com/photo-1589985641201-4a7a46bbd3e1?auto=format&fit=crop&q=80&w=600&h=800",
    aspect: "portrait",
  },
  {
    id: 4,
    title: "Barra de Mármol",
    desc: "Vista del área de preparación",
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=800&h=600",
    aspect: "landscape",
  },
  {
    id: 5,
    title: "Entrada Principal",
    desc: "Frente de Casa del Sushi",
    url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=600&h=800",
    aspect: "portrait",
  },
  {
    id: 6,
    title: "Platos Artesanales",
    desc: "Detalle de la carta de autor",
    url: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&q=80&w=800&h=600",
    aspect: "landscape",
  },
];

export default function RecentPhotos() {
  return (
    <section className="section-pad bg-gradient-to-t from-sushi-dark to-sushi-marble relative border-t border-sushi-neon/10 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-sushi-neon/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading
          eyebrow="Galería Visual"
          title="Así es Casa del Sushi"
          description="Descubre los elementos que definen nuestro espacio: diseño de autor, iluminación de neón y servicio premium en el centro histórico de Cartagena."
        />

        {/* Grid de masonry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[300px]">
          {photos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative overflow-hidden rounded-lg border border-white/[0.08] cursor-pointer ${
                photo.aspect === "portrait" ? "lg:row-span-2" : ""
              }`}
            >
              {/* Contenedor de imagen */}
              <motion.img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500"
                whileHover={{ scale: 1.08 }}
              />

              {/* Overlay con gradiente */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-sushi-dark/90 via-sushi-dark/20 to-transparent flex flex-col justify-end p-5 transition-opacity duration-300"
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-lg font-bold text-white mb-1">
                    {photo.title}
                  </h3>
                  <p className="font-sans text-sm text-sushi-gold-light">
                    {photo.desc}
                  </p>
                </motion.div>
              </motion.div>

              {/* Efecto de brillo en hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 border border-sushi-neon/40 rounded-lg transition-opacity duration-300 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="font-sans text-sushi-muted mb-4 flex items-center justify-center gap-2">
            <Camera className="w-4 h-4" />
            ¿Necesitas más detalles? Síguenos en redes sociales
          </p>
          <div className="flex gap-3 justify-center">
            {["Instagram", "Facebook"].map((social) => (
              <motion.button
                key={social}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 border border-white/10 rounded-lg font-accent text-xs uppercase tracking-[0.1em] text-white hover:border-sushi-coral hover:text-sushi-coral hover:shadow-[0_0_16px_rgba(242,88,71,0.3)] transition-all"
              >
                {social}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
