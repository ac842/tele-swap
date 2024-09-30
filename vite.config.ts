import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import Terminal from 'vite-plugin-terminal';

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
        mkcert({ force: true }),
        Terminal()
    ],
    server: {
        port: 8088, // 修改端口為 8080
        host: '0.0.0.0' // 允許外部訪問
    }
});
