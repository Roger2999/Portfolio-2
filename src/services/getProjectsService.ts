import { supabase } from "../lib/supabaseConfig";

interface Projects {
  id: string;
  user_id: string;
  rol: string;
  description: string;
  start_date: string;
  end_date: string;
  technologies: string[];
}
export const getProjectsService = async (): Promise<Projects[]> => {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) throw new Error(error.message);
  return data as Projects[];
};
