<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';

const model = defineModel<string>()

defineProps<{
    type: InputTypeHTMLAttribute
    placeholder: string
}>()
</script>

<template>
  <input
    v-model="model"
    class="border border-gray-200 outline-none rounded p-3 focus:border-gray-400 transition"
    :type
    :placeholder
  >
</template>