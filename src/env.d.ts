/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_SPOTIFY_CLIENT_ID?: string;
    readonly VITE_APP_SPOTIFY_CALLBACK_HOST?: string;
    readonly VITE_APP_CLIENT_SECRET?: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }