---
nombre: "Herrería WS Murúa"
gancho: "De un sitio de 5,5 MB a uno de 1 MB, sin tocar el diseño de fondo."
resumen: "Sitio institucional para un taller de herrería y carpintería de Córdoba: rediseño completo, optimización de imágenes y mejora del rendimiento."
url: "https://herreria-ws-murua.vercel.app"
año: "2022–2026"
portada: "../../assets/trabajos/herreria.webp"
portadaAlt: "Sitio de Herrería WS Murúa en el navegador, con el rediseño 2026: hero con foto de reja y botón de presupuesto"
destacado: true
orden: 1
testimonios:
  - texto: "¡Muy buena! Ahora es livianita. La anterior era muy linda, pero era terrible: tardaba en abrir. Esta se abrió al toque, entré y ya me mostraba las fotos, todo divino."
    autor: "Karina, dueña de Herrería WS Murúa"
  - texto: "Está muy profesional."
    autor: "Walter, dueño de Herrería WS Murúa"
---

Herrería WS Murúa es un taller familiar de herrería y carpintería en Córdoba: rejas,
portones, cerramientos, techos, decks y muebles a medida. El sitio existe desde 2022 y
en 2026 pasó por un rediseño completo.

## El problema

La versión anterior funcionaba, pero pesaba **5,5 MB en la home** — casi todo en fotos.
Eran capturas de trabajos guardadas en PNG a 2160×2160 px y reducidas a 256 colores para
que pesaran "menos", mostradas en pantalla a un tamaño real de apenas 330 px. El resultado
era el peor de los dos mundos: pesaban muchísimo y además se veían peor, con bandas de
color en los degradados que produce reducir una fotografía a 256 colores.

El menú también tenía un problema de breakpoint: en pantallas de escritorio intermedias
seguía mostrando el ícono de hamburguesa en vez de la navegación completa.

## Qué se hizo

- **Conversión de todas las fotos a WebP**, en el tamaño real en que se muestran.
- **Carga diferida (`loading="lazy"`)** en las imágenes fuera de la primera pantalla, y
  `fetchpriority="high"` en la foto principal del hero para que sea lo primero en llegar.
- **`width` y `height` explícitos** en cada imagen, para que el texto no salte mientras
  carga.
- **Rediseño visual completo**: tipografía, jerarquía y un mensaje más claro sobre el
  diferencial del taller — trabajo a medida, no de catálogo.
- Corrección del breakpoint del menú.

## El resultado, medido

| | Antes | Después |
|---|---|---|
| Peso de la home | 5.544 KB | **1.027 KB** |
| Formato de imagen | PNG, 256 colores | WebP |
| Carga diferida | no | sí |
| Menú en escritorio | rompía en anchos intermedios | funciona en todo el rango |

**82% menos peso**, con el mismo contenido y mejor terminado visual. Es la misma lógica
que aplico en cualquier sitio que hago: lo rápido y lo prolijo no compiten entre sí, casi
siempre van de la mano.
