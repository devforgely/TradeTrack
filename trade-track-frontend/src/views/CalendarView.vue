<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
import PlaceholderView from '@/components/shared/PlaceholderView.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <PageHeader title="Calendar" :icon="CalendarDays" />
    <PlaceholderView
      title="Trading Calendar"
      description="A monthly calendar view of your trades and PnL will appear here."
      :icon="CalendarDays"
      icon-class="bg-purple-500/10 text-purple-500"
    />
  </div>
</template>
