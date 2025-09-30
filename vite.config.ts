import { fileURLToPath, URL } from 'node:url'

import federation from '@originjs/vite-plugin-federation'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 5002,
    host: true,
    cors: true,
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('-'),
        },
      },
    }),
    vueJsx(),
    vueDevTools(),
    federation({
      name: 'onboarding',
      exposes: {
        './app': './src/components/onboarding/main.ts',
        './onboarding': './src/components/onboarding/onboarding.vue',
        './onboarding/stepIndicator': './src/components/onboarding/stepIndicator.vue',
        './onboarding/stepNavigation': './src/components/onboarding/stepNavigation.vue',
        './onboarding/welcome': './src/components/onboarding/steps/welcome.vue',
        './onboarding/geolocation': './src/components/onboarding/steps/geolocation.vue',
        './onboarding/notifications': './src/components/onboarding/steps/notifications.vue',
        './onboarding/age': './src/components/onboarding/steps/age.vue',
        './onboarding/finish': './src/components/onboarding/steps/finish.vue',
        './onboarding/main.css': './src/assets/main.css',
      },
      shared: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      external: [], // Não externalizar nada
    },
  },
  preview: {
    port: 5002,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
