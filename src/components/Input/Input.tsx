interface InputProps {
  name: string;
  labelProps: React.ComponentPropsWithRef<"label">;
  errorProps: React.ComponentPropsWithRef<"p">;
  buttonProps: React.ComponentPropsWithRef<"button">;
}
export const Input = ({
  name,
  labelProps,
  errorProps,
  buttonProps,
  ...inputProps
}: InputProps) => {
  return (
    <>
      <div className="input-container">
        {labelProps && <label htmlFor={name} {...labelProps} />}
        <input {...inputProps} />
        {buttonProps && <button {...buttonProps} />}
      </div>
      {errorProps && <p {...errorProps} />}
    </>
  );
};
