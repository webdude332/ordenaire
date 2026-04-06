// import { wayfinder } from '@laravel/vite-plugin-wayfinder';
// import tailwindcss from '@tailwindcss/vite';
// import react from '@vitejs/plugin-react';
// import laravel from 'laravel-vite-plugin';
// import { defineConfig } from 'vite';
// import svgr from 'vite-plugin-svgr'; // Add this import

// export default defineConfig({
//     plugins: [
//         laravel({
//             input: ['resources/css/app.css', 'resources/js/app.tsx'],
//             ssr: 'resources/js/ssr.tsx',
//             refresh: true,
//         }),
//         react({
//             babel: {
//                 plugins: ['babel-plugin-react-compiler'],
//             },
//         }),
//         svgr({  // Add this plugin
//             svgrOptions: {
//                 icon: true,
//             },
//         }),
//         tailwindcss(),
//         wayfinder({
//             formVariants: true,
//         }),
//     ],
//     esbuild: {
//         jsx: 'automatic',
//     },
// });


//superadmin

import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
        tailwindcss(),
        wayfinder({
            formVariants: true,
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@superadmin': path.resolve(__dirname, 'resources/js/superadmin'),
            '@shared': path.resolve(__dirname, 'resources/js/shared'),
            '@admin': path.resolve(__dirname, 'resources/js/admin'),
        },
    },
    esbuild: {
        jsx: 'automatic',
    },
});