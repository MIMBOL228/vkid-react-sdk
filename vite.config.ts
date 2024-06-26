import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import react from "@vitejs/plugin-react";
import mkcert from 'vite-plugin-mkcert';

import antiExremBanner from "./plugins/anti-extrem-banner";




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // поддержка синтаксиса React (JSX и прочее)
    react(),
    // генерация файла `index.d.ts`
    dts({
      insertTypesEntry: true,
    }),
    mkcert(),
    antiExremBanner(true)
  ],
  build: {
    lib: {
      // путь к основному файлу библиотеки
      entry: "./src/lib/index.ts",
      // название библиотеки
      name: "ReactTSLib",
      // форматы генерируемых файлов
      formats: ["es"],
      // названия генерируемых файлов
      fileName: (format) => `vkid-react-sdk.${format}.js`,
    },
    // https://vitejs.dev/config/build-options.html#build-rollupoptions
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
        inlineDynamicImports: false
      }
    },
  },
  server: {
    https: true,
    port: 443,
    host: true
  },
})

