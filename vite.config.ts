import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const isPagesBuild = process.env.PAGES === '1'

const config = defineConfig({
  base: process.env.BASE_PATH || '/',
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    ...(isPagesBuild
      ? []
      : [
          nitro({
            rollupConfig: { external: [/^@sentry\//] },
          }),
          tanstackStart(),
        ]),
    viteReact(),
  ],
  build: isPagesBuild ? { outDir: 'dist' } : undefined,
})

export default config
