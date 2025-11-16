import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./CustomForm.module.css";
import { CustomInput } from "../..";
import { ThemeStore } from "../../../stores";
import { useRegisterMutation } from "../../../hooks/useAuthMutation";
import {
  schemaRegister,
  type FormRegisterData,
} from "../../../models/form.model";

export const RegisterForm = () => {
  const theme = ThemeStore((state) => state.theme);
  const registerMutation = useRegisterMutation();
  const { mutate, isPending, isError, error } = registerMutation;

  const onSubmit = async (data: FormRegisterData) => {
    mutate(data);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaRegister),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });
  return (
    <>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`${styles.form} ${theme === "dark" && styles.formDark}`}
        >
          <CustomInput
            name="email"
            label="Email"
            control={control}
            type="email"
            error={errors.email}
          />
          <CustomInput
            name="password"
            label="Password"
            control={control}
            type="password"
            error={errors.password}
          />
          <CustomInput
            name="confirmPassword"
            label="Confirmar contraseña"
            control={control}
            type="password"
            error={errors.confirmPassword}
          />
          <button
            type="submit"
            className={`btn btn-success  ${styles.btn}`}
            disabled={isPending}
          >
            {isPending ? (
              <span className="loading loading-dots loading-xl"></span>
            ) : (
              "Ingresar"
            )}
          </button>
          <div className="is-error mt-3 text-red-600 text-xs">
            {isError && <span>{`Error en login: ${error.message}`}</span>}
          </div>
        </form>
      </div>
    </>
  );
};
