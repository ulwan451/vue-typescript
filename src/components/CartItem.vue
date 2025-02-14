<script setup lang="ts">
import type { ICartItem } from '@/types/Product'
import CartQuantity from './CartQuantity.vue'

defineProps<{
  product: ICartItem
  onDelete: () => void
}>()
</script>

<template>
  <div
    class="bg-gray-50 border-2 border-gray-200 rounded-3xl p-4 flex items-center justify-center gap-3"
  >
    <img
      :src="product.image"
      :alt="product.title"
      class="bg-white w-20 h-20 p-5 border-gray-200 object-contain mb-2 rounded-3xl"
    />
    <div class="w-full flex flex-col">
      <h3 class="font-medium">{{ product.title }}</h3>
      <span class="text-sm text-gray-400">${{ product.price }} x {{ product.quantity }}</span>
      <p class="text-blue-700 font-medium text-lg">
        Total: ${{ (product.price * product.quantity).toFixed(2) }}
      </p>
      <div class="mt-2 flex items-center justify-between">
        <button
          @click="onDelete"
          class="inline-block bg-red-100 text-red-700 px-3 py-2 text-sm rounded-xl font-medium"
        >
          Delete
        </button>
        <div class="flex items-center space-x-3">
          <CartQuantity :item="product" />
        </div>
      </div>
    </div>
  </div>
</template>
