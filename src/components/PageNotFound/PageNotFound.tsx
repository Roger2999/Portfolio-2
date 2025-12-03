import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NotFoundComponent } from "./NotFoundComponent/NotFoundComponent";
interface Props {
  children: ReactNode;
}
export const PageNotFound = ({ children }: Props) => {
  return (
    <>
      <Routes>
        {children}
        <Route path="*" element={<Navigate to={"/404"} />} />
        <Route path="/404" element={<NotFoundComponent />} />
      </Routes>
    </>
  );
};
