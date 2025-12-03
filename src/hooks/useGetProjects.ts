import { useQuery } from "@tanstack/react-query";
import { getProjectsService } from "../services/getProjectsService";

export const useGetProjects = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjectsService,
    staleTime: 60000,
  });
  return { data, isLoading, isError, error };
};
