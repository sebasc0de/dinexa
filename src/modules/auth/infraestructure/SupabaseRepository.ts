import { supabase } from "../../../lib/supabase";
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return {
    loginUser,
    createUser,
  };
};

const loginUser = async () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "",
    password: "",
  });

  return data;
};

const createUser = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: "",
    password: "",
  });

  return data;
};
