import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
import { resolve } from 'path' 

export default defineConfig({
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
        main: resolve(__dirname, 'index.html'),
        bilder: resolve(__dirname, 'sidor/bilder.html'),
        process: resolve(__dirname, 'sidor/process.html'),
      },
    },
  },
})