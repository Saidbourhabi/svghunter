import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Normalize Windows paths so manualChunks works reliably on win32.
          const normalizedId = id.replace(/\\/g, '/')
          if (normalizedId.includes('src/output/icons.js')) {
            return 'icons'
          }
        },
      },
    },
  },
})
