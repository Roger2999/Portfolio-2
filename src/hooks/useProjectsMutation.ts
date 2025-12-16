import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectsService } from "../services/CreateProjectService";
import type { FormProjectData } from "../models/form.model";
import { deleteProjectsService } from "../services/DeleteProjectService";
import { updateProjectService } from "../services/UpdateProjectService";
import {
  loginSupabaseService,
  registerSupabaseService,
} from "../services/authSupabaseService";
import { AuthStore } from "../stores";
import type { Projects } from "../services/getProjectsService";
import { useNavigate } from "react-router-dom";

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (project: FormProjectData) => createProjectsService(project),
    onMutate: async (newProject) => {
      await queryClient.cancelQueries({ queryKey: ["projects"] });
      const previousProjects = queryClient.getQueryData(["projects"]);
      queryClient.setQueryData(
        ["projects"],
        (oldData: FormProjectData[] | undefined) => {
          return oldData
            ? [...oldData, { ...newProject, id: crypto.randomUUID() }]
            : [{ ...newProject, id: crypto.randomUUID() }];
        }
      );
      return { previousProjects };
    },
    // onSuccess: async () => {
    //   await queryClient.invalidateQueries({ queryKey: ["projects"] });
    // },
    onError: (error, _, context) => {
      console.log(`Ha ocurrido un error ${error.message}`);
      if (context?.previousProjects !== undefined) {
        queryClient.setQueryData(["projects"], context.previousProjects);
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
  return { mutate, isPending, isError, isSuccess };
};
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (id: string) => deleteProjectsService(id),
    onMutate: async (newProjectId) => {
      await queryClient.cancelQueries({ queryKey: ["projects"] });
      const previousProjects = queryClient.getQueryData(["projects"]);
      queryClient.setQueryData(
        ["projects"],
        (oldData: Projects[] | undefined) => {
          return oldData
            ? oldData.filter((data) => data.id !== newProjectId)
            : oldData;
        }
      );
      return { previousProjects };
    },
    // onSuccess: async () => {
    //   await queryClient.invalidateQueries({ queryKey: ["projects"] });
    // },
    onError: (error, _, context) => {
      console.log(`Ha ocurrido un error ${error.message}`);
      if (context?.previousProjects !== null) {
        queryClient.setQueryData(["projects"], context?.previousProjects);
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
  return { mutate, isPending, isError };
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: ({ id, project }: { id: string; project: FormProjectData }) =>
      updateProjectService(id, project),
    onMutate: async ({ id, project }) => {
      await queryClient.cancelQueries({ queryKey: ["projects"] });
      const previousProjects = queryClient.getQueryData<Projects[] | undefined>(
        ["projects"]
      );
      queryClient.setQueryData(["projects"], (oldData: Projects[]) =>
        oldData
          ? oldData.map((p) =>
              p.id === id
                ? {
                    ...p,
                    rol: project.rol,
                    description: project.description,
                    start_date: project.startDate,
                    end_date: project.endDate,
                    technologies: project.technologies,
                  }
                : p
            )
          : oldData
      );
      return { previousProjects };
    },
    onError: (error, _, context) => {
      console.log(`Ha ocurrido un error ${error.message}`);
      if (context?.previousProjects !== undefined) {
        queryClient.setQueryData(["projects"], context.previousProjects);
      }
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
  return { mutate, isPending, isError };
};

export const useRegisterSupabaseMutation = () => {
  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      registerSupabaseService(data.email, data.password);
    },
    onSuccess: () => {
      console.log("Usuario registrado con éxito");
    },
    onError: (error) => {
      console.log(`Ha ocurrido un error: ${error.message}`);
    },
  });
  return { mutate, isPending, isError, error };
};
export const useLoginSupabaseMutation = () => {
  const login = AuthStore((state) => state.login);
  const navigate = useNavigate();
  const { mutate, isPending, isSuccess, isError, error } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await loginSupabaseService(data.email, data.password);
      return response;
    },
    onSuccess: (data) => {
      login(data.user.email!, data.session.access_token);
      navigate("/private/manageProjects");
    },
    onError: (error) => {
      console.log(`Ha ocurrido un error: ${error.message}`);
    },
  });
  return { mutate, isPending, isSuccess, isError, error };
};
