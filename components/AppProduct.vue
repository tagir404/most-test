<script setup lang="ts">
import type { Product } from '~/types/types'

const props = defineProps<{
  product: Product
  imgLoading?: 'lazy' | 'eager'
}>()
</script>

<template>
  <NuxtLink
    :to="`/products/${props.product.id}`"
    class="flex flex-col border border-gray-200 gap-4 p-4 rounded-xl cursor-pointer"
  >
    <img
      :src="props.product.images[0]"
      :alt="props.product.title"
      class="aspect-square object-contain"
      :loading="imgLoading"
    >
    <h2 class="font-bold text-lg">{{ props.product.title }}</h2>
    <p class="mt-auto">
      Цена:
      {{ formatPrice(props.product.price) }}
    </p>
  </NuxtLink>
</template>
