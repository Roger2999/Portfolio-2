import type { ReactNode } from "react";

interface Props extends React.ComponentPropsWithRef<"button"> {
  children: ReactNode;
  className?: string | undefined;
}

export const SimpleButton = ({
  children,
  className,
  ...buttonProps
}: Props) => {
  return (
    <button {...buttonProps} className={`${className}`}>
      {children}
    </button>
  );
};
