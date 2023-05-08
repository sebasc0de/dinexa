import { toast } from "react-toastify";
import { supabase } from "../../../lib/supabase";
import { Spend } from "../../../types";
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return { create, getAll };
};

const create = async (values: Spend) => {
  const { data, error } = await supabase.from("spends").insert(values);

  if (!error) toast("Spend has been created");

  return true;
};

const getAll = async () => {
  const { data, error } = await supabase.from("spends").select("*");
  return data as Spend[];
};

const repository = SupabaseRepository();

export default repository;
