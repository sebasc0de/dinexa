import { toast } from "react-toastify";
import { supabase } from "../../../lib/supabase";

// Types
import { Spend } from "../../../types";

// Application layer
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return { create, getAll };
};

const create = async (values: Spend) => {
  try {
    const { data, error } = await supabase.from("spends").insert(values);

    if (!error) toast("Spend has been created");

    return true;
  } catch (e) {
    return false;
  }
};

const getAll = async () => {
  try {
    const { data, error } = await supabase.from("spends").select(`
      name,
      id,
      total,
      created_at,
      category(title)
    `);
    return data as Spend[];
  } catch (e) {
    return [];
  }
};

const repository = SupabaseRepository();

export default repository;
