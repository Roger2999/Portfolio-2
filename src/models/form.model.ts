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

export const schemaProjects = z
  .object({
    rol: z.string().min(1, "Campo obligatorio"),
    description: z.string().min(1, "Campo obligatorio"),
    startDate: z.string().min(1, "La fecha de inicio es obligatoria"),
    endDate: z.string().min(1, "La fecha de fin es obligatoria"),
    technologies: z
      .array(z.string())
      .min(1, "Debe seleccionar al menos una tecnología"),
  })
  .refine(
    (data) => {
      if (data.startDate && data.endDate) {
        return new Date(data.startDate) <= new Date(data.endDate);
      }
      return true;
    },
    {
      message: "La fecha de inicio debe ser anterior o igual a la fecha de fin",
      path: ["endDate"],
    }
  );
export type FormProjectData = z.infer<typeof schemaProjects>;
