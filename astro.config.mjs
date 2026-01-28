import { defineConfig } from 'astro/config';
import compression from 'vite-plugin-compression';

// Si tu ne veux **pas** de compression, supprime tout ce qui touche à `vite.plugins`

export default defineConfig({
  // Optionnel : ajoute ton URL de production ici
  // site: 'https://ton‑domaine.com',

  // Si tu utilises Netlify (statique)
  // pas besoin d’adapter ici si c’est juste un site statique.
  // Si tu utilises SSR / fonctions Netlify
  // tu devrais aussi installer l’adapter @astrojs/netlify si nécessaire.

  vite: {
    plugins: [
      compression() // compresse les fichiers build (gzip)
    ]
  }
});
