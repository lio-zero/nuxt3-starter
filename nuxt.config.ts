import { defineNuxtConfig } from 'nuxt'

// Nuxt 2 Migrate to Nuxt 3：https://v3.nuxtjs.org/migration/configuration
// Nuxt Configuration file：https://v3.nuxtjs.org/guide/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src',
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
      link: [{ rel: 'icon', type: 'image/png', href: '/nuxt.png' }],
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
          { code: 'en', iso: 'en-US', file: 'en.yml' },
          { code: 'zh', iso: 'zh-CN', file: 'zh-CN.yml' },
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
    viteNode: false,
  },
  css: [
    '~/styles/main.scss',
  ],
  unocss: {
    preflight: true,
  },
})
