import salonHexagonos from "../assets/images/local-salon-hexagonos.png";
import neonVidriera from "../assets/images/local-neon-vidriera.png";
import banquetasNaranja from "../assets/images/local-banquetas-naranja.png";
import barraJardin from "../assets/images/local-barra-jardin.png";
import barraVinos from "../assets/images/local-barra-vinos.png";
import salonVidriera from "../assets/images/local-salon-vidriera.png";
import sushiPlate from "../assets/images/sushi_plate_1779464165142.png";

export interface VenuePhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  description: string;
  /** Tailwind grid placement */
  layout: "hero" | "wide" | "tall" | "standard";
}

/** Fotografías reales del local — distribución y diseño interior */
export const VENUE_PHOTOS: VenuePhoto[] = [
  {
    id: "salon-hexagonos",
    src: salonHexagonos,
    alt: "Salón de Casa del Sushi con banquetas naranja, sillas azul rey, lámparas hexagonales doradas y jardín vertical",
    title: "Salón principal",
    description:
      "Banquetas naranja, sillas azul rey, mesas de mármol negro con ribete dorado y lámparas hexagonales que iluminan el espacio.",
    layout: "hero",
  },
  {
    id: "neon-vidriera",
    src: neonVidriera,
    alt: "Rótulo neón azul Casa del Sushi con vidriera de colores y lámparas circulares doradas",
    title: "Neón y vidriera de autor",
    description:
      "El icónico letrero en neón azul eléctrico, acompañado de una vidriera modernista y aros de luz cálida en el techo.",
    layout: "standard",
  },
  {
    id: "banquetas",
    src: banquetasNaranja,
    alt: "Detalle de banquetas naranja acolchadas con mesas de mármol negro veteado en oro",
    title: "Banquetas y mármol",
    description:
      "Textura acolchada en tono naranja vibrante y mesas de mármol negro con vetas blancas y perfil metálico dorado.",
    layout: "standard",
  },
  {
    id: "barra-jardin",
    src: barraJardin,
    alt: "Barra con jardín vertical, listones de madera y pared azul con neón Casa del Sushi",
    title: "Barra y jardín vertical",
    description:
      "Jardín colgante con rosas y follaje, barra de listones de madera oscura y mármol pulido bajo luz cálida.",
    layout: "standard",
  },
  {
    id: "barra-vinos",
    src: barraVinos,
    alt: "Barra con botellas, copas colgantes y arreglo floral sobre mármol negro",
    title: "Zona de barra premium",
    description:
      "Selección de vinos y copas suspendidas, iluminación lineal LED y detalle floral que aporta calidez al espacio.",
    layout: "standard",
  },
  {
    id: "salon-vidriera",
    src: salonVidriera,
    alt: "Vista del salón con paneles hexagonales en techo, pared burdeos y vidriera de colores",
    title: "Distribución del comedor",
    description:
      "Mesas alineadas con precisión, paneles geométricos en techo y vidriera que aporta color y alegría al ambiente.",
    layout: "standard",
  },
];

export const SPACE_SIGNATURES = [
  {
    title: "Banquetas naranja",
    desc: "Acolchado vertical que define el carácter cálido y vibrante del salón.",
  },
  {
    title: "Neón azul eléctrico",
    desc: "Rótulo CASA DEL SUSHI: la seña de identidad visible desde el comedor.",
  },
  {
    title: "Mármol negro y oro",
    desc: "Mesas con vetas blancas y perfil dorado: la base de cada servicio.",
  },
  {
    title: "Lámparas hexagonales",
    desc: "Geometría y luz cálida en el techo, coherente con el diseño del local.",
  },
  {
    title: "Vidriera de colores",
    desc: "Paneles modernistas que aportan alegría y un toque artístico único.",
  },
  {
    title: "Jardín vertical",
    desc: "Vegetación y rosas en la barra: frescura natural dentro del espacio.",
  },
] as const;

export const HERO_IMAGE = salonHexagonos;
export const PHILOSOPHY_IMAGE = neonVidriera;
export const FOOD_IMAGE = sushiPlate;
