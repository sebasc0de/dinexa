import { toast } from "react-toastify";
import { supabase } from "../../../lib/supabase";
import { Earning } from "../../../types";
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return { create, getAll };
};

const create = async (values: Earning) => {
  const { data, error } = await supabase.from("earnings").insert(values);

  if (!error) toast("Spend has been created");

  return true;
};

const getAll = async () => {
  const { data, error } = await supabase.from("earnings").select("*");
  return data as Earning[];
};

export default SupabaseRepository;
