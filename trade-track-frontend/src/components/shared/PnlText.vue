<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  value: number
  class?: string
}>()

const formatted = computed(() => {
  const sign = props.value >= 0 ? '+' : '-'
  return `${sign}$${Math.abs(props.value).toFixed(2)}`
})

const colorClass = computed(() =>
  props.value >= 0 ? 'text-green-500' : 'text-red-500',
)
</script>

<template>
  <span :class="[colorClass, props.class]">{{ formatted }}</span>
</template>
