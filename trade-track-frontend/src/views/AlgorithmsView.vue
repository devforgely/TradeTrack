<script setup lang="ts">
import { Code2 } from 'lucide-vue-next'
import PageHeader from '@/components/shared/PageHeader.vue'
import PlaceholderView from '@/components/shared/PlaceholderView.vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex flex-col gap-6">
    <PageHeader title="Visual Scripting" :icon="Code2" />
    <PlaceholderView
      title="Visual Scripting Canvas"
      description="Build custom quantitative metrics and algorithmic rules using a node-based interface to evaluate your trades automatically."
      :icon="Code2"
      icon-class="bg-primary/10 text-primary size-20"
    >
      <Button class="mt-8 shadow-lg shadow-primary/20">Create New Script</Button>
    </PlaceholderView>
  </div>
</template>
