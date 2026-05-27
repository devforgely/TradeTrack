<script setup lang="ts">
import { LayoutGrid } from 'lucide-vue-next'
import DataManagementPanel from '@/components/dashboard/DataManagementPanel.vue'
import PerformanceChart from '@/components/dashboard/PerformanceChart.vue'
import RecentTradesTable from '@/components/dashboard/RecentTradesTable.vue'
import PageHeader from '@/components/shared/PageHeader.vue'
</script>

<template>
  <div class="flex flex-col gap-6">
    <PageHeader title="Dashboard" :icon="LayoutGrid" />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <PerformanceChart />
      <DataManagementPanel />
    </div>

    <RecentTradesTable />
  </div>
</template>
