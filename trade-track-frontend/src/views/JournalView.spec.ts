import { mount, flushPromises } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import JournalView from '@/views/JournalView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/journal', name: 'journal', component: JournalView }],
})

describe('JournalView', () => {
  it('renders trading days and editor', async () => {
    await router.push('/journal')
    await router.isReady()

    const wrapper = mount(JournalView, {
      global: {
        plugins: [createPinia(), router],
      },
    })
    await flushPromises()

    expect(wrapper.text()).toContain('Trading Days')
    expect(wrapper.text()).toContain('Friday, Oct 06')
    expect(wrapper.text()).toContain('Chart Annotations')
    expect(wrapper.text()).toContain('Save Entry')
  })

  it('switches selected day when list item clicked', async () => {
    await router.push('/journal')
    await router.isReady()

    const wrapper = mount(JournalView, {
      global: {
        plugins: [createPinia(), router],
      },
    })
    await flushPromises()

    const dayButtons = wrapper.findAll('button').filter((b) =>
      b.text().includes('Thursday, Oct 05'),
    )
    await dayButtons[0]?.trigger('click')

    const { useJournalStore } = await import('@/stores/journal')
    const store = useJournalStore()
    expect(store.selectedDate).toBe('2023-10-05')
    expect(wrapper.text()).toContain('Thursday, Oct 05')
  })
})
