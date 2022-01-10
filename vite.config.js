import { defineConfig } from 'vite'
import macrosPlugin from 'vite-plugin-babel-macros'
import reactRefresh from '@vitejs/plugin-react-refresh'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString()
          }
        },
      },
    },
  },
  define: {
    'process.env': {},
  },
  esbuild: {
    jsxFactory: 'jsx',
    jsxInject: `
      import React from 'react';
      import { jsx } from '@emotion/react';
    `,
  },
  plugins: [reactRefresh(), macrosPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
