<script setup lang="ts">
import { useUserStore } from './stores/title'
import { toggleDark } from './composables/dark'

const user = useUserStore()
const changeTitle = (e: any) => user.setNewName(e.target.textContent)

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
