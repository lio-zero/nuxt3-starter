import { defineNuxtConfig } from 'nuxt'

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
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
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
  typescript: {
    // https://v3.nuxtjs.org/api/configuration/nuxt.config#shim
    shim: false,
  },
  colorMode: {
    classSuffix: '',
  },
  components: true,
  experimental: {
    reactivityTransform: true,
  },
  css: [
    '~/styles/main.scss',
  ],
  unocss: {
    preflight: true,
  },
})
