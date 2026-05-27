import { usePreferredDark } from '@vueuse/core'
import { defineStore } from 'pinia'
import { computed, ref, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const prefersDark = usePreferredDark()
  const isDark = ref(true)

  const resolvedDark = computed(() => isDark.value)

  function applyTheme(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark)
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    applyTheme(isDark.value)
  }

  function initTheme() {
    isDark.value = prefersDark.value
    applyTheme(isDark.value)
  }

  watch(isDark, (dark) => applyTheme(dark), { immediate: false })

  return {
    isDark,
    resolvedDark,
    toggleTheme,
    initTheme,
  }
})
