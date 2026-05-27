import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { describe, expect, it } from 'vitest'
import PnlText from '@/components/shared/PnlText.vue'

describe('PnlText', () => {
  it('formats positive PnL with plus sign', () => {
    const wrapper = mount(PnlText, {
      props: { value: 187.45 },
    })
    expect(wrapper.text()).toBe('+$187.45')
    expect(wrapper.classes()).toContain('text-green-500')
  })

  it('formats negative PnL with minus sign', () => {
    const wrapper = mount(PnlText, {
      props: { value: -27.92 },
    })
    expect(wrapper.text()).toBe('-$27.92')
    expect(wrapper.classes()).toContain('text-red-500')
  })
})

describe('useTradesStore', () => {
  it('filters trades by pattern tag', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const { useTradesStore } = await import('@/stores/trades')
    const store = useTradesStore()

    store.patternFilter = 'fomo'
    expect(store.filteredTrades).toHaveLength(1)
    expect(store.filteredTrades[0]?.symbol).toBe('ETH/USDT')
  })

  it('clears all filters', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const { useTradesStore } = await import('@/stores/trades')
    const store = useTradesStore()

    store.patternFilter = 'breakout'
    store.mistakeFilter = 'fomo'
    store.clearFilters()

    expect(store.patternFilter).toBe('all')
    expect(store.mistakeFilter).toBe('all')
    expect(store.filteredTrades).toHaveLength(3)
  })
})

describe('useJournalStore', () => {
  it('updates excerpt on save', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const { useJournalStore } = await import('@/stores/journal')
    const store = useJournalStore()

    store.selectDate('2023-10-06')
    store.draftExcerpt = 'Updated journal entry.'
    store.saveEntry()

    const day = store.journalDays.find((d) => d.date === '2023-10-06')
    expect(day?.excerpt).toBe('Updated journal entry.')
  })

  it('restores draft on discard', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const { useJournalStore } = await import('@/stores/journal')
    const store = useJournalStore()

    const original = store.selectedDay?.excerpt ?? ''
    store.draftExcerpt = 'Temporary text'
    store.discardDraft()

    expect(store.draftExcerpt).toBe(original)
  })
})

describe('useThemeStore', () => {
  it('toggles dark class on document', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    const { useThemeStore } = await import('@/stores/theme')
    const store = useThemeStore()

    store.isDark = true
    store.toggleTheme()
    expect(store.isDark).toBe(false)
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
