import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Введите действительную почту"),
  password: z.string().min(1, "Введите пароль"),
});

export const registerSchema = z.object({
  email: z.string().email("Введите действительную почту"),
  password: z.string().min(8, "Минимум 8 символов"),
});
