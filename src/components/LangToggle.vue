<script lang="ts" setup>
const { t, locale, availableLocales } = useLang()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <button class="!outline-none" :title="t('button.toggle_langs')" @click="toggleLocales()">
    <div i-carbon-language />
  </button>
</template>
