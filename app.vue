<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useUserStore } from './stores/title'
import { toggleDark } from './composables/dark'
const { t, locale, availableLocales } = useI18n()

const user = useUserStore()
const changeTitle = (e: any) => user.setNewName(e.target.textContent)

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

watchEffect(() => {
  useHead({
    title: user.savedName,
  })
})
</script>

<template>
  <NuxtWelcome class="dark:important-bg-#001e26" text-black dark:important-text-white />

  <h2
    contenteditable font-semibold text-3xl mt-4 outline-width--0
    class="text-#00dc82 fixed z-100 w100% top-10 text-center text-md py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
    @input="changeTitle"
  >
    {{ user.savedName }}
  </h2>
  <p
    font-semibold text-3xl mt-4 outline-width--0
    class="text-#00dc82 fixed z-100 w100% top-20 text-center text-md py-2 px-4 sm:py-3 sm:px-6"
  >
    {{ t('hi', { desc: 'A Better Nuxt3 Starter' }) }}
  </p>
  <main class="fixed z-100 w100% bottom-0 px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <nav text-xl mt-6>
      <button class="icon-btn mx-2 !outline-none" :title="t('toggle_dark')" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a class="icon-btn mx-2" :title="t('toggle_langs')" @click="toggleLocales()">
        <div i-carbon-language />
      </a>

      <a
        class="icon-btn mx-2" rel="noreferrer" href="https://github.com/lio-zero/nuxt3-starter" target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </a>
    </nav>
  </main>
</template>
