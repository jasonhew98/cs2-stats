import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [
    react(),
    svgr({ dimensions: false, svgo: false, typescript: true }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '$': 'jquery',
      'jQuery': 'jquery',
      'jquery': 'jquery',
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
