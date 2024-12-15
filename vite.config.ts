import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import svgr from "vite-plugin-svgr"

import monacoEditorPlugin, { type IMonacoEditorOpts } from "vite-plugin-monaco-editor"
const monacoEditorPluginDefault = (monacoEditorPlugin as any).default as (options: IMonacoEditorOpts) => any


export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        svgProps: {
          className: "icon",
        },
        prettier: false,
        dimensions: false,
      },
    }),
    monacoEditorPluginDefault({}),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 5200
  }
})
