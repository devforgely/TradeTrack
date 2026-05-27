import { MOCK_JOURNAL_DAYS } from '@/data/mock'
import type { JournalDay } from '@/types/trade'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useJournalStore = defineStore('journal', () => {
  const journalDays = ref<JournalDay[]>([...MOCK_JOURNAL_DAYS])
  const selectedDate = ref(journalDays.value[0]?.date ?? '')

  const selectedDay = computed(() => {
    return (
      journalDays.value.find((d) => d.date === selectedDate.value) ??
      journalDays.value[0]
    )
  })

  const draftExcerpt = ref(selectedDay.value?.excerpt ?? '')

  function selectDate(date: string) {
    selectedDate.value = date
    const day = journalDays.value.find((d) => d.date === date)
    if (day) {
      draftExcerpt.value = day.excerpt
    }
  }

  function saveEntry() {
    const day = journalDays.value.find((d) => d.date === selectedDate.value)
    if (day) {
      day.excerpt = draftExcerpt.value
    }
  }

  function discardDraft() {
    draftExcerpt.value = selectedDay.value?.excerpt ?? ''
  }

  return {
    journalDays,
    selectedDate,
    selectedDay,
    draftExcerpt,
    selectDate,
    saveEntry,
    discardDraft,
  }
})
