import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { ZodObject, ZodEmail, ZodString } from "zod";
import type { $strip } from "zod/v4/core";

//custom hook reutilizable para formularios
export const useForms = (
  schema:
    | ZodObject<
        { email: ZodEmail; password: ZodString; confirmPassword: ZodString },
        $strip
      >
    | ZodObject<{ email: ZodEmail; password: ZodString }, $strip>
) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  return { control, handleSubmit, errors };
};
