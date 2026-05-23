import { SITE } from "../data/site";

const ITEMS = [
  { text: "Buffet artesanal al momento", emoji: "🍣" },
  { text: `${SITE.googleRating} en Google`, emoji: "⭐" },
  { text: "Plaza del Rey · Cartagena", emoji: "📍" },
  { text: `${SITE.buffetPrice} por persona`, emoji: "💰" },
  { text: "Abierto todos los días", emoji: "⏰" },
  { text: "Cocina japonesa de autor", emoji: "🎌" },
  { text: "Sushi recién hecho en tu mesa", emoji: "✅" },
  { text: "Jardín vertical en la barra", emoji: "🌿" },
];

const DOUBLED = [...ITEMS, ...ITEMS];

export default function PromoTicker() {
  return (
    <div
      className="relative overflow-hidden border-y border-white/[0.06] select-none"
      style={{
        background: "linear-gradient(90deg, #06100C 0%, #0a1a10 50%, #06100C 100%)",
        padding: "10px 0",
      }}
      aria-hidden
    >
      {/* Edge fades */}
      <div className="absolute left-0 inset-y-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #06100C, transparent)" }} />
      <div className="absolute right-0 inset-y-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #06100C, transparent)" }} />

      <div className="flex items-center whitespace-nowrap" style={{ animation: "ticker-scroll 28s linear infinite" }}>
        {DOUBLED.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 font-accent text-[11px] uppercase tracking-[0.18em] font-semibold mx-8">
            <span
              className="text-sm"
              style={{ filter: "drop-shadow(0 0 6px rgba(255,92,23,0.5))" }}
            >
              {item.emoji}
            </span>
            <span
              style={{
                color: i % 4 === 0 ? "var(--color-sushi-coral)" :
                       i % 4 === 1 ? "var(--color-sushi-gold)" :
                       i % 4 === 2 ? "var(--color-sushi-neon)" :
                       "rgba(255,255,255,0.55)",
              }}
            >
              {item.text}
            </span>
            <span className="text-white/15 mx-1">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
