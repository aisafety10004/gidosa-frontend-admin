import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: [
        {find: "@", replacement: "/src"},
        {find: "node_modules", replacement: "/node_modules"},
      ],
    },
    server: {
      port: 3503,
      allowedHosts: ['dev-admin-gidosa.gidosa.net'] // 여기에 호스트 추가!
    },
    preview: {
      port: 3503,
    },
  };
});