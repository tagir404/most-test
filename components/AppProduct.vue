<script setup lang="ts">
import type { Product } from '~/types/types'

defineProps<{
  product: Product
  imgLoading?: 'lazy' | 'eager'
}>()
</script>

<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    class="flex flex-col border border-gray-200 gap-4 p-4 rounded-xl cursor-pointer"
  >
    <img
      :src="product.image"
      :alt="product.title"
      class="aspect-square object-contain"
      :loading="imgLoading"
    >
    <h2 class="font-bold text-lg">{{ product.title }}</h2>
    <p class="mt-auto">Цена: {{ product.price }}</p>
  </NuxtLink>
</template>
