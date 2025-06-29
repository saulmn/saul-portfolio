// @ts-check
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { iconsSpritesheet } from "vite-plugin-icons-spritesheet";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      iconsSpritesheet({
        inputDir: "./public/svg-icons",
        outputDir: "./src/components/ui/icons",
        fileName: "sprite.svg",
        withTypes: true,
        iconNameTransformer: (name) => name,
      }),
    ],
  },
  integrations: [react()],
});
