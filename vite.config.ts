import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    css: {
      postcss: {
        plugins: [tailwindcss()],
      },
    },
    resolve: {
      alias: [
        { find: '@', replacement: '/src' },
        { find: 'node_modules', replacement: '/node_modules' },
      ],
    },
    server: {
      port: 3100,
      allowedHosts: ['dev-admin-gidosa.gidosa.net'], // 여기에 호스트 추가!
    },
    preview: {
      port: 3100,
    },
  };
});
