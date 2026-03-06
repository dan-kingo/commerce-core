import { defineStore } from "pinia";
import { authService } from "~/services/auth.service";
import type { LoginInput, RegisterInput } from "~/validations/auth.schema";

export const useAuthStore = defineStore("auth", {
  state: () => {
    const userCookie = useCookie<Record<string, any> | null>("auth_user", {
      default: () => null,
    });
    const accessTokenCookie = useCookie<string | null>("access_token", {
      default: () => null,
    });
    const refreshTokenCookie = useCookie<string | null>("refresh_token", {
      default: () => null,
    });

    return {
      user: userCookie.value,
      accessToken: accessTokenCookie.value,
      refreshToken: refreshTokenCookie.value,
      isLoading: false,
    };
  },

  actions: {
    async hydrateUserProfile() {
      try {
        const { profile } = await authService.getMe();
        this.user = {
          ...(this.user ?? {}),
          ...profile,
        };
        useCookie<Record<string, any> | null>("auth_user").value = this.user;
      } catch {}
    },

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

        await this.hydrateUserProfile();

        useCookie<string | null>("access_token").value = this.accessToken;
        useCookie<string | null>("refresh_token").value = this.refreshToken;
        useCookie<Record<string, any> | null>("auth_user").value = this.user;
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

        await this.hydrateUserProfile();

        useCookie<string | null>("access_token").value = this.accessToken;
        useCookie<string | null>("refresh_token").value = this.refreshToken;
        useCookie<Record<string, any> | null>("auth_user").value = this.user;
      } finally {
        this.isLoading = false;
      }
    },

    logout() {
      this.user = null;
      this.accessToken = null;
      this.refreshToken = null;

      useCookie<string | null>("access_token").value = null;
      useCookie<string | null>("refresh_token").value = null;
      useCookie<Record<string, any> | null>("auth_user").value = null;

      navigateTo("/login");
    },
  },
});
