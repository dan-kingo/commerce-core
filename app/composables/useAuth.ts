export const useAuth = () => {
  const store = useAuthStore();

  return {
    user: computed(() => store.user),
    isAuthenticated: computed(() => !!store.accessToken),
    login: store.login,
    register: store.register,
    logout: store.logout,
    isLoading: computed(() => store.isLoading),
  };
};
