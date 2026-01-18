import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for GitHub Pages user site (xthebuilder.github.io)
  base: '/',
  build: {
    outDir: 'dist',
  },
})
