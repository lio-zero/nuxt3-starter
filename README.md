# Nuxt 3 Starter

> **WARNING**：Nuxt 3 now in RC version。Not recommended for production use.
>
> [Check out the Nuxt 3 roadmap](https://v3.nuxtjs.org/community/roadmap)

<!-- https://typescript.nuxtjs.org/ -->

First, learn [how Nuxt 3 works](https://v3.nuxtjs.org/guide/concepts/).

> reference: [vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3).

## Preview

<p align="center">
  <a href="https://stackblitz.com/github/lio-zero/nuxt3-starter" title="Open In Stackblitz">
    <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open In Stackblitz">
  </a>
</p>

## Features

- 💚 [Nuxt 3](https://v3.nuxtjs.org/) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- ⚡️ [Vite](https://vitejs.dev/) - Instant HMR
- 🎨 [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- 😃 Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/unocss/unocss/tree/main/packages/preset-icons)
- 🔥 The `<script setup>` syntax
- 🍍 [State Management via Pinia](https://pinia.esm.dev/)
- 📑 Layout system
- 📥 APIs auto importing - for Composition API, VueUse and custom composables.
- 🏎 Zero-config cloud functions and deploy
- 🦾 TypeScript, of course

## Plugins

- 🎨 [@unocss/nuxt](https://github.com/unocss/unocss/tree/main/packages/nuxt) - Nuxt module for UnoCSS
- 🤹 [unplugin-icons](https://github.com/antfu/unplugin-icons) - Use icons from any iconsets
- 🍍 [@pinia/nuxt](https://pinia.esm.dev/ssr/nuxt.html) - Using Pinia with Nuxt 3
- 🌍 [@nuxtjs/i18n](https://i18n.nuxtjs.org/) - Nuxt 3 Module for vue-i18n-next
- 🛠️ [@vueuse/nuxt3](https://vueuse.org/nuxt/readme.html#vueuse-nuxt) - This is an add-on of VueUse, which provides better Nuxt integration auto-import capabilities.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).

## Coding Style

[ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

## Try it now

> Nuxt3-starter requires Node >=14.18

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/lio-zero/nuxt3-starter/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history:

```bash
npx degit lio-zero/nuxt3-starter my-nuxt3-app
cd my-nuxt3-starter
pnpm i --shamefully-hoist # If you don't have pnpm installed, run: npm install -g pnpm
```

Or nuxi:

```bash
npx nuxi init -t lio-zero/nuxt3-starter my-nuxt3-app

 ✨ Your solid Nuxt project is just created! Next steps:
 📁  cd my-nuxt3-app
 💿  Install dependencies with `npm install` or `yarn install` or `pnpm install -shamefully-hoist`
 🚀  Start development server with `npm run dev` or `yarn dev` or `pnpm run dev`
```

## Usage

### Development Server

Start the development server on `http://localhost:4399`

```bash
pnpm dev
```

### Production Server

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.

## License

MIT [@lio-zero](https://github.com/lio-zero)
