import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  const isSidebarExpanded = ref(false)
  const searchQuery = ref('')

  function toggleSidebar() {
    isSidebarExpanded.value = !isSidebarExpanded.value
  }

  return {
    isSidebarExpanded,
    searchQuery,
    toggleSidebar,
  }
})
