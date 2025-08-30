import { NavLink } from "react-router-dom";
interface Props extends React.ComponentPropsWithRef<"button"> {
  label?: string;
  type?: "submit" | "reset" | "button" | undefined;
  className?: string;
  path: string;
}
export const ButtonNav = ({
  label,
  className = "btn btn-info",
  path,
  ...props
}: Props) => {
  return (
    <>
      <button {...props} className={className}>
        <NavLink to={path}>{label}</NavLink>
      </button>
    </>
  );
};
