<script setup lang="ts">
import { Eclipse } from 'lucide-vue-next'
import PlaceholderView from '@/components/shared/PlaceholderView.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <PageHeader title="Daily Overview" :icon="Eclipse" />
    <PlaceholderView
      title="Daily Overview"
      description="Your daily performance and key metrics will appear here."
      :icon="Eclipse"
      icon-class="bg-blue-500/10 text-blue-500"
    />
  </div>
</template>
