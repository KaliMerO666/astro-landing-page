import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';

// 💡 Remplace cette URL par ton vrai domaine
const SITE_URL = 'https://ton-domaine.com';

export default defineConfig({
  // 👉 URL du site final (utile pour sitemap & SEO)
  site: SITE_URL, 

  // 👉 intégrations :
  integrations: [
    tailwind(),      // TailwindCSS
    sitemap(),       // Génère un sitemap automatiquement
    compress(),      // Compression Brotli/Gzip des assets
  ],

  build: {
    // 🧹 minification maximale du HTML/CSS/JS
    minify: true,
    minifyHTML: true,
    minifyCSS: true,
    minifyJS: true,

    // 👇 possibilité d’inliner les petits CSS dans le HTML
    inlineStylesheets: 'auto', 
  },

  // 👇 optimisation d’images (pour autoriser les sources externes)
  image: {
    // ici tu peux autoriser des domaines d’images distants
    // ex: ['images.unsplash.com']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // 👇 Vite (si tu veux faire d’autres optimisations)
  vite: {
    build: {
      // ajoutes d’autres options de build Vite si nécessaire
    },
  },
});
