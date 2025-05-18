import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authToken = useCookie('token')
  const isAuthenticated = computed(() => !!authToken.value)
  const errorMessage = ref('')

  const login = async (formData: { email: string; password: string }) => {
    errorMessage.value = ''

    try {
      const data = await $fetch<{
        access_token: string
        refresh_token: string
      }>('https://api.escuelajs.co/api/v1/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: formData
      })
      authToken.value = data.access_token
      return navigateTo('/')
    } catch (e: any) {
      if (e.status === 401) {
        errorMessage.value = 'Неверный логин или пароль'
      }
      if (e.status === 500) {
        errorMessage.value = 'Ошибка сервера'
      }
    }
  }

  return {
    isAuthenticated,
    login,
    errorMessage
  }
})
