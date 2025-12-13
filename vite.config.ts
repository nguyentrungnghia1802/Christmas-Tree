import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Christmas-Tree/', // Đặt base path cho GitHub Pages
  plugins: [react()],
});
