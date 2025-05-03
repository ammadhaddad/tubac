<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const theme = localStorage.getItem('color-theme')

  if (theme === 'dark' || (!theme && userPrefersDark)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<template>
    <router-view />
  </template>  


<style scoped>

</style>
