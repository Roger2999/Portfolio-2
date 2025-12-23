interface Props extends React.ComponentPropsWithRef<"a"> {
  label?: string;
}
export const PreviewButton = ({ className, label, ...props }: Props) => {
  return (
    <>
      <a
        {...props}
        className={` rounded-3xl p-2 w-32 max-w-[80%] text-center ${
          className || ""
        }`}
      >
        {label}
      </a>
    </>
  );
};
