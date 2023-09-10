import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/src/main.tsx'], 
            refresh: true,
            buildDirectory: "/build",
        }),
    ],
});
