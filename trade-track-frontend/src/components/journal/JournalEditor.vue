<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Eye, Image, Pencil, ThumbsDown, ThumbsUp, Trash2 } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { useJournalStore } from '@/stores/journal'

const journalStore = useJournalStore()
const { selectedDay, draftExcerpt } = storeToRefs(journalStore)
</script>

<template>
  <Card class="flex flex-col lg:w-2/3 overflow-y-auto">
    <CardContent class="flex flex-col pt-6 min-h-full">
      <div class="flex justify-between items-center mb-6 gap-4">
        <div>
          <h2 class="text-2xl font-bold">{{ selectedDay?.dateFormatted }}</h2>
          <p class="text-sm text-muted-foreground">Psychology & Daily Review</p>
        </div>
        <div class="flex gap-1 bg-muted p-1 rounded-lg">
          <Button variant="ghost" size="icon" class="text-green-500" title="Good Day">
            <ThumbsUp class="size-5" />
          </Button>
          <Button variant="ghost" size="icon" class="text-red-500" title="Bad Day">
            <ThumbsDown class="size-5" />
          </Button>
        </div>
      </div>

      <Textarea
        v-model="draftExcerpt"
        class="min-h-40 resize-none mb-6"
        placeholder="Write about your mental state, discipline, and execution today..."
      />

      <h3 class="font-semibold text-lg mb-4">Chart Annotations</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="relative group rounded-xl overflow-hidden border bg-muted aspect-video flex items-center justify-center"
        >
          <div
            class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3"
          >
            <Button
              variant="secondary"
              size="icon"
              class="rounded-full bg-white/20 hover:bg-white/40 text-white border-0"
            >
              <Eye class="size-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              class="rounded-full bg-white/20 hover:bg-white/40 text-white border-0"
            >
              <Trash2 class="size-4" />
            </Button>
          </div>
          <svg viewBox="0 0 200 100" class="w-full h-full opacity-50 p-4">
            <path
              d="M10,80 L40,40 L70,50 L100,20 L130,60 L160,30 L190,50"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
            <circle cx="100" cy="20" r="4" fill="#F7931A" />
            <text x="100" y="10" fill="currentColor" font-size="10" text-anchor="middle">
              Entry
            </text>
          </svg>
        </div>

        <button
          type="button"
          class="rounded-xl border-2 border-dashed border-border bg-muted/50 aspect-video flex flex-col items-center justify-center cursor-pointer hover:bg-accent/50 transition-colors text-muted-foreground hover:text-primary"
        >
          <Image class="size-6 mb-2" />
          <span class="text-sm font-medium">Add Screenshot</span>
        </button>
      </div>

      <div class="mt-auto pt-6 flex justify-end gap-3">
        <Button variant="outline" @click="journalStore.discardDraft()">Discard</Button>
        <Button @click="journalStore.saveEntry()">
          <Pencil class="size-4 mr-2" />
          Save Entry
        </Button>
      </div>
    </CardContent>
  </Card>
</template>
