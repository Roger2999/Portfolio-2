import { Navigate, Outlet } from "react-router-dom";
import { AuthStore } from "../../stores";

export const PrivateGuard = () => {
  const token = AuthStore((state) => state.token);

  return token ? <Outlet /> : <Navigate to={"/login"} replace />;
};
