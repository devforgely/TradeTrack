import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import { TooltipProvider } from '@/components/ui/tooltip'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/dashboard', name: 'dashboard', component: { template: '<div />' } },
    { path: '/daily', name: 'daily', component: { template: '<div />' } },
    { path: '/calendar', name: 'calendar', component: { template: '<div />' } },
    { path: '/trades', name: 'trades', component: { template: '<div />' } },
    { path: '/journal', name: 'journal', component: { template: '<div />' } },
    { path: '/algorithms', name: 'algorithms', component: { template: '<div />' } },
  ],
})

function mountSidebar() {
  return mount(
    {
      components: { TooltipProvider, AppSidebar },
      template: '<TooltipProvider><AppSidebar /></TooltipProvider>',
    },
    {
      global: {
        plugins: [createPinia(), router],
      },
    },
  )
}

describe('AppSidebar', () => {
  it('renders navigation links for all main routes', async () => {
    await router.push('/dashboard')
    await router.isReady()

    const wrapper = mountSidebar()
    await wrapper.find('button[aria-label="Toggle sidebar"]').trigger('click')

    const links = wrapper.findAll('a')

    expect(links.length).toBeGreaterThanOrEqual(6)
    expect(wrapper.text()).toContain('Dashboard')
    expect(wrapper.text()).toContain('Trades & Imports')
    expect(wrapper.text()).toContain('Daily Diary')
  })

  it('expands sidebar when toggle is clicked', async () => {
    await router.push('/dashboard')
    await router.isReady()

    const wrapper = mountSidebar()
    const aside = wrapper.find('aside')

    expect(aside.classes().some((c) => c.includes('w-16'))).toBe(true)

    await wrapper.find('button[aria-label="Toggle sidebar"]').trigger('click')
    expect(aside.classes().some((c) => c.includes('w-64'))).toBe(true)
  })
})
