import { defineConfig } from 'astro/config';
import compression from 'vite-plugin-compression';

// https://docs.astro.build/fr/reference/configuration-reference/

export default defineConfig({
  // URL de ton site (optionnel, mais utile pour Netlify)
  // site: 'https://ton-domaine.netlify.app',

  vite: {
    plugins: [
      compression() // compresse le build (gzip)
    ]
  }
});
