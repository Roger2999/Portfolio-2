interface Props extends React.ComponentPropsWithRef<"a"> {
  label?: string;
  icon: string;
}
export const PreviewButton = ({ className, label, icon, ...props }: Props) => {
  return (
    <>
      <a
        {...props}
        className={` rounded-3xl p-2 w-32 max-w-[80%] text-center flex justify-around ${
          className || ""
        }`}
      >
        <img src={icon} alt={`icon-${label}`} width={20} height={20} />
        {label}
      </a>
    </>
  );
};
