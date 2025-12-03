import { supabase } from "../lib/supabaseConfig";

export const deleteProjectsService = async (id: string) => {
  const { data, error } = await supabase
    .from("projects")
    .delete()
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return { data };
};
