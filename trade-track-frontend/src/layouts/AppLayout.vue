<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppSidebar from '@/components/layout/AppSidebar.vue'
</script>

<template>
  <div class="flex h-screen w-full overflow-hidden">
    <AppSidebar />
    <main class="flex-1 flex flex-col h-full overflow-hidden min-w-0">
      <AppHeader />
      <div class="flex-1 overflow-y-auto p-6 md:p-8">
        <div class="max-w-7xl mx-auto flex flex-col gap-6">
          <RouterView />
        </div>
      </div>
    </main>
  </div>
</template>
