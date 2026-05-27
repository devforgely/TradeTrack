<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { TimeRange } from '@/types/trade'
import { useThemeStore } from '@/stores/theme'
import { useTradesStore } from '@/stores/trades'
import { STATS } from '@/data/mock'

const tradesStore = useTradesStore()
const themeStore = useThemeStore()
const { timeRange } = storeToRefs(tradesStore)
const { isDark } = storeToRefs(themeStore)

const ranges: TimeRange[] = ['1D', '1W', '1M', '1Y', 'All']

const volumeBars = computed(() =>
  Array.from({ length: 40 }, (_, i) => ({
    x: i * 20 - 10,
    y: 180 + (i % 7) * 1.5,
    height: 12 + (i % 5) * 2,
  })),
)

const strokeColor = computed(() => (isDark.value ? '#FFFFFF' : '#10B981'))
const fillGradient = computed(() => (isDark.value ? 'url(#gradDark)' : 'url(#gradLight)'))
</script>

<template>
  <Card class="lg:col-span-2 overflow-hidden">
    <CardHeader class="flex flex-row items-start justify-between space-y-0 pb-2">
      <div>
        <CardTitle class="text-sm font-medium text-muted-foreground mb-1">
          Total PnL
        </CardTitle>
        <div class="text-3xl font-bold flex items-baseline gap-2">
          ${{ Math.floor(STATS.totalPnl).toLocaleString()
          }}<span class="text-sm text-muted-foreground font-normal"
            >.{{ String(STATS.totalPnl).split('.')[1] ?? '00' }}</span
          >
          <span class="text-sm text-green-500 font-medium ml-2">{{
            STATS.totalPnlChange
          }}</span>
        </div>
      </div>
      <div class="flex bg-muted rounded-lg p-1">
        <Button
          v-for="range in ranges"
          :key="range"
          variant="ghost"
          size="sm"
          :class="[
            'px-3 py-1 h-auto text-xs font-medium rounded-md',
            timeRange === range && 'bg-background shadow text-foreground',
          ]"
          @click="timeRange = range"
        >
          {{ range }}
        </Button>
      </div>
    </CardHeader>
    <CardContent>
      <div class="min-h-[220px] relative mt-2">
        <svg
          viewBox="0 0 800 200"
          class="w-full h-full overflow-visible"
          preserveAspectRatio="none"
          aria-label="Performance chart"
        >
          <line
            v-for="y in [50, 100, 150]"
            :key="y"
            x1="0"
            :y1="y"
            x2="800"
            :y2="y"
            stroke="currentColor"
            class="text-border"
            stroke-dasharray="4"
          />
          <path
            d="M0,150 Q40,120 80,140 T160,110 T240,130 T320,80 T400,90 T480,40 T560,60 T640,20 T720,40 T800,10"
            fill="none"
            :stroke="strokeColor"
            stroke-width="2"
            class="chart-path"
          />
          <path
            d="M0,150 Q40,120 80,140 T160,110 T240,130 T320,80 T400,90 T480,40 T560,60 T640,20 T720,40 T800,10 L800,200 L0,200 Z"
            :fill="fillGradient"
            opacity="0.3"
          />
          <defs>
            <linearGradient id="gradDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.2" />
              <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0" />
            </linearGradient>
            <linearGradient id="gradLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#10B981" stop-opacity="0.3" />
              <stop offset="100%" stop-color="#10B981" stop-opacity="0" />
            </linearGradient>
          </defs>
          <g class="text-border/50" fill="currentColor">
            <rect
              v-for="(bar, i) in volumeBars"
              :key="i"
              :x="bar.x"
              :y="bar.y"
              width="8"
              :height="bar.height"
            />
          </g>
        </svg>
      </div>
      <div
        class="flex justify-between text-xs text-muted-foreground mt-2 border-t border-border pt-4"
      >
        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span
        ><span>Sat</span><span>Sun</span>
      </div>
    </CardContent>
  </Card>
</template>
