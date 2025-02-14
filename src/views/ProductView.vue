<script setup lang="ts">
import { useProductStore } from '@/_stores/modules/productModule'
import PageTitle from '@/components/PageTitle.vue'
import ProductCard from '@/components/ProductCard.vue'
import { onMounted } from 'vue'

const productStore = useProductStore()

onMounted(() => {
  productStore.fetchProducts()
})
</script>

<template>
  <PageTitle>Exclusive Product</PageTitle>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
    <div v-if="productStore.error" class="text-red-500">Error: {{ productStore.error }}</div>
    <template v-if="productStore.loading">
      <div v-for="index in 8" :key="index" class="flex flex-col gap-2">
        <div class="skeleton w-full h-[200px] rounded-lg"></div>
        <div class="skeleton w-3/4 h-[20px] rounded-full"></div>
        <div class="skeleton w-1/2 h-[20px] rounded-full"></div>
      </div>
    </template>
    <template v-else>
      <ProductCard v-for="product in productStore.products" :key="product.id" :product="product" />
    </template>
  </div>
</template>
