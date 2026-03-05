import type { LoginInput, RegisterInput } from "~/validations/auth.schema";
import { useHttp } from "./http";

export const authService = {
  async login(payload: LoginInput) {
    const http = useHttp();
    return await http("/auth/login", {
      method: "POST",
      body: payload,
    });
  },

  async register(payload: RegisterInput) {
    const http = useHttp();
    return await http("/auth/register", {
      method: "POST",
      body: payload,
    });
  },
};
