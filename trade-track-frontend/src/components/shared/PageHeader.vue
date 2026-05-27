<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  title: string
  icon?: Component
}>()
</script>

<template>
  <div class="flex justify-between items-center">
    <h1 class="text-2xl font-bold tracking-tight capitalize flex items-center gap-3">
      <component
        :is="icon"
        v-if="icon"
        class="size-6 text-brand-orange"
        aria-hidden="true"
      />
      {{ title }}
    </h1>
    <slot name="actions" />
  </div>
</template>
