<script setup lang="ts">
import { useToastStore } from '@/_stores/modules/toastModule'
import { computed } from 'vue'

const toastStore = useToastStore()
const toasts = computed(() => toastStore.toasts)
</script>

<template>
  <div class="fixed w-full md:max-w-[420px] top-4 right-0 md:right-4 z-50 flex flex-col gap-2">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="[
        'w-full shadow-lg transition-all flex flex-col items-start rounded-md p-4 pr-6',
        toast.type === 'success' && 'border-2 border-green-300 bg-green-100 text-green-700',
        toast.type === 'error' && 'alert-error',
        toast.type === 'info' && 'border-2 border-blue-300 bg-blue-100 text-blue-700',
        toast.type === 'warning' && 'alert-warning',
      ]"
    >
      <span class="text-sm font-semibold">{{ toast.title }}</span>
      <span class="text-xs">{{ toast.description }}</span>
    </div>
  </div>
</template>
