<script setup lang="ts">
const productsStore = useProductsStore()

const productsCategories = computed(() => [
  ...new Set(productsStore.products?.map(product => product.category.slug))
])
</script>

<template>
  <div class="w-full">
    <div class="flex flex-wrap justify-center gap-5 mb-10">
      <TextField
        v-model="productsStore.searchQuery"
        type="search"
        placeholder="Поиск"
        class="w-sm max-w-full"
      />
      <AppSelect
        v-model="productsStore.selectedCategory"
        :categories="productsCategories"
        class="w-sm max-w-full"
      />
    </div>
    <div
      :class="[
        'grid gap-5',
        'sm:grid-cols-2 sm:gap-7',
        'md:grid-cols-3 md:gap-10',
        'xl:grid-cols-4 xl:gap-12'
      ]"
    >
      <template v-if="productsStore.isLoading">
        <div
          v-for="n in 8"
          :key="n"
          class="flex flex-col border border-gray-200 gap-4 p-4 rounded-xl"
        >
          <div
            class="animate-pulse flex items-center justify-center w-full aspect-square bg-gray-300 rounded-sm"
          >
            <IconImgPreloader />
          </div>
          <div class="h-6 bg-gray-200 rounded-md animate-pulse" />
          <div class="h-4 bg-gray-200 rounded-md animate-pulse" />
        </div>
      </template>

      <template v-else>
        <AppProduct
          v-for="product in productsStore.products"
          :key="product.id"
          :product
          :img-loading="'lazy'"
        />
      </template>
    </div>

    <div
      v-if="productsStore.error"
      class="text-3xl text-center"
    >
      {{ 'Ошибка при загрузке данных' }}
    </div>
  </div>
</template>
