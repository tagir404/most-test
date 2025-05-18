import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authToken = useCookie('token')
  const isAuthenticated = computed(() => !!authToken.value)

  return {
    isAuthenticated
  }
})
