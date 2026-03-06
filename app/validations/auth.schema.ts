import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(8)
    .regex(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter",
    )
    .regex(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter",
    )
    .regex(/^(?=.*\d)/, "Password must contain at least one number")
    .regex(
      /^(?=.*[@$!%*?&])/,
      "Password must contain at least one special character",
    ),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8).regex(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    ).regex(/^(?=.*[A-Z])/, "Password must contain at least one uppercase letter").regex(/^(?=.*\d)/, "Password must contain at least one number").regex(
      /^(?=.*[@$!%*?&])/,
      "Password must contain at least one special character"
    ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterInput = z.infer<typeof registerSchema>;
