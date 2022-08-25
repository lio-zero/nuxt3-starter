<script setup>
import { isDark, toggleDark } from './composables/dark'
</script>

<template>
  <NuxtWelcome class="dark:important-bg-#001e26" text-black dark:important-text-white />
  <main class="fixed z-100 w100% bottom-0 px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <nav text-xl mt-6>
      <button class="icon-btn mx-2 !outline-none" title="切换深色模式" @click="toggleDark()">
        <div i="carbon-sun dark:carbon-moon" />
      </button>

      <a
        class="icon-btn mx-2" rel="noreferrer" href="https://github.com/lio-zero/nuxt3-starter" target="_blank"
        title="GitHub"
      >
        <div i-carbon-logo-github />
      </a>
    </nav>
  </main>
</template>
