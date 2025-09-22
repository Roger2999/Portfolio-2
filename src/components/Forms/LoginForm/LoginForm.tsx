import { AuthStore, ThemeStore } from "../../../stores";
import { CustomInput } from "../../CustomInput/CustomInput";
import { useMutationLogin } from "../../../hooks/useMutationUsers";
import { useForms } from "../../../hooks/useForms";
import styles from "../CustomForm.module.css";
import { schemaLogin } from "../../../models/form.model";
import { Toast } from "../../Toast/Toast";
import { toastStore } from "../../../stores/toastStore/toastStore";

export interface LoginFormData {
  email: string;
  password: string;
}
export const LoginForm = () => {
  const theme = ThemeStore((state) => state.theme);
  const { control, handleSubmit, errors } = useForms(schemaLogin);
  const { loginMutation } = useMutationLogin();
  const { isPending, isError, error } = loginMutation;
  const isAuthenticated = AuthStore((state) => state.isAuthenticated);
  const email = AuthStore((state) => state.email);
  const showToast = toastStore((state) => state.showToast);
  const setShowToast = toastStore((state) => state.setShowToast);
  const closeToast = toastStore((state) => state.closeToast);

  const onSubmitLogin = (data: LoginFormData) => {
    if (isAuthenticated && data.email === email) {
      setShowToast(true);
      return;
    }
    loginMutation.mutate(data);
    setShowToast(true);
  };
  return (
    <>
      <div className={styles.formContainer}>
        <form
          onSubmit={handleSubmit(onSubmitLogin)}
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
      {showToast && (
        <>
          <Toast
            message={`${
              isAuthenticated
                ? "Ya se encuentra logeado"
                : "Loegado con exito ✅"
            }`}
            onClose={closeToast}
            duration={3000}
          />
        </>
      )}
    </>
  );
};
