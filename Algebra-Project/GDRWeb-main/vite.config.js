import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Essential for textures to load on GitHub Pages
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html' // This tells Vite to start with your HTML file
    }
  },
  server: {
    open: '/index.html',
  }
});
