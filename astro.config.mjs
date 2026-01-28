import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import path from "path";

export default defineConfig({
  site: "https://kalimeroland.vercel.app/",

  integrations: [tailwind()],

  // Modern Astro image handling (correct)
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },

  vite: {
    resolve: {
      alias: {
        "~": path.resolve("./src"),
      },
    },
    ssr: {
      external: ["svgo"],
    },
  },
});
