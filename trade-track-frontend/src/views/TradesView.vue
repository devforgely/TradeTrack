<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { List, Pencil, Upload } from 'lucide-vue-next'
import PageHeader from '@/components/shared/PageHeader.vue'
import TradeCard from '@/components/trades/TradeCard.vue'
import TradeFilters from '@/components/trades/TradeFilters.vue'
import { Button } from '@/components/ui/button'
import { useTradesStore } from '@/stores/trades'

const tradesStore = useTradesStore()
const { filteredTrades } = storeToRefs(tradesStore)
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
  <div class="flex flex-col gap-6">
    <PageHeader title="Trades & Imports" :icon="List">
      <template #actions>
        <div class="flex gap-3">
          <Button variant="outline" @click="triggerImport">
            <Upload class="size-4 mr-2" />
            Import Broker Data
          </Button>
          <Button>
            <Pencil class="size-4 mr-2" />
            New Manual Trade
          </Button>
        </div>
      </template>
    </PageHeader>

    <TradeFilters />

    <div class="grid gap-4">
      <TradeCard v-for="trade in filteredTrades" :key="trade.id" :trade="trade" />
    </div>

    <input
      ref="fileInput"
      type="file"
      class="hidden"
      accept=".csv,.xlsx"
      @change="handleImport"
    />
  </div>
</template>
