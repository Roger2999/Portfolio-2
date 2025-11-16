import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "../RegisterForm/CustomForm.module.css";
import { ThemeStore } from "../../../stores";
import { useLoginMutation } from "../../../hooks/useAuthMutation";
import { schemaLogin, type FormLoginData } from "../../../models/form.model";
import { CustomInput } from "../CustomInput/CustomInput";

export const LoginForm = () => {
  const theme = ThemeStore((state) => state.theme);
  const loginMutation = useLoginMutation();
  const { mutate, isPending, isError, error } = loginMutation;

  const onSubmit = async (data: FormLoginData) => {
    mutate(data);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
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
