<script lang="ts" setup>
import { useLang } from '../composables/useLang'

const { t, locale, availableLocales } = useLang()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <button class="icon-btn !outline-none mx-2" :title="t('toggle_langs')" @click="toggleLocales()">
    <div i-carbon-language />
  </button>
</template>
