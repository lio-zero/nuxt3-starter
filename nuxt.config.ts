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
    '@nuxtjs/i18n',
  ],
  typescript: {
    shim: false,
  },
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '~/styles/main.scss',
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
  // https://i18n.nuxtjs.org/
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'zh', file: 'zh-CN.json' },
    ],
    lazy: true,
    langDir: 'locales/',
    defaultLocale: 'zh',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root',
    },
    vueI18n: {
      legacy: false,
      locale: 'zh',
      fallbackLocale: 'zh',
    },
  },
})
