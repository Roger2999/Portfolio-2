import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { ZodObject, ZodEmail, ZodString } from "zod";
import type { $strip } from "zod/v4/core";

interface SchemaData {
  schema: ZodObject<
    { email: ZodEmail; password: ZodString; confirmPassword?: ZodString },
    $strip
  >;
}
//custom hook reutilizable para formularios
export const useForms = (schema: SchemaData["schema"]) => {
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
