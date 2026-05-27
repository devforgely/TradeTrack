<script setup lang="ts">
import { Image, Pencil } from 'lucide-vue-next'
import AssetAvatar from '@/components/shared/AssetAvatar.vue'
import PnlText from '@/components/shared/PnlText.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import type { Trade } from '@/types/trade'

defineProps<{
  trade: Trade
}>()
</script>

<template>
  <Card>
    <CardContent class="flex flex-col gap-4 pt-6">
      <div class="flex justify-between items-start gap-4">
        <div class="flex gap-4 items-center min-w-0">
          <AssetAvatar :symbol="trade.symbol" :color-class="trade.colorClass" />
          <div class="min-w-0">
            <h4 class="font-bold text-lg flex items-center gap-2 flex-wrap">
              {{ trade.symbol }}
              <Badge
                :variant="trade.side === 'Long' ? 'default' : 'destructive'"
                class="text-xs font-normal"
              >
                {{ trade.side }}
              </Badge>
            </h4>
            <span class="text-xs text-muted-foreground">
              {{ trade.date }} • Entry: {{ trade.entryPrice }} • Exit:
              {{ trade.exitPrice }}
            </span>
          </div>
        </div>
        <div class="text-right shrink-0">
          <div class="font-bold text-lg">
            <PnlText :value="trade.pnl" />
          </div>
          <div class="text-xs text-muted-foreground">
            MFE: {{ trade.mfe }}% | MAE: {{ trade.mae }}%
          </div>
        </div>
      </div>

      <div
        class="flex flex-wrap justify-between items-center gap-3 border-t border-border pt-4"
      >
        <div class="flex gap-2 flex-wrap">
          <Badge
            v-for="tag in trade.tags"
            :key="tag"
            variant="secondary"
            class="cursor-pointer hover:border-border"
          >
            #{{ tag }}
          </Badge>
          <Button variant="outline" size="sm" class="border-dashed text-muted-foreground">
            + Add Tag
          </Button>
        </div>
        <div class="flex gap-3">
          <Button variant="ghost" size="sm" class="text-muted-foreground hover:text-primary">
            <Image class="size-3.5 mr-1" />
            View Chart
          </Button>
          <Button variant="ghost" size="sm" class="text-muted-foreground hover:text-primary">
            <Pencil class="size-3.5 mr-1" />
            Annotate
          </Button>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
