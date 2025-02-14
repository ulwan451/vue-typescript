<script setup lang="ts">
import { useRoute } from 'vue-router'
import IconHome from './icons/IconHome.vue'
import IconBag from './icons/IconBag.vue'
import { useCartStore } from '@/_stores/modules/cartModule'
import { storeToRefs } from 'pinia'

const route = useRoute()
const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)

const navItemClass = (path: string): string => {
  return `flex justify-center gap-2 p-2 w-24 text-center rounded-xl ${route.path === path ? 'bg-yellow-100 text-yellow-700' : 'bg-gray-50 text-gray-500'}`
}
</script>

<template>
  <header class="relative z-10">
    <nav
      class="fixed left-0 right-0 top-0 border-b-2 border-gray-200 p-5 bg-white flex items-center justify-between"
    >
      <div class="flex gap-3 items-center">
        <img src="@/assets/logo.svg" class="w-10 h-10" alt="logo" loading="lazy" />
        <span class="text-xl font-bold">Store</span>
      </div>
      <ul class="flex items-center gap-3">
        <RouterLink to="/">
          <li :class="navItemClass('/')">
            <IconHome :is-active="route.path === '/'" />
            Home
          </li>
        </RouterLink>

        <RouterLink to="/cart">
          <li :class="navItemClass('/cart')" class="relative">
            <IconBag :is-active="route.path === '/cart'" />
            Cart
            <span
              v-if="totalItems > 0"
              class="absolute -top-2 -right-2 bg-red-200 text-red-700 text-xs font-bold px-2 py-1 rounded-full"
            >
              {{ totalItems }}
            </span>
          </li>
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>
