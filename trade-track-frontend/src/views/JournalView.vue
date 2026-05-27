<script setup lang="ts">
import { BookOpen } from 'lucide-vue-next'
import JournalDayList from '@/components/journal/JournalDayList.vue'
import JournalEditor from '@/components/journal/JournalEditor.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <PageHeader title="Daily Diary" :icon="BookOpen" />

    <div class="flex flex-col lg:flex-row gap-6 min-h-[calc(100vh-220px)]">
      <JournalDayList />
      <JournalEditor />
    </div>
  </div>
</template>
