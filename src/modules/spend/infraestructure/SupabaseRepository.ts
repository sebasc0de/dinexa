import { toast } from "react-toastify";
import { supabase } from "../../../lib/supabase";
import { Spend } from "../../../types";
import { Repository } from "../application/Repositories";

export const SupabaseRepository = (): Repository => {
  return { create, getAll };
};

const create = async (values: Spend) => {
  const { data, error } = await supabase.from("money_movements").insert(values);

  if (!error) toast("Spend has been created");

  return true;
};

const getAll = async () => {
  const { data, error } = await supabase.from("money_movements").select("*");
  return data as Spend[];
};

export default SupabaseRepository;
