<script setup lang="ts">
const { t } = useLang()
</script>

<template>
  <div
    text="xl gray4"
    m-5
    flex
    justify-center
    gap-3
  >
    <NuxtLink i-carbon-campsite to="/" :title="t('button.home')" />

    <a
      i-carbon-logo-github
      href="https://github.com/lio-zero/nuxt3-starter"
      title="GitHub"
      target="_blank"
    />

    <DarkToggle />

    <LangToggle />
  </div>
</template>
