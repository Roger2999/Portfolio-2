import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProjectsService } from "../services/CreateProjectService";
import type { FormProjectData } from "../models/form.model";
import { deleteProjectsService } from "../services/DeleteProjectService";
import {
  loginSupabaseService,
  registerSupabaseService,
} from "../services/authSupabaseService";
import { AuthStore } from "../stores";

export const useCreateProject = () => {
  const queryCLient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (project: FormProjectData) => createProjectsService(project),
    onSuccess: () => {
      queryCLient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      console.log(`Ha ocurrido un error ${error.message}`);
    },
  });
  return { mutate, isPending, isError };
};
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { mutate, isPending, isError } = useMutation({
    mutationFn: (id: string) => deleteProjectsService(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
    onError: (error) => {
      console.log(`Ha ocurrido un error ${error.message}`);
    },
  });
  return { mutate, isPending, isError };
};

export const useRegisterSupabaseMutation = () => {
  const { mutate, isPending } = useMutation({
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
  return { mutate, isPending };
};
export const useLoginSupabaseMutation = () => {
  const login = AuthStore((state) => state.login);
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await loginSupabaseService(data.email, data.password);
      return response;
    },
    onSuccess: (data) => {
      login(data.user.email!, data.session.access_token);
    },
    onError: (error) => {
      console.log(`Ha ocurrido un error: ${error.message}`);
    },
  });
  return { mutate, isPending };
};
