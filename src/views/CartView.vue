<script setup lang="ts">
import { storeToRefs } from 'pinia'
import CartItem from '@/components/CartItem.vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/_stores/modules/cartModule'
import PageTitle from '@/components/PageTitle.vue'

const cartStore = useCartStore()
const { items } = storeToRefs(cartStore)
const router = useRouter()

const handleDeleteFromCart = (productId: number) => {
  cartStore.removeCartItem(productId)
}
</script>

<template>
  <PageTitle>Your Cart</PageTitle>
  <div class="grid grid-cols-1 gap-5">
    <template v-if="items.length > 0">
      <CartItem
        v-for="product in items"
        :key="product.id"
        :product="product"
        @delete="handleDeleteFromCart(product.id)"
      />
    </template>
    <template v-else>
      <div class="flex flex-col items-center justify-center h-full">
        <p class="text-center text-lg text-gray-600 mb-5">
          Oops!<br />Your cart is empty. Start shopping now!
        </p>
        <button
          @click="router.push('/')"
          class="mt-4 px-6 py-2 bg-blue-100 text-blue-700 rounded-xl"
        >
          Back to Products
        </button>
      </div>
    </template>
  </div>
</template>
