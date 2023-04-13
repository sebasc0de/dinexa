import { supabase } from "../../../lib/supabase";
import { MoneyMovement } from "../../../types";
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return { create, getAll };
};

const create = async (values: MoneyMovement) => {
  const { data, error } = await supabase.from("money_movements").insert(values);

  return true;
};

const getAll = async () => {
  const { data, error } = await supabase.from("money_movements").select("*");
  return data as MoneyMovement[];
};

export default SupabaseRepository;
