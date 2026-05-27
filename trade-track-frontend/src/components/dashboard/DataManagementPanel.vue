<script setup lang="ts">
import { ref } from 'vue'
import { Settings, Upload } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { STATS } from '@/data/mock'
import { useTradesStore } from '@/stores/trades'

const tradesStore = useTradesStore()
const fileInput = ref<HTMLInputElement | null>(null)

function triggerImport() {
  fileInput.value?.click()
}

function handleImport(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (file) {
    tradesStore.triggerImport(file.name)
  }
  input.value = ''
}
</script>

<template>
  <Card class="flex flex-col">
    <CardHeader class="flex flex-row items-center justify-between space-y-0">
      <CardTitle class="text-base">Data Management</CardTitle>
      <Button variant="ghost" size="icon" class="size-8">
        <Settings class="size-4" />
        <span class="sr-only">Data settings</span>
      </Button>
    </CardHeader>
    <CardContent class="flex flex-col flex-1 gap-4">
      <div class="rounded-xl p-4 border bg-muted/50 space-y-2">
        <div class="flex justify-between text-sm">
          <span class="text-muted-foreground">Last Import</span>
          <span class="font-medium">{{ STATS.lastImport }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-muted-foreground">Status</span>
          <span class="font-medium text-green-500">{{ STATS.importStatus }}</span>
        </div>
      </div>

      <button
        type="button"
        class="relative group cursor-pointer w-full text-left"
        @click="triggerImport"
      >
        <div
          class="absolute inset-0 bg-primary/20 rounded-xl blur group-hover:bg-primary/30 transition-all"
        />
        <div
          class="relative bg-card border border-primary/50 p-4 rounded-xl flex items-center justify-center gap-2"
        >
          <Upload class="size-5 text-primary" />
          <span class="font-medium">Import via CSV / API</span>
        </div>
      </button>

      <div class="mt-auto space-y-3 pt-4">
        <div class="flex justify-between text-sm">
          <span class="text-muted-foreground">Total Trades</span>
          <span class="font-medium">{{ STATS.totalTrades.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span class="text-muted-foreground">Data Quality</span>
          <span class="font-medium text-green-500">{{ STATS.dataQuality }}</span>
        </div>
        <Button class="w-full mt-2 shadow-lg shadow-primary/20">
          One-Click Clean Imports
        </Button>
      </div>
    </CardContent>

    <input
      ref="fileInput"
      type="file"
      class="hidden"
      accept=".csv,.xlsx"
      @change="handleImport"
    />
  </Card>
</template>
