import z from "zod";

export const schema = z.object({
  email: z.email("Email invalido").min(1, "El email es obligatorio"),
  password: z
    .string()
    .min(6, "La contrasena debe tener un minimo de 6 caracteres"),
});
