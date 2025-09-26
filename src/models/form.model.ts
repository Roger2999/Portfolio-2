import z from "zod";

export const schemaRegister = z
  .object({
    email: z.email("Email invalido").min(1, "El email es obligatorio"),
    password: z
      .string()
      .min(6, "La contrasena debe tener un minimo de 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener un mínimo de 6 caracteres"),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Las contraseñas deben ser iguales",
    path: ["confirmPassword"],
  });
export type FormRegisterData = z.infer<typeof schemaRegister>;
export const schemaLogin = z.object({
  email: z.email("Email invalido").min(1, "El email es obligatorio"),
  password: z
    .string()
    .min(6, "La contraseña debe tener un mínimo de 6 caracteres"),
});
export type FormLoginData = z.infer<typeof schemaLogin>;
