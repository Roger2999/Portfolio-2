import { supabase } from "../lib/supabaseConfig";
import type { FormProjectData } from "../models/form.model";
export const createProjectsService = async (projects: FormProjectData) => {
  const { data, error } = await supabase
    .from("projects")
    .insert([
      {
        rol: projects.rol,
        description: projects.description,
        start_date: projects.startDate,
        end_date: projects.endDate,
        technologies: projects.technologies,
      },
    ])
    .select();

  if (error) throw new Error(error.message);

  return {
    data,
  };
};
