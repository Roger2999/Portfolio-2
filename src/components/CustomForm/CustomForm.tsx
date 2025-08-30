import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import styles from "./CustomForm.module.css";
import { schema } from "../../models/form.model";
import { useLogin } from "../../hooks/useLogin";
import { CustomInput } from "../../components";
import { ThemeStore } from "../../stores";

interface FormData {
  email: string;
  password: string;
}
export const CustomForm = () => {
  const theme = ThemeStore((state) => state.theme);
  const mutation = useLogin();
  const { mutate, isPending, isError, error } = mutation;

  const onSubmit = async (data: FormData) => {
    mutate(data);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
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
            className={`btn btn btn-success  ${styles.btn}`}
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
