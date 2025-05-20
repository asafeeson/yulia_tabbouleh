interface ImportMetaEnv {
  readonly VITE_MEDUSA_BACKEND_URL?: string;
  readonly MODE: string;
  // Добавьте другие переменные окружения по мере необходимости
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
