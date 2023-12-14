import { ZodType, z } from "zod";

export interface FormData {
  userName: string,
  email: string,
  password: string,
  confirmPassword: string
}

export const schema: ZodType<FormData> = z.object({
  userName: z
    .string()
    .min(1, "Seu nome de usuário é obrigatório"),
  email: z
    .string()
    .email("Seu email não é válido"),
  password: z
    .string()
    .min(4, "Sua senha deve ter no mínimo 4 caracteres")
    .max(16, "Sua senha deve ter no máximo 16 caracteres"),
  confirmPassword: z
    .string()
    .min(4, "Sua senha deve ter no mínimo 4 caracteres")
    .max(16, "Sua senha deve ter no máximo 16 caracteres")
}).refine(data => data.password === data.confirmPassword, {
  message: "Suas senhas não estão iguais",
  path: ["confirmPassword"]
});
