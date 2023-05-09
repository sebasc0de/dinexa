import { toast } from "react-toastify";
import { supabase } from "../../../lib/supabase";

// Types
import { Earning } from "../../../types";

// Application layer
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return { create, getAll };
};

const create = async (values: Earning) => {
  try {
    const { data, error } = await supabase.from("earnings").insert(values);

    if (error) {
      toast("There has been an error registering this money");
      return false;
    }

    toast("The cash inflow was successfully registered");

    return true;
  } catch (e) {
    return false;
  }
};

const getAll = async () => {
  try {
    const { data, error } = await supabase.from("earnings").select("*");

    return data as Earning[];
  } catch (e) {
    return [];
  }
};

const repository = SupabaseRepository();

export default repository;
