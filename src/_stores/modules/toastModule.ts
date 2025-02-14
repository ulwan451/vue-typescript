import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Toast {
  id: number
  title: string
  description: string
  type: 'success' | 'error' | 'info' | 'warning'
}

export const useToastStore = defineStore('toast', () => {
  const toasts = ref<Toast[]>([])
  let idCounter = 0

  const addToast = (title: string, description: string, type: Toast['type'] = 'info') => {
    const id = idCounter++
    toasts.value.push({ id, title, description, type })

    setTimeout(() => removeToast(id), 1000)
  }

  const removeToast = (id: number) => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id)
  }

  return { toasts, addToast, removeToast }
})
