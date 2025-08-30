import { Navigate, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { PageNotFound } from "../components";

export const PrivateRouter = () => {
  return (
    <>
      <PageNotFound>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </PageNotFound>
    </>
  );
};
