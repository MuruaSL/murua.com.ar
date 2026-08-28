// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://murua.com.ar',
	integrations: [sitemap()],
	vite: {
		build: {
			// Sin esto, el minificador de CSS reescribe cosas como
			// `@media (min-width: 80rem)` a la sintaxis de rango moderna
			// `@media (width >= 80rem)`, que Safari recién soporta desde
			// la versión 16.4 (marzo 2023) — en versiones más viejas el
			// navegador descarta la regla entera en vez de aplicarla.
			target: 'safari13',
		},
	},
});
