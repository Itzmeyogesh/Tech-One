import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize for low-memory servers (1GB RAM)
    target: 'esnext',
    minify: 'esbuild', // esbuild is faster and uses less memory than terser
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-framer': ['framer-motion'],
          'vendor-icons': ['react-icons'],
          'vendor-utils': ['react-scroll', 'react-simple-typewriter', 'react-parallax-tilt']
        },
        // Optimize asset file names
        assetFileNames: 'assets/[name].[hash][extname]',
        chunkFileNames: 'js/[name].[hash].js',
        entryFileNames: 'js/[name].[hash].js'
      }
    },
    // Reduce memory during build
    sourcemap: false,
    reportCompressedSize: false
  },
  server: {
    host: true,
    port: 3030
  },
  preview: {
    host: true,
    port: 4173
  }
})
