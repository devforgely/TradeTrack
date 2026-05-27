<script setup lang="ts">
import { onMounted } from 'vue'
import { TooltipProvider } from '@/components/ui/tooltip'
import AppLayout from '@/layouts/AppLayout.vue'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})
</script>

<template>
  <TooltipProvider>
    <AppLayout />
  </TooltipProvider>
</template>
