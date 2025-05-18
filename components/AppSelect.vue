<script setup lang="ts">
const model = defineModel<string>()

const props = defineProps<{
  categories: string[]
}>()
</script>

<template>
  <select
    v-model="model"
    class="border border-gray-200 outline-none rounded p-3 focus:border-gray-400 transition cursor-pointer"
  >
    <option value="" selected>Все категории</option>
    <option
      v-for="category in props.categories"
      :key="category"
    >
      {{ category }}
    </option>
  </select>
</template>
