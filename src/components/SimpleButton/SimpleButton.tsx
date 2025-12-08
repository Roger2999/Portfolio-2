import type { ReactNode } from "react";

interface Props extends React.ComponentPropsWithRef<"a"> {
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
    <a {...buttonProps} type={type} className={`mx-2 my-1 ${className}`}>
      {children}
    </a>
  );
};
