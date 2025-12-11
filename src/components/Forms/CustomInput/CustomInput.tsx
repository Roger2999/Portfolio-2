import {
  Controller,
  type Control,
  type FieldError,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  error: FieldError | undefined;
  type: "text" | "email" | "password" | "number" | "date";
}

export const CustomInput = <T extends FieldValues>({
  label,
  name,
  control,
  error,
  type,
}: Props<T>) => {
  return (
    <>
      <div
        className={`form-group flex flex-col  items-center min-h-24 sm:h-24 w-full`}
      >
        <label
          className="floating-label text-left font-semibold w-full"
          htmlFor={name}
        >
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
                className={`input w-full border-gray-400 ${
                  error ? "input input-error" : ""
                }`}
              />
            </>
          )}
        />
        {error && (
          <p className={"w-full text-red-400 text-left"}>{error.message}</p>
        )}
      </div>
    </>
  );
};
