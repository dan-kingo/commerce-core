import { storeToRefs } from "pinia";

export const useAuth = () => {
  const store = useAuthStore();
  const { user, accessToken, isLoading } = storeToRefs(store);

  return {
    user,
    isAuthenticated: computed(() => !!accessToken.value),
    login: store.login,
    register: store.register,
    logout: store.logout,
    isLoading,
  };
};
