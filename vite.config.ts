import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// @ts-ignore
import viteCompression from 'vite-plugin-compression'
// @ts-ignore
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    // Generate Gzip files (.gz) for all assets
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: false
    }),
    // Generate Brotli files (.br) for all assets
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
      deleteOriginFile: false
    }),
    // Dynamic sitemap auto-generation on build
    sitemap({
      hostname: 'https://krinakhunt.in',
      dynamicRoutes: ['/about', '/projects', '/skills', '/contact']
    })
  ],
})
