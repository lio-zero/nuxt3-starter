<script setup lang="ts">
import { availableLocales } from '~/locales/availableLocales'

const { t, locale } = useLang()

const switchLocalePath = useSwitchLocalePath()

const local = computed(() => {
  return locale.value
})
</script>

<template>
  <nuxt-link
    v-for="item in availableLocales"
    :key="item.iso"
    :to="switchLocalePath(item.iso)"
    class="!outline-none"
    :title="t('button.toggle_langs')"
  >
    <div i-carbon-language />
  </nuxt-link>
</template>
