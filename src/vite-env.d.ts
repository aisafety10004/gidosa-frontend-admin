/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GIDOSA_ADMIN_BACKEND_API_URL: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  