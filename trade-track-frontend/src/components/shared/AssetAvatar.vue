<script setup lang="ts">
defineProps<{
  symbol: string
  colorClass?: string
  size?: 'sm' | 'md'
}>()
</script>

<template>
  <div
    :class="[
      'rounded-full bg-muted flex items-center justify-center font-bold shrink-0',
      size === 'sm' ? 'size-8 text-xs' : 'size-10 text-sm',
      colorClass,
    ]"
  >
    {{ symbol.charAt(0) }}
  </div>
</template>
