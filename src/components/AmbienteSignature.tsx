import { SPACE_SIGNATURES } from "../data/venue";

export default function AmbienteSignature() {
  return (
    <section aria-label="Detalles del local" className="py-12 md:py-14 bg-sushi-green/30 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="font-sans text-sm text-sushi-gold text-center mb-8">
          Lo que encontrarás al entrar
        </p>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {SPACE_SIGNATURES.map(({ title, desc }) => (
            <li key={title} className="text-center md:text-left">
              <h3 className="font-sans text-sm font-medium text-white mb-1">{title}</h3>
              <p className="font-sans text-xs text-sushi-muted leading-relaxed">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
