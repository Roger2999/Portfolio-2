import { ProjectComponent } from "../../../components";
import { ThemeStore } from "../../../stores";
//import { ProjectsStore } from "../../../stores/ProjectsStore/ProjectsStore";
import "./ProjectsPage.css";
import { useGetProjects } from "../../../hooks/useGetProjects";
export const ProjectsPage = () => {
  const theme = ThemeStore((state) => state.theme);
  //const projects = ProjectsStore((state) => state.projects);
  const { data: projects } = useGetProjects();
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
          className={`skills-container py-10 mb-10 border-t-4 border-blue-500 mt-8 glass  ${
            theme === "light" && "bg-gray-200"
          }`}
        >
          {projects && projects.length > 0 ? (
            projects.map((project) => (
              <ProjectComponent
                start={project.start_date}
                end={project.end_date}
                rol={project.rol}
                description={project.description}
                skills={project.technologies}
              />
            ))
          ) : (
            <p className="text-center">No hay proyectos para mostrar.</p>
          )}
        </div>
      </div>
    </>
  );
};
