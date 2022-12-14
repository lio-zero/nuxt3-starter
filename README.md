# Nuxt 3 Starter

> **WARNING**๏ผNuxt 3 now in RC version. Not recommended for production use.
>
> [Check out the Nuxt 3 roadmap](https://v3.nuxtjs.org/community/roadmap)

First, learn [how Nuxt 3 works](https://v3.nuxtjs.org/guide/concepts/).

> Tips: @nuxtjs/i18n is unstable, the project is not working for the time being, if you need an i18N replacement, you can use @intlify/nuxt3
>
> reference: [vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3).

## Preview

<p align="center">
  <a href="https://stackblitz.com/github/lio-zero/nuxt3-starter" title="Open In Stackblitz">
    <img src="https://developer.stackblitz.com/img/open_in_stackblitz.svg" alt="Open In Stackblitz">
  </a>
</p>

## Features

- ๐ [Nuxt 3](https://v3.nuxtjs.org/) - SSR, ESR, File-based routing, components auto importing, modules, etc.
- โก๏ธ [Vite](https://vitejs.dev/) - Instant HMR
- ๐จ [UnoCSS](https://github.com/antfu/unocss) - The instant on-demand atomic CSS engine.
- ๐ Use icons from any icon sets in Pure CSS, powered by [UnoCSS](https://github.com/unocss/unocss/tree/main/packages/preset-icons)
- ๐ฅ The `<script setup>` syntax
- ๐ [State Management via Pinia](https://pinia.esm.dev/)
- ๐ Layout system
- ๐ฅ APIs auto importing - for Composition API, VueUse and custom composables.
- ๐ Zero-config cloud functions and deploy
- ๐ฆพ TypeScript, of course

## Plugins

- ๐จ [@unocss/nuxt](https://github.com/unocss/unocss/tree/main/packages/nuxt) - Nuxt module for UnoCSS
- ๐คน [unplugin-icons](https://github.com/antfu/unplugin-icons) - Use icons from any iconsets
- ๐ [@pinia/nuxt](https://pinia.esm.dev/ssr/nuxt.html) - Using Pinia with Nuxt 3
- ๐ [@nuxtjs/i18n](https://i18n.nuxtjs.org/) - Nuxt 3 Module for vue-i18n-next
- ๐ ๏ธ [@vueuse/nuxt3](https://vueuse.org/nuxt/readme.html#vueuse-nuxt) - This is an add-on of VueUse, which provides better Nuxt integration auto-import capabilities.

## IDE

We recommend using [VS Code](https://code.visualstudio.com/) with [Volar](https://github.com/johnsoncodehk/volar) to get the best experience (You might want to disable Vetur if you have it).

## Coding Style

[ESLint](https://eslint.org/) with [@antfu/eslint-config](https://github.com/antfu/eslint-config), single quotes, no semi.

Use [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged) to verify the code before submission.

The following specifications are not considered by the authors and are left to your own choice:

- [prettier](https://github.com/prettier/prettier)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [stylelint](https://github.com/stylelint/stylelint)
- [commitizen](https://github.com/commitizen-tools/commitizen)

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

 โจ Your solid Nuxt project is just created! Next steps:
 ๐  cd my-nuxt3-app
 ๐ฟ  Install dependencies with `npm install` or `yarn install` or `pnpm install -shamefully-hoist`
 ๐  Start development server with `npm run dev` or `yarn dev` or `pnpm run dev`
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
