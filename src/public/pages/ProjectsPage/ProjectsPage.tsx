import { ProjectComponent, Skeleton } from "../../../components";
import { ThemeStore } from "../../../stores";
//import { ProjectsStore } from "../../../stores/ProjectsStore/ProjectsStore";
import "./ProjectsPage.css";
import { useGetProjects } from "../../../hooks/useGetProjects";
export const ProjectsPage = () => {
  const theme = ThemeStore((state) => state.theme);
  //const projects = ProjectsStore((state) => state.projects);
  const { data: projects, isLoading } = useGetProjects();
  return (
    <>
      <div className="projects-page-container flex flex-col flex-1  h-full w-full items-center justify-center">
        <div
          className={`projects-container ${
            theme == "dark" ? "text-gray-300" : "text-gray-500"
          }`}
        >
          <h1>Mis Proyectos</h1>
        </div>
        {isLoading ? (
          <>
            {Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  className="flex flex-col items-center w-[800px] max-w-[80%] gap-4 mb-5"
                  key={index}
                >
                  <Skeleton className="flex w-[600px] max-w-[80%] flex-col gap-4" />
                </div>
              ))}
          </>
        ) : (
          <div
            className={`skills-container py-10 mb-10 border-t-4 border-blue-500 mt-8 glass  ${
              theme === "light" && "bg-gray-200"
            }`}
          >
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <div key={project.id}>
                  <ProjectComponent
                    start={project.start_date}
                    end={project.end_date}
                    rol={project.rol}
                    description={project.description}
                    skills={project.technologies}
                    preview_url={project.preview_url}
                    code={project.code}
                  />
                </div>
              ))
            ) : (
              <p className="text-center">No hay proyectos para mostrar.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};
