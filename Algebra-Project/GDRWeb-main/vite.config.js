import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Essential for textures to load on GitHub Pages
  server: {
    open: '/index.html',
  },
  build: {
    outDir: 'dist',
  }
});
