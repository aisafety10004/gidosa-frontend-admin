import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      svgr({
        include: '**/*.svg?react',
      }),
    ],
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
      port: 8010,
      // allowedHosts: ['dev-admin-gidosa.gidosa.net'], // 여기에 호스트 추가!
    },
    preview: {
      port: 3100,
    },
  };
});
