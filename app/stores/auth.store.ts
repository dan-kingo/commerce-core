import { defineStore } from "pinia";
import { authService } from "~/services/auth.service";
import type { LoginInput, RegisterInput } from "~/validations/auth.schema";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as null | Record<string, any>,
    accessToken: null as string | null,
    refreshToken: null as string | null,
    isLoading: false,
  }),

  actions: {
    async login(payload: LoginInput) {
      this.isLoading = true;
      try {
        const res : any = await authService.login(payload);

        this.accessToken = res.accessToken;
        this.refreshToken = res.refreshToken;
        this.user = res.user;
      } finally {
        this.isLoading = false;
      }
    },

    async register(payload: RegisterInput) {
      this.isLoading = true;
      try {
        const res : any = await authService.register(payload);

        this.accessToken = res.accessToken;
        this.refreshToken = res.refreshToken;
        this.user = res.user;
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;
      navigateTo("/auth/login");
    },
  },
});
