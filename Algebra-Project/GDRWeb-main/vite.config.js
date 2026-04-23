import { defineConfig } from 'vite';

export default defineConfig({
  base: './', // Makes sure your 3D assets load correctly
  build: {
    rollupOptions: {
      input: 'index.html' // This kills the "Could not resolve src/index.ts" error
    }
  },
  server: {
    open: '/index.html',
  }
});
