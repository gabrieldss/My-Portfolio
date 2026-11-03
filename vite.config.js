import { defineConfig } from 'vite';

export default defineConfig({
  base: '/My-Portfolio/',
  build: { outDir: 'build', assetsInlineLimit: 0 },
});
