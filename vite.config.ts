import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import Terminal from 'vite-plugin-terminal';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    react(),
    nodePolyfills({
      globals: {
        Buffer: true
      }
    }),
    // 移除 mkcert 插件，因為我們已經有現成的證書
    Terminal()
  ],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, '.key')), // 私鑰文件路徑
      cert: fs.readFileSync(path.resolve(__dirname, '.pem')), // 證書文件路徑
    },
    port: 8088, 
    host: '0.0.0.0' 
  }
});