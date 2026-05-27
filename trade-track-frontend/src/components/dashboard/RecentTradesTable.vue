<script setup lang="ts">
import { ThumbsDown, ThumbsUp } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import AssetAvatar from '@/components/shared/AssetAvatar.vue'
import PnlText from '@/components/shared/PnlText.vue'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { useTradesStore } from '@/stores/trades'
import { storeToRefs } from 'pinia'

const router = useRouter()
const tradesStore = useTradesStore()
const { recentTrades } = storeToRefs(tradesStore)
</script>

<template>
  <Card>
    <CardHeader class="flex flex-row items-center justify-between space-y-0">
      <CardTitle class="text-base">Recent Setups</CardTitle>
      <Button variant="link" class="text-primary p-0 h-auto" @click="router.push('/trades')">
        View All
      </Button>
    </CardHeader>
    <CardContent class="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead>Entry/Exit Date</TableHead>
            <TableHead>PnL</TableHead>
            <TableHead>MFE</TableHead>
            <TableHead>Type</TableHead>
            <TableHead class="text-right">Review</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow v-for="trade in recentTrades" :key="trade.id">
            <TableCell>
              <div class="flex items-center gap-3">
                <AssetAvatar :symbol="trade.symbol" :color-class="trade.colorClass" size="sm" />
                <div>
                  <div class="font-medium">{{ trade.symbol }}</div>
                  <div class="text-xs text-muted-foreground">{{ trade.side }}</div>
                </div>
              </div>
            </TableCell>
            <TableCell class="text-sm">{{ trade.date }}</TableCell>
            <TableCell class="text-sm font-medium">
              <PnlText :value="trade.pnl" />
            </TableCell>
            <TableCell class="text-sm text-muted-foreground">{{ trade.mfe }}%</TableCell>
            <TableCell>
              <Badge variant="secondary">{{ trade.setup }}</Badge>
            </TableCell>
            <TableCell class="text-right">
              <div class="flex justify-end gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  class="size-8 hover:text-green-500"
                  title="Mark as Good Trade"
                >
                  <ThumbsUp class="size-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  class="size-8 hover:text-red-500"
                  title="Mark as Bad Trade"
                >
                  <ThumbsDown class="size-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</template>
