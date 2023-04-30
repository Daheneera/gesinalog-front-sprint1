import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
    "@": path.resolve(__dirname,"src"), //AÑADIR ALIAS DE RUTA en vite.config dentgro del resolve
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
})
