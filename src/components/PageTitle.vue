<script setup lang="ts">
import { defineProps } from 'vue'

type TitleProps = {
  className?: string
}

const props = defineProps<TitleProps>()
</script>

<template>
  <h2 :class="`text-2xl font-bold mb-10 text-center ${props.className || ''}`">
    <slot></slot>
  </h2>
</template>
