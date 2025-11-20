import { Controller, type Control, type FieldError, type FieldPath, type FieldValues } from "react-hook-form";

interface Props<T extends FieldValues> {
  label: string;
  name: FieldPath<T>;
  control: Control<T>;
  error: FieldError | { message?: string } | undefined;
  options: { value: string; label: string }[];
  multiple?: boolean;
}

export const CustomSelect = <T extends FieldValues,>({ 
  label, 
  name, 
  control, 
  error, 
  options,
  multiple = false 
}: Props<T>) => {
  return (
    <>
      <div className={`form-group flex flex-col gap-2 items-center ${multiple ? "min-h-40" : "h-24"} w-full`}>
        <label className="floating-label text-left font-semibold  w-full" htmlFor={name}>
          {label}
        </label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <>
              <select
                id={name}
                {...field}
                multiple={multiple}
                className={`select w-full h-full ${error ? "select-error" : ""}`}
                value={multiple ? (field.value || []) : field.value || ""}
                onChange={(e) => {
                  if (multiple) {
                    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
                    field.onChange(selectedOptions);
                  } else {
                    field.onChange(e.target.value);
                  }
                }}
              >
                {!multiple && <option value="">Seleccione una opción</option>}
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {multiple && field.value && field.value.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {field.value.map((selectedValue: string) => {
                    const option = options.find(opt => opt.value === selectedValue);
                    return option ? (
                      <span key={selectedValue} className="badge badge-primary">
                        {option.label}
                      </span>
                    ) : null;
                  })}
                </div>
              )}
            </>
          )}
        />
        {error && <p className={"w-full text-red-400 text-left"}>{error.message}</p>}
      </div>
    </>
  );
};

