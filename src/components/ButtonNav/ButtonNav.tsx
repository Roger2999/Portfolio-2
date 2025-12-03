import { NavLink } from "react-router-dom";
interface Props extends React.ComponentPropsWithRef<"a"> {
  label?: string;
  className?: string;
  to: string;
}
export const ButtonNav = ({
  label,
  className = "btn",
  to,
  ...props
}: Props) => {
  return (
    <>
      <NavLink to={to} {...props} className={className}>
        {label}
      </NavLink>
    </>
  );
};
