import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import { resolve } from "path";

export default defineConfig({
  base: "/Uppgift-1-Frontendbaserad-webbutveckling/",
  plugins: [
    viteImagemin.default({
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.6, 0.8],
      },
      webp: {
        quality: 75,
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        bilder: resolve(__dirname, "src/sidor/bilder.html"),
        process: resolve(__dirname, "src/sidor/processer.html"),
      },
    },
  },
});
