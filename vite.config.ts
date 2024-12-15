/* eslint-disable import/no-extraneous-dependencies */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { viteStaticCopy } from 'vite-plugin-static-copy';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true,
      },
      include: '**/*.svg',
    }),


    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/avatars/*',
          dest: 'assets/avatars',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
