type Props = React.ComponentPropsWithRef<"div">;
export const Skeleton = ({ ...props }: Props) => {
  return (
    <>
      <div {...props}>
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  );
};
