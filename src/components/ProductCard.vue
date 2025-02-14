<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import type { IProduct } from '@/types/Product'
import CartQuantity from './CartQuantity.vue'

interface ProductCardProps {
  product: IProduct
  description?: string
}

defineProps<ProductCardProps>()
const router = useRouter()
</script>

<template>
  <div
    class="bg-gray-50 border-2 w-full max-w-2xl border-gray-200 rounded-3xl p-4 flex flex-col gap-3"
  >
    <img
      :src="product.image"
      :alt="product.title"
      class="cursor-pointer bg-white w-full p-5 border-gray-200 h-48 object-contain mb-2 rounded-3xl"
      @click="router.push(`/${product.id}`)"
    />
    <div class="flex flex-col">
      <span class="text-sm text-gray-400 uppercase">{{ product.category }}</span>
      <h3 class="font-medium">{{ product.title }}</h3>
      <span v-if="description" class="text-sm text-gray-400 uppercase">{{ description }}</span>
    </div>
    <div class="flex items-center justify-between mt-auto">
      <div class="flex flex-col">
        <span class="text-sm text-gray-400">Price:</span>
        <p class="text-blue-700 font-medium text-xl">${{ product.price }}</p>
      </div>
      <CartQuantity :item="product" />
    </div>
  </div>
</template>
