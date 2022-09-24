import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'
import ViteRestart from 'vite-plugin-restart';
import viteCompression from 'vite-plugin-compression';
import {visualizer} from 'rollup-plugin-visualizer';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import critical from 'rollup-plugin-critical';

import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({command}) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: '../web/dist',
    rollupOptions: {
      input: {
        app: './src/js/app.ts',
      },
      output: {
        sourcemap: true
      },
    }
  },
  plugins: [
    critical({
      criticalUrl: 'http://pairadice.ddev.site',
      criticalBase: '../web/dist/criticalcss/',
      criticalPages: [
        {uri: '/', template: 'index'},
      ],
      criticalConfig: {}
    }),
    nodeResolve({
      moduleDirectories: [
        path.resolve('./node_modules'),
      ],
    }),
    ViteRestart({
      reload: [
        '../templates/**/*',
        '../templates/*',
        './src/vue/**/*',
        './src/js/**/*',
        './src/css/components/**/*',
      ],
    }),
    vue(),
    viteCompression({
      filter: /\.(js|mjs|json|css|map)$/i
    }),
    visualizer({
      filename: './src/stats.html',
      template: 'treemap',
      sourcemap: true,
    }),
  ],
  publicDir: './src/public',
  resolve: {
    alias: {
      '@': '/src',
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
    preserveSymlinks: true,
  },
  server: {
    fs: {
      strict: false
    },
    host: '0.0.0.0',
    origin: 'http://localhost:3000',
    port: 3000,
    strictPort: true,
  }
}));
