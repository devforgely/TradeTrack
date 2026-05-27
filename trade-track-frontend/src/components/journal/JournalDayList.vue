<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Frown, Smile } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useJournalStore } from '@/stores/journal'

const journalStore = useJournalStore()
const { journalDays, selectedDate } = storeToRefs(journalStore)
</script>

<template>
  <Card class="flex flex-col overflow-hidden lg:w-1/3">
    <CardHeader class="border-b">
      <CardTitle class="text-lg">Trading Days</CardTitle>
    </CardHeader>
    <CardContent class="p-0 flex-1 overflow-y-auto">
      <button
        v-for="day in journalDays"
        :key="day.date"
        type="button"
        :class="
          cn(
            'w-full text-left p-4 border-b border-border/50 transition-colors border-l-4',
            selectedDate === day.date
              ? 'bg-primary/5 border-l-primary'
              : 'border-l-transparent hover:bg-accent/50',
          )
        "
        @click="journalStore.selectDate(day.date)"
      >
        <div class="flex justify-between items-center mb-1">
          <span class="font-medium text-sm">{{ day.dateFormatted }}</span>
          <Smile v-if="day.mood === 'good'" class="size-4 text-green-500" />
          <Frown v-else-if="day.mood === 'bad'" class="size-4 text-red-500" />
        </div>
        <p class="text-xs text-muted-foreground line-clamp-2">{{ day.excerpt }}</p>
        <div class="mt-2 flex gap-2">
          <Badge variant="secondary" class="text-xs">{{ day.tradeCount }} Trades</Badge>
          <Badge
            :variant="day.pnl >= 0 ? 'default' : 'destructive'"
            class="text-xs bg-opacity-30"
          >
            {{ day.pnl >= 0 ? '+' : '-' }}${{ Math.abs(day.pnl) }}
          </Badge>
        </div>
      </button>
    </CardContent>
  </Card>
</template>
