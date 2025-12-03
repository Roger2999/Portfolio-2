import { Navigate, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { PageNotFound } from "../components";
import { Projects } from "./Projects/Projects";
import { Skills } from "./Skills/Skills";

export const PrivateRouter = () => {
  return (
    <>
      <PageNotFound>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manageProjects" element={<Projects />} />
        <Route path="/manageSkills" element={<Skills />} />
      </PageNotFound>
    </>
  );
};
