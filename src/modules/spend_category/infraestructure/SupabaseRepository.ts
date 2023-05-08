import { supabase } from "../../../lib/supabase";
import { SpendCategory } from "../../../types";
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return { getAll };
};

const getAll = async () => {
  const { data, error } = await supabase.from("spend_categories").select("*");
  return data as SpendCategory[];
};

const repository = SupabaseRepository();

export default repository;
