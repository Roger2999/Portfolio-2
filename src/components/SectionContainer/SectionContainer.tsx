import type { ReactNode } from "react";

interface Props {
  id: string;
  children: ReactNode;
  maxWidth: string | undefined;
  customWidth: string | undefined;
  className: string | undefined;
}
export const SectionContainer = ({
  id,
  children,
  maxWidth,
  customWidth,
  className = "",
}: Props) => {
  const style = {
    maxWidth: maxWidth || "none",
    width: customWidth || "auto",
  };

  return (
    <section id={id} style={style} className={className}>
      {children}
    </section>
  );
};
