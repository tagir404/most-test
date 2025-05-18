export default defineNuxtRouteMiddleware(to => {
  const authStore = useAuthStore()

  if (to.path.startsWith('/products/') && !authStore.isAuthenticated) {
    return navigateTo('/login', { redirectCode: 302 })
  }
})
