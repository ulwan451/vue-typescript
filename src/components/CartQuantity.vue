<script setup lang="ts">
import { computed } from 'vue'
import type { IProduct } from '@/types/Product'
import { useCartStore } from '@/_stores/modules/cartModule'

const props = defineProps<{ item: IProduct }>()
const cartStore = useCartStore()
const cartItem = computed(() => cartStore.items.find((val) => val.id === props.item.id))
</script>

<template>
  <button
    v-if="!cartItem"
    @click="cartStore.addItemToCart(props.item)"
    class="bg-blue-700 cursor-pointer shadow-md px-5 py-3 text-sm rounded-xl text-white font-medium"
  >
    Add to Cart
  </button>

  <div v-else class="flex items-center space-x-3">
    <button
      @click="cartStore.decrementCartItem(props.item.id)"
      class="bg-blue-200 text-blue-700 font-bold px-3 py-1 rounded-md"
    >
      -
    </button>
    <span role="status" class="text-lg">{{ cartItem?.quantity }}</span>
    <button
      @click="cartStore.addItemToCart(props.item)"
      class="bg-blue-200 text-blue-700 font-bold px-3 py-1 rounded-md"
    >
      +
    </button>
  </div>
</template>
