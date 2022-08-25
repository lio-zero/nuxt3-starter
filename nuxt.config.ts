import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// Nuxt 2 Migrate to Nuxt 3：https://v3.nuxtjs.org/migration/configuration
// Nuxt Configuration Reference：https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: [
    '@unocss/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    '/styles/main.css',
  ],
  unocss: {
    icons: true,
    attributify: true,
    webFonts: true,
    typography: true,
    wind: true,
    shortcuts: [
      ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
      ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ],
  },
  vite: {
    plugins: [
      Components({
        dts: 'types/components.d.ts',
        resolvers: [
          // 自动注册图标组件
          IconsResolver({
            componentPrefix: '',
          }),
        ],
      }),
    ],
  },
})
