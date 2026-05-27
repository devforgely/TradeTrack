<script setup lang="ts">
import type { Component } from 'vue'
import { Card, CardContent } from '@/components/ui/card'

defineProps<{
  title: string
  description: string
  icon: Component
  iconClass?: string
}>()
</script>

<template>
  <Card class="flex-1">
    <CardContent
      class="flex flex-col items-center justify-center text-center min-h-[400px] py-12"
    >
      <div
        :class="[
          'size-16 rounded-full flex items-center justify-center mb-4',
          iconClass ?? 'bg-primary/10 text-primary',
        ]"
      >
        <component :is="icon" class="size-8" aria-hidden="true" />
      </div>
      <h2 class="text-2xl font-bold mb-2">{{ title }}</h2>
      <p class="text-muted-foreground max-w-md">{{ description }}</p>
      <slot />
    </CardContent>
  </Card>
</template>
