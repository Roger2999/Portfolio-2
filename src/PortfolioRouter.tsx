import { PrivateRouter } from "./private/PrivateRouter";
import { Portfolio } from "./Portfolio";
import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { PageNotFound, PrivateGuard } from "./components";
import {
  AboutPage,
  ContactPage,
  HomePage,
  Login,
  ProjectsPage,
  SkillsPage,
} from "./public/pages";

export const PortfolioRouter = () => {
  return (
    <BrowserRouter>
      <Portfolio>
        <PageNotFound>
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route element={<PrivateGuard />}>
            <Route path="/private/*" element={<PrivateRouter />} />
          </Route>
        </PageNotFound>
      </Portfolio>
    </BrowserRouter>
  );
};
