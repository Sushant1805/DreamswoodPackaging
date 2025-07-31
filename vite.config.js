import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Performance optimizations
  build: {
    // Enable minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['./src/utils/index.js'],
        },
      },
    },
    
    // Asset optimization
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    
    // Source map for production debugging
    sourcemap: false,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 1000,
  },
  
  // CSS preprocessing
  css: {
    postcss: {
      plugins: [
        autoprefixer,
        cssnano({
          preset: ['default', {
            discardComments: { removeAll: true },
            normalizeWhitespace: true,
          }],
        }),
      ],
    },
  },
  
  // Server configuration
  server: {
    // Enable HTTP/2
    https: false, // Set to true with certificates for HTTP/2
    
    // Compression
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        compress: true,
      },
    },
  },
  
  // Preview server optimization
  preview: {
    port: 3000,
    open: true,
  },
  
  // Resolve configuration
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
  
  // Optimization
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['@vite/client', '@vite/env'],
  },
})
