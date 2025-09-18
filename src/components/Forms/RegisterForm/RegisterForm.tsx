import styles from "../CustomForm.module.css";

import { ThemeStore } from "../../../stores";
import { CustomInput } from "../../CustomInput/CustomInput";
import { useMutationRegister } from "../../../hooks/useMutationUsers";
import { schemaRegister } from "../../../models/form.model";
import { useForms } from "../../../hooks/useForms";

export interface FormData {
  email: string;
  password: string;
}
export const RegisterForm = () => {
  const theme = ThemeStore((state) => state.theme);
  const { registerMutation } = useMutationRegister();
  const { isPending, isError, error } = registerMutation;
  const { control, handleSubmit, errors } = useForms(schemaRegister);
  const onSubmitRegister = (data: FormData) => registerMutation.mutate(data);

  return (
    <>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(onSubmitRegister)}
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
