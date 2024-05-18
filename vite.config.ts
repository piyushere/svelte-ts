import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import viteCompression from 'vite-plugin-compression';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), viteCompression(), tsconfigPaths()],
    base: `/${process.env.BASE_PATH || ''}`,
    resolve: {
        alias: {
            '@lib': path.resolve('./src/lib'),
            '@components': path.resolve('./src/lib/components'),
        },
    },
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
        },
    },
});
