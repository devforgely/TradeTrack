import { mount, flushPromises } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import { describe, expect, it } from 'vitest'
import TradesView from '@/views/TradesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/trades', name: 'trades', component: TradesView }],
})

describe('TradesView', () => {
  it('lists all trades by default', async () => {
    await router.push('/trades')
    await router.isReady()

    const wrapper = mount(TradesView, {
      global: {
        plugins: [createPinia(), router],
      },
    })
    await flushPromises()

    expect(wrapper.text()).toContain('Trades & Imports')
    expect(wrapper.text()).toContain('BTC/USDT')
    expect(wrapper.text()).toContain('SOL/USDT')
    expect(wrapper.text()).toContain('ETH/USDT')
  })

  it('shows import and new trade actions', async () => {
    await router.push('/trades')
    await router.isReady()

    const wrapper = mount(TradesView, {
      global: {
        plugins: [createPinia(), router],
      },
    })
    await flushPromises()

    expect(wrapper.text()).toContain('Import Broker Data')
    expect(wrapper.text()).toContain('New Manual Trade')
  })
})
