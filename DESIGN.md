# Casa del Sushi — Design System

## Color Strategy: Drenched
La oscuridad es el lienzo. El coral y el neón son los focos de luz. El oro es el detalle.

### Tokens (Tailwind v4 @theme en src/index.css)
- `sushi-dark`: #070B0A — fondo principal, casi negro con tinte verde
- `sushi-green`: #0F251E — superficies elevadas, tarjetas
- `sushi-coral`: #FF5F49 — CTA principal, banquetas, acento caliente
- `sushi-neon`: #00F0FF — neón azul eléctrico, highlights, detalles tech
- `sushi-gold`: #C5A059 — latón, detalles de lujo, tipografía de acento
- `sushi-marble`: #0B0C0E — mármol negro de la barra

### Tipografía
- `font-display` (Playfair Display): titulares de sección, serif con elegancia
- `font-sans` (Plus Jakarta Sans): cuerpo, descripciones
- `font-accent` (Outfit): etiquetas, botones, all-caps
- `font-wide` (Syncopate): branding, logotipo, identidad de marca

### Efectos clave
- `.gold-veins`: textura de mármol con vetas doradas (radial gradients)
- `.gold-border-glow-hover`: brillo dorado en hover
- `animate-neon-pulse`: parpadeo de neón azul (2.5s)

### Principios de layout
- Fondo oscuro dominante, secciones alternando entre `sushi-dark` y `sushi-marble`
- Bordes sutiles en `sushi-gold/20` o `white/5`
- Espaciado generoso (py-24 en secciones)
- Max-width contenido: 7xl para layouts anchos, 4xl para texto
