<script setup lang="ts">
import type { Product } from '~/types/types'

definePageMeta({
  middleware: 'auth'
})

const route = useRoute()
const {
  data: product,
  pending: isLoading,
  status,
} = useFetch<Product>(
  `https://api.escuelajs.co/api/v1/products/${route.params.id}`
)

watchEffect(() => {
  if (status.value === 'error') {
    throw createError({
      statusCode: 404,
      statusMessage: 'Товар не найден'
    })
  }
})
</script>

<template>
  <div class="flex flex-col sm:flex-row items-center gap-10 w-full">
    <div class="flex-1/2 flex items-center justify-center">
      <div
        v-if="isLoading"
        class="animate-pulse flex items-center justify-center w-full aspect-square bg-gray-300 rounded-sm"
      >
        <IconImgPreloader />
      </div>
      <img
        v-else-if="product"
        :src="product.images[0]"
        :alt="product.title"
        class="aspect-square object-contain"
      >
    </div>

    <div class="flex-1/2 flex flex-col items-start gap-5">
      <template v-if="isLoading">
        <div class="h-12 bg-gray-200 rounded-md w-full animate-pulse" />
        <div class="h-30 bg-gray-200 rounded-md w-full animate-pulse" />
        <div class="h-10 bg-gray-200 rounded-md w-1/5 animate-pulse" />
        <div class="h-8 bg-gray-200 rounded-md w-1/3 animate-pulse" />
      </template>
      <template v-else-if="product">
        <h1 class="text-2xl sm:text-4xl">{{ product.title }}</h1>
        <p class="text-md sm:text-xl">{{ product.description }}</p>
        <p class="text-2xl">Цена: {{ formatPrice(product.price) }}</p>
        <p>
          Категория:
          <span class="p-2 rounded bg-amber-200">
            {{ product.category.slug }}
          </span>
        </p>
      </template>
    </div>
  </div>
</template>
