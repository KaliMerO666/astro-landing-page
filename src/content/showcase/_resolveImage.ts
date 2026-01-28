import path from "node:path";
import { glob } from "astro/loaders";
import type { ImageMetadata } from "astro";

export default async function resolveImage(image: string) {
  const imageGlob: Record<string, () => Promise<{ default: ImageMetadata }>> =
    import.meta.glob("/src/assets/**/*.{jpeg,jpg,png,gif}");

  if (!imageGlob[image])
    throw new Error(
      `"${image}" does not exist in glob: "/src/assets/**/*.{jpeg,jpg,png,gif}"`
    );

  return await imageGlob[image]().then((m) => m.default);
}
