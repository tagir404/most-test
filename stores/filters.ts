import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFiltersStore = defineStore('filters', () => {
  const searchQuery = ref('')
  const selectedCategory = ref('')

  return { searchQuery, selectedCategory }
})
