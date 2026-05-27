<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Bell, Search } from 'lucide-vue-next'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { STATS } from '@/data/mock'
import { useUiStore } from '@/stores/ui'

const uiStore = useUiStore()
const { searchQuery } = storeToRefs(uiStore)
</script>

<template>
  <header
    class="h-20 border-b border-border flex items-center justify-between px-6 bg-background shrink-0"
  >
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2 text-sm font-medium">
        <span class="text-muted-foreground">Win Rate:</span>
        <span class="text-green-500">{{ STATS.winRate }}</span>
      </div>
      <Separator orientation="vertical" class="h-4" />
      <div class="flex items-center gap-2 text-sm font-medium">
        <span class="text-muted-foreground">Profit Factor:</span>
        <span>{{ STATS.profitFactor }}</span>
      </div>
      <Separator orientation="vertical" class="h-4" />
      <Badge variant="secondary" class="rounded-full px-3 py-1.5 text-sm font-normal">
        <span class="text-muted-foreground mr-1">Broker:</span>
        <span class="font-semibold">{{ STATS.broker }}</span>
      </Badge>
    </div>

    <div class="flex items-center gap-4">
      <div class="relative hidden md:block">
        <Search
          class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground"
        />
        <Input
          v-model="searchQuery"
          type="search"
          placeholder="Search trades, tags..."
          class="pl-9 w-64 rounded-full"
        />
      </div>
      <Button variant="ghost" size="icon" class="relative rounded-full">
        <Bell class="size-5" />
        <span class="absolute top-0 right-1 size-2 bg-brand-orange rounded-full" />
        <span class="sr-only">Notifications</span>
      </Button>
      <Badge
        variant="secondary"
        class="rounded-full px-3 py-1.5 cursor-pointer hover:bg-accent transition-colors gap-2"
      >
        <Avatar class="size-6">
          <AvatarFallback class="bg-gradient-to-tr from-primary to-yellow-400 text-xs">
            T
          </AvatarFallback>
        </Avatar>
        <span class="text-sm font-medium">0x7cdb...036a</span>
      </Badge>
    </div>
  </header>
</template>
