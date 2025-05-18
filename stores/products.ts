import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '~/types/types'

export const useProductsStore = defineStore('products', () => {
  const searchQuery = ref('')
  const selectedCategory = ref('')

  const { data, error, pending } = useFetch<Product[]>(
    `https://api.escuelajs.co/api/v1/products/`, {
      query: {
        title: searchQuery,
        categorySlug: selectedCategory
      }
    }
  )

  return {
    products: data,
    isLoading: pending,
    error,
    searchQuery,
    selectedCategory
  }
})
