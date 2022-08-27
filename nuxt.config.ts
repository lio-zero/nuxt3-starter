import { defineNuxtConfig } from 'nuxt'
import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'

// Nuxt 2 Migrate to Nuxt 3：https://v3.nuxtjs.org/migration/configuration
// Nuxt Configuration file：https://v3.nuxtjs.org/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nuxt 3 Starter',
      titleTemplate: '%s - Nuxt 3 Starter',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Nuxt 3 Starter',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },
  typescript: {
    // https://v3.nuxtjs.org/api/configuration/nuxt.config#shim
    shim: false,
  },
  modules: [
    '@unocss/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    ['@nuxtjs/i18n',
      // https://i18n.nuxtjs.org/
      {
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.json' },
          { code: 'zh', iso: 'zh-CN', file: 'zh-CN.json' },
        ],
        defaultLocale: 'en',
        langDir: 'locales/',
      },
    ],
  ],
  css: [
    '~/styles/main.scss',
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
          IconsResolver({
            componentPrefix: '',
          }),
        ],
      }),
    ],
  },
})
