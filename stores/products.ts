import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '~/types/types'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])

  const { data, error, execute } = useFetch<Product[]>(
    'https://fakestoreapi.com/products',
    {
      immediate: false
    }
  )

  const fetchProducts = async () => {
    await execute()
    if (data.value) {
      products.value = data.value
    } else {
      console.error(error.value)
    }
  }

  return { products, fetchProducts }
})
