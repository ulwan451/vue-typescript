<script setup lang="ts">
import { useProductStore } from '@/_stores/modules/productModule'
import PageTitle from '@/components/PageTitle.vue'
import ProductCard from '@/components/ProductCard.vue'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const productStore = useProductStore()
const route = useRoute()

onMounted(() => {
  productStore.fetchProductById(Number(route.params.id))
})
</script>

<template>
  <PageTitle>Detail Product</PageTitle>
  <div class="flex flex-col items-center justify-center">
    <!-- Skeleton Loader -->
    <div v-if="productStore.loading" class="max-w-2xl w-full flex flex-col gap-2">
      <div class="skeleton h-[300px] w-full rounded-lg"></div>
      <div class="skeleton w-3/4 h-[20px] rounded-full"></div>
      <div class="skeleton w-1/2 h-[20px] rounded-full"></div>
    </div>

    <!-- Error Message -->
    <div v-else-if="productStore.error" class="text-red-500">Error: {{ productStore.error }}</div>

    <!-- Product Card -->
    <ProductCard
      v-else-if="productStore.productDetail"
      :product="productStore.productDetail"
      :description="productStore.productDetail.description"
    />
  </div>
</template>
