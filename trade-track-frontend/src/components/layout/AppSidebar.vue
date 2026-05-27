<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { ChevronRight, Moon, Settings, Sun } from 'lucide-vue-next'
import { RouterLink, useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { NAV_ITEMS } from '@/config/navigation'
import { cn } from '@/lib/utils'
import { useThemeStore } from '@/stores/theme'
import { useUiStore } from '@/stores/ui'

const route = useRoute()
const uiStore = useUiStore()
const themeStore = useThemeStore()
const { isSidebarExpanded } = storeToRefs(uiStore)
const { isDark } = storeToRefs(themeStore)
</script>

<template>
  <aside
    :class="
      cn(
        'border-r border-border flex flex-col py-6 bg-sidebar z-10 transition-all duration-300 ease-in-out relative shrink-0',
        isSidebarExpanded ? 'w-64 px-4' : 'w-16 lg:w-20 px-0 items-center',
      )
    "
  >
    <Button
      variant="outline"
      size="icon"
      class="absolute -right-3 top-8 size-6 rounded-full z-20 shadow-sm"
      aria-label="Toggle sidebar"
      @click="uiStore.toggleSidebar()"
    >
      <ChevronRight
        :class="cn('size-3.5 transition-transform', isSidebarExpanded && 'rotate-180')"
      />
    </Button>

    <div
      :class="
        cn(
          'mb-8 text-primary flex items-center cursor-pointer',
          isSidebarExpanded ? 'justify-start px-2 gap-3' : 'justify-center',
        )
      "
    >
      <svg class="size-7 shrink-0 text-brand-orange" stroke-width="2.5">
        <use href="/trade-track.svg#logo" />
      </svg>
      <span
        v-if="isSidebarExpanded"
        class="font-bold text-xl tracking-tight whitespace-nowrap"
      >
        Trade Track
      </span>
    </div>

    <nav class="flex-1 flex flex-col gap-2 w-full">
      <Tooltip v-for="item in NAV_ITEMS" :key="item.id" :disabled="isSidebarExpanded">
        <TooltipTrigger as-child>
          <RouterLink
            :to="item.path"
            :class="
              cn(
                'p-3 rounded-xl transition-all duration-200 group relative flex items-center',
                isSidebarExpanded
                  ? 'justify-start gap-4 px-4 w-full'
                  : 'justify-center size-12 mx-auto',
                route.path === item.path
                  ? 'bg-orange-100 dark:bg-orange-900/20 text-brand-orange'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground',
              )
            "
          >
            <component :is="item.icon" class="size-5 shrink-0" />
            <span v-if="isSidebarExpanded" class="font-medium text-sm whitespace-nowrap">
              {{ item.label }}
            </span>
          </RouterLink>
        </TooltipTrigger>
        <TooltipContent side="right">{{ item.label }}</TooltipContent>
      </Tooltip>
    </nav>

    <div class="flex flex-col gap-2 mt-auto w-full">
      <Button
        variant="ghost"
        :class="
          cn(
            'p-3 h-auto rounded-xl text-muted-foreground hover:bg-accent transition-colors flex items-center',
            isSidebarExpanded
              ? 'justify-start gap-4 px-4 w-full'
              : 'justify-center size-12 mx-auto',
          )
        "
      >
        <Settings class="size-5 shrink-0" />
        <span v-if="isSidebarExpanded" class="font-medium text-sm whitespace-nowrap">
          Settings
        </span>
      </Button>

      <Button
        variant="ghost"
        :class="
          cn(
            'p-3 h-auto rounded-xl text-muted-foreground hover:bg-accent transition-colors flex items-center',
            isSidebarExpanded
              ? 'justify-start gap-4 px-4 w-full'
              : 'justify-center size-12 mx-auto',
          )
        "
        @click="themeStore.toggleTheme()"
      >
        <Moon v-if="isDark" class="size-5 shrink-0" />
        <Sun v-else class="size-5 shrink-0" />
        <span v-if="isSidebarExpanded" class="font-medium text-sm whitespace-nowrap">
          {{ isDark ? 'Light Mode' : 'Dark Mode' }}
        </span>
      </Button>
    </div>
  </aside>
</template>
