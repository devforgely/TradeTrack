import { mount, flushPromises } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/dashboard', name: 'dashboard', component: DashboardView },
  ],
})

describe('DashboardView', () => {
  it('renders dashboard sections', async () => {
    await router.push('/dashboard')
    await router.isReady()

    const wrapper = mount(DashboardView, {
      global: {
        plugins: [createPinia(), router],
      },
    })
    await flushPromises()

    expect(wrapper.text()).toContain('Dashboard')
    expect(wrapper.text()).toContain('Total PnL')
    expect(wrapper.text()).toContain('Data Management')
    expect(wrapper.text()).toContain('Recent Setups')
    expect(wrapper.text()).toContain('BTC/USDT')
  })

  it('switches chart time range', async () => {
    await router.push('/dashboard')
    await router.isReady()

    const wrapper = mount(DashboardView, {
      global: {
        plugins: [createPinia(), router],
      },
    })
    await flushPromises()

    const monthButton = wrapper
      .findAll('button')
      .find((btn) => btn.text() === '1M')

    expect(monthButton).toBeDefined()
    await monthButton!.trigger('click')

    const { useTradesStore } = await import('@/stores/trades')
    const store = useTradesStore()
    expect(store.timeRange).toBe('1M')
  })
})
