import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { title: 'Dashboard' },
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('@/views/DailyView.vue'),
      meta: { title: 'Daily Overview' },
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: () => import('@/views/CalendarView.vue'),
      meta: { title: 'Calendar' },
    },
    {
      path: '/trades',
      name: 'trades',
      component: () => import('@/views/TradesView.vue'),
      meta: { title: 'Trades & Imports' },
    },
    {
      path: '/journal',
      name: 'journal',
      component: () => import('@/views/JournalView.vue'),
      meta: { title: 'Daily Diary' },
    },
    {
      path: '/algorithms',
      name: 'algorithms',
      component: () => import('@/views/AlgorithmsView.vue'),
      meta: { title: 'Visual Scripting' },
    },
  ],
})

export default router
