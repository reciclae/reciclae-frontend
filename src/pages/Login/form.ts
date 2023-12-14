import { ZodType, z } from "zod";

export interface FormData {
  email: string,
  password: string
}

export const schema: ZodType<FormData> = z.object({
  email: z
    .string()
    .email("Seu email não é válido"),
  password: z
    .string()
    .min(4, "Sua senha deve ter no mínimo 4 caracteres")
    .max(16, "Sua senha deve ter no máximo 16 caracteres")
});
