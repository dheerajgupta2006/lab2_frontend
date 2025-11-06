import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/',  // 👈 Added: ensures all assets load under /ecommerce/
  server: {
    port: 2069,
  },
})
