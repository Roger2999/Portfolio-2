import type { ReactNode } from "react";

interface Props extends React.ComponentPropsWithRef<"button"> {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string | undefined;
}
export const SimpleButton = ({
  children,
  type = "button",
  className = "btn",
  ...buttonProps
}: Props) => {
  return (
    <button {...buttonProps} type={type} className={`mx-2 my-1 ${className}`}>
      {children}
    </button>
  );
};
