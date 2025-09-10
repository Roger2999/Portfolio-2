type ImgProps = React.ComponentPropsWithRef<"img">;
type StackProps = React.ComponentPropsWithRef<"div">;
interface CardProps extends React.ComponentPropsWithRef<"a"> {
  imgProps?: ImgProps;
  className?: string | undefined;
  stackProps?: StackProps;
}
export const ContactCard = ({
  className,
  imgProps,
  // stackProps,
  ...props
}: CardProps) => {
  return (
    <>
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className}`}
      >
        <img {...imgProps} className={`${imgProps?.className}`} />

        {/*<div {...stackProps} className={`${stackProps?.className}`} />
        <div {...stackProps} className={`${stackProps?.className}`} />*/}
      </a>
    </>
  );
};
