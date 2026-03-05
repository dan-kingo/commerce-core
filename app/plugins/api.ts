export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const auth = useAuthStore();

  const api = $fetch.create({
    baseURL: config.public.apiBase,

    onRequest({ options }) {
      const headers = new Headers(options.headers || {});

      if (auth.accessToken) {
        headers.set("Authorization", `Bearer ${auth.accessToken}`);
      }

      options.headers = headers;
    },

    onResponseError({ response }) {
      if (response.status === 401) {
        auth.logout();
      }
    },
  });
    return { provide: { api } };
});
