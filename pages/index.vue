<script setup lang="ts">
const productsStore = useProductsStore()
const filtersStore = useFiltersStore()

await callOnce('user', () => productsStore.fetchProducts())

const productsCategories = computed(() => {
  const categories = new Set<string>()
  productsStore.products.forEach(product => categories.add(product.category))
  return [...categories]
})

const filteredProducts = computed(() => {
  let res = [...productsStore.products]

  if (filtersStore.searchQuery) {
    res = res.filter(product =>
      product.title.toLowerCase().includes(filtersStore.searchQuery)
    )
  }
  if (filtersStore.selectedCategory) {
    res = res.filter(
      product => product.category === filtersStore.selectedCategory
    )
  }

  return res
})
</script>

<template>
  <div>
    <div class="flex gap-5 mb-10">
      <TextField
        v-model="filtersStore.searchQuery"
        type="search"
        placeholder="Поиск"
      />
      <AppSelect
        v-model="filtersStore.selectedCategory"
        :categories="productsCategories"
      />
    </div>
    <div class="grid grid-cols-4 gap-10">
      <AppProduct
        v-for="product in filteredProducts"
        :key="product.id"
        :product
        :img-loading="'lazy'"
      />
    </div>
  </div>
</template>
