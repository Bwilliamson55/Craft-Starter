import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'
import ViteRestart from 'vite-plugin-restart';
import {visualizer} from 'rollup-plugin-visualizer';
import {nodeResolve} from '@rollup/plugin-node-resolve';

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
    origin: 'http://localhost:3000',
    watch: {
      usePolling: true
    },
    fs: {
      strict: false
    },
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  }
}));
