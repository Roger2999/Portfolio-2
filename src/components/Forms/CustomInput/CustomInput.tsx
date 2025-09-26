import { Controller, type Control, type FieldError } from "react-hook-form";

interface Props {
  label: string;
  name: "email" | "password" | "confirmPassword";
  control:
    | Control<
        {
          email: string;
          password: string;
          confirmPassword: string;
        },
        unknown,
        {
          email: string;
          password: string;
          confirmPassword: string;
        }
      >
    | Control<
        {
          email: string;
          password: string;
        },
        unknown,
        {
          email: string;
          password: string;
        }
      >;
  error: FieldError | undefined;
  type: "text" | "email" | "password" | "number";
}
export const CustomInput = ({ label, name, control, error, type }: Props) => {
  return (
    <>
      <div className={`form-group h-23`}>
        <label className="floating-label" htmlFor={name}>
          {label}
        </label>

        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <input
                id={name}
                {...field}
                type={type}
                className={`input ${error ? "input input-error" : ""}`}
              />
            </>
          )}
        />
        {error && <p className={"text-red-400"}>{error.message}</p>}
      </div>
    </>
  );
};
