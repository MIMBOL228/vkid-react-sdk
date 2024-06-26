/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_VK_ID_APP_ID: string
    readonly VITE_VK_REDIRECT_URI: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}