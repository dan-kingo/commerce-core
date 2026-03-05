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
        const res: any = await authService.login(payload);

        if (!res?.session) {
          throw new Error("Login response does not include a session.");
        }

        this.accessToken = res.session.access_token;
        this.refreshToken = res.session.refresh_token;
        this.user = res.session.user;
      } finally {
        this.isLoading = false;
      }
    },

    async register(payload: RegisterInput) {
      this.isLoading = true;
      try {
        const res: any = await authService.register(payload);

        if (!res?.session) {
          throw new Error("Register response does not include a session.");
        }

        this.accessToken = res.session.access_token;
        this.refreshToken = res.session.refresh_token;
        this.user = res.session.user;
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
