import { ProjectComponent } from "../../../components";
import { ThemeStore } from "../../../stores";
import { ProjectsStore } from "../../../stores/ProjectsStore/ProjectsStore";
import "./ProjectsPage.css";
export const ProjectsPage = () => {
  const theme = ThemeStore((state) => state.theme);
  const projects = ProjectsStore((state) => state.projects);
  return (
    <>
      <div className="projects-page-container flex flex-1 flex-col h-full w-full items-center justify-start">
        <div
          className={`projects-container ${
            theme == "dark" ? "text-gray-300" : "text-gray-500"
          }`}
        >
          <h1>Mis Proyectos</h1>
        </div>
        <div
          className={`skills-container py-10 mb-10 border-t-4 border-blue-500 mt-8  ${
            theme === "dark" ? "bg-gray-700" : "bg-gray-200"
          }`}
        >
          {projects.map((project) => (
            <ProjectComponent
              start={project.startDate}
              end={project.endDate}
              rol={project.rol}
              description={project.description}
              skills={project.technologies}
            />
          ))}
        </div>
      </div>
    </>
  );
};
