import image from "@astrojs/image";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import media from "astro-media/integration";



// https://astro.build/config
export default defineConfig({
  site: "https://station-service.netlify.app",
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
     media(),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
