import { create } from "zustand";
import { persist } from "zustand/middleware";
type Project = {
  id: string;
  rol: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[];
};
interface ProjectsState {
  projects: Project[];
  addProject: (project: Omit<Project, "id">) => void;
  removeProject: (id: string) => void;
}
export const ProjectsStore = create(
  persist<ProjectsState>(
    (set) => ({
      projects: [],
      addProject: (project) =>
        set((state) => ({
          projects: [
            ...state.projects,
            { ...project, id: crypto.randomUUID() },
          ],
        })),
      removeProject: (id) =>
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== id),
        })),
    }),
    { name: "projects-storage" }
  )
);
