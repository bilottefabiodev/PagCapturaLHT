import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      // 👇 BLOCO NOVO DE PERMISSÃO 👇
      preview: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: ['lp.fodaenterprise.com.br', 'www.lp.fodaenterprise.com.br']
      },
      // 👆 FIM DO BLOCO NOVO 👆
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
