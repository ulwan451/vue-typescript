<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import ToastComponent from './components/ToastComponent.vue'
</script>

<template>
  <main class="bg-white">
    <div class="mx-auto max-w-7xl px-5">
      <AppHeader />
      <div class="mt-32 mb-20">
        <ToastComponent />
        <RouterView />
      </div>
    </div>
  </main>
</template>
