import { defineConfig } from 'vite';

export default defineConfig({
  base: './', 
  build: {
    rollupOptions: {
      input: 'index.html' // This stops the "src/index.ts" crash
    }
  }
});
