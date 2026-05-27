<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Filter } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useTradesStore } from '@/stores/trades'

const tradesStore = useTradesStore()
const { dateFilter, patternFilter, mistakeFilter } = storeToRefs(tradesStore)
</script>

<template>
  <Card>
    <CardContent class="flex flex-wrap gap-4 items-center pt-6">
      <div class="flex items-center gap-2">
        <Filter class="size-4 text-muted-foreground" />
        <span class="text-sm font-medium">Filters:</span>
      </div>

      <Select v-model="dateFilter">
        <SelectTrigger class="w-[160px]">
          <SelectValue placeholder="All Dates" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Dates</SelectItem>
          <SelectItem value="7d">Last 7 Days</SelectItem>
          <SelectItem value="30d">Last 30 Days</SelectItem>
          <SelectItem value="year">This Year</SelectItem>
        </SelectContent>
      </Select>

      <Select v-model="patternFilter">
        <SelectTrigger class="w-[160px]">
          <SelectValue placeholder="All Patterns" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Patterns</SelectItem>
          <SelectItem value="breakout">Breakout</SelectItem>
          <SelectItem value="pullback">Pullback</SelectItem>
          <SelectItem value="reversal">Reversal</SelectItem>
        </SelectContent>
      </Select>

      <Select v-model="mistakeFilter">
        <SelectTrigger class="w-[160px]">
          <SelectValue placeholder="All Mistakes" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Mistakes</SelectItem>
          <SelectItem value="fomo">FOMO</SelectItem>
          <SelectItem value="early exit">Early Exit</SelectItem>
          <SelectItem value="revenge">Revenge Trading</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="link"
        class="ml-auto text-primary p-0 h-auto"
        @click="tradesStore.clearFilters()"
      >
        Clear All
      </Button>
    </CardContent>
  </Card>
</template>
