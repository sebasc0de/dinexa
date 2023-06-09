import { supabase } from "../../../lib/supabase";
import { SpendCategory } from "../../../types";
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return { getAll };
};

const getAll = async () => {
  try {
    const { data, error } = await supabase.from("spend_categories").select("*");
    return data as SpendCategory[];
  } catch (e) {
    return [];
  }
};

const repository = SupabaseRepository();

export default repository;
