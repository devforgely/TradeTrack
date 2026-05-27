import { MOCK_ALL_TRADES, MOCK_RECENT_TRADES } from '@/data/mock'
import type { TimeRange, Trade } from '@/types/trade'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useTradesStore = defineStore('trades', () => {
  const recentTrades = ref<Trade[]>([...MOCK_RECENT_TRADES])
  const allTrades = ref<Trade[]>([...MOCK_ALL_TRADES])
  const timeRange = ref<TimeRange>('1W')

  const dateFilter = ref('all')
  const patternFilter = ref('all')
  const mistakeFilter = ref('all')

  const filteredTrades = computed(() => {
    return allTrades.value.filter((trade) => {
      if (patternFilter.value !== 'all') {
        const pattern = patternFilter.value.toLowerCase()
        const matchesPattern = trade.tags?.some((t) =>
          t.toLowerCase().includes(pattern),
        )
        if (!matchesPattern && trade.setup?.toLowerCase() !== pattern) {
          return false
        }
      }
      if (mistakeFilter.value !== 'all') {
        const mistake = mistakeFilter.value.toLowerCase()
        if (!trade.tags?.some((t) => t.toLowerCase().includes(mistake))) {
          return false
        }
      }
      return true
    })
  })

  function clearFilters() {
    dateFilter.value = 'all'
    patternFilter.value = 'all'
    mistakeFilter.value = 'all'
  }

  function triggerImport(fileName: string) {
    console.info(`Mock import started: ${fileName}`)
  }

  return {
    recentTrades,
    allTrades,
    timeRange,
    dateFilter,
    patternFilter,
    mistakeFilter,
    filteredTrades,
    clearFilters,
    triggerImport,
  }
})
