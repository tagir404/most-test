<script setup lang="ts">
const token = useCookie('token')

definePageMeta({
  middleware: 'auth'
})

const username = ref('johnd')
const password = ref('m38rmF$')

const body = computed(() => {
  return {
    username: username.value,
    password: password.value
  }
})

const { error, data, execute } = useFetch<{ token: string }>(
  'https://fakestoreapi.com/auth/login',
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    watch: false,
    immediate: false,
    body
  }
)

// johnd
// m38rmF$

const login = async () => {
  await execute()
  if(data.value) {
    token.value = data.value.token
    await navigateTo('/')
  }
  if(error.value) console.error(error)
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <form
      class="flex flex-col gap-5"
      @submit.prevent="login"
    >
      <TextField
        v-model="username"
        type="text"
        placeholder="Логин"
      />
      <TextField
        v-model="password"
        type="password"
        placeholder="Пароль"
      />
      <button
        class="text-white bg-blue-400 border border-transparent rounded p-3 cursor-pointer hover:bg-blue-500 focus:bg-blue-500 outline-none transition"
      >
        Войти
      </button>
    </form>
  </div>
</template>
