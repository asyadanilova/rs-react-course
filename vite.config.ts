import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://react-app-danilovaasya.netlify.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
