import type { Component } from 'vue'
import {
  BookOpen,
  CalendarDays,
  Code2,
  Eclipse,
  LayoutGrid,
  List,
} from 'lucide-vue-next'

export interface NavItem {
  id: string
  label: string
  path: string
  icon: Component
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: LayoutGrid },
  { id: 'daily', label: 'Daily Overview', path: '/daily', icon: Eclipse },
  { id: 'calendar', label: 'Calendar', path: '/calendar', icon: CalendarDays },
  { id: 'trades', label: 'Trades & Imports', path: '/trades', icon: List },
  { id: 'journal', label: 'Daily Diary', path: '/journal', icon: BookOpen },
  {
    id: 'algorithms',
    label: 'Visual Scripting',
    path: '/algorithms',
    icon: Code2,
  },
]
