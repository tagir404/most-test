<script setup lang="ts">
const authStore = useAuthStore()

definePageMeta({
  middleware: 'auth'
})

const formData = reactive({
  email: 'john@mail.com',
  password: 'pwned123'
})

// данные для входа тут - https://api.escuelajs.co/api/v1/users/1
</script>

<template>
  <div class="flex items-center justify-center self-center">
    <form
      class="flex flex-col gap-5 max-w-full"
      @submit.prevent="authStore.login(formData)"
    >
      <h1 class="text-3xl text-center">Авторизация</h1>
      <TextField
        v-model="formData.email"
        type="text"
        placeholder="Логин"
      />
      <TextField
        v-model="formData.password"
        type="password"
        placeholder="Пароль"
      />
      <p v-if="authStore.errorMessage" class="text-red-600">{{ authStore.errorMessage }}</p>
      <button
        class="text-white bg-blue-400 border border-transparent rounded p-3 cursor-pointer hover:bg-blue-500 focus:bg-blue-500 outline-none transition"
      >
        Войти
      </button>
    </form>
  </div>
</template>
