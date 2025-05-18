<script setup lang="ts">
import type { Product } from '~/types/types'

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const { data: product } = await useFetch<Product>(
  `https://fakestoreapi.com/products/${route.params.id}`
)
</script>

<template>
  <div class="flex items-center gap-10">
    <div class="flex-1/2">
      <img
        :src="product?.image"
        :alt="product?.title"
        class="aspect-square object-contain"
      >
    </div>

    <div class="flex-1/2 flex flex-col items-start gap-5">
      <h1 class="text-4xl">{{ product?.title }}</h1>
      <p class="text-xl">{{ product?.description }}</p>
      <p class="text-2xl">Цена: {{ product?.price }}</p>
      <p>
        Категория:
        <span class="p-2 rounded bg-amber-200">
          {{ product?.category }}
        </span>
      </p>
    </div>
  </div>
</template>
