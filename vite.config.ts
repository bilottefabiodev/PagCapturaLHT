import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // Configuração para desenvolvimento local
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      // 👇 BLOCO NOVO QUE CORRIGE O ERRO NO EASYPANEL 👇
      preview: {
        port: 3000,
        host: '0.0.0.0',
        allowedHosts: [
          'lp.fodaenterprise.com.br', 
          'www.lp.fodaenterprise.com.br',
          '.easypanel.host', // Libera também domínios temporários do Easypanel
          'all' // Em último caso, libera tudo (útil para debug)
        ]
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
