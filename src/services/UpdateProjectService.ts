import { supabase } from "../lib/supabaseConfig";
import type { FormProjectData } from "../models/form.model";

export const updateProjectService = async (
  id: string,
  project: FormProjectData
) => {
  const { data, error } = await supabase
    .from("projects")
    .update({
      rol: project.rol,
      description: project.description,
      start_date: project.startDate,
      end_date: project.endDate,
      technologies: project.technologies,
    })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
  return { data };
};
