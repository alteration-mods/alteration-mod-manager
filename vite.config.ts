import { defineConfig } from 'vite'
import * as path from 'path';
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'

const aliasResolve = {
  alias: {
    '@src': path.resolve(__dirname, './src'),
  },
};

export default defineConfig({
  plugins: [
    react(),
    electron({
      entry: 'src/main/index.ts',
      vite: {
        build: {
          outDir: 'dist',
        },
        resolve: aliasResolve,
      },
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.join(__dirname, 'html/index.main.html'),
        settings: path.join(__dirname, 'html/index.settings.html'),
        welcome: path.join(__dirname, 'html/index.welcome.html'),
        wizard: path.join(__dirname, 'html/index.wizard.html'),
      },
    },
  },
  resolve: aliasResolve,
})
