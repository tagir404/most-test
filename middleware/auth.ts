export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuthStore();

  if (to.path.startsWith('/products/') && !authStore.isAuthenticated) {
    return navigateTo('/login');
  }

  if (to.path === '/login' && authStore.isAuthenticated) {
    return navigateTo('/');
  }
});