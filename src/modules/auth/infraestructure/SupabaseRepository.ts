import { supabase } from "../../../lib/supabase";
import { AuthLoginData, AuthRegisterData } from "../../../types";
import { Repository } from "../application/Repository";

export const SupabaseRepository = (): Repository => {
  return {
    loginUser,
    createUser,
  };
};

const loginUser = async (user: AuthLoginData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "",
    password: "",
  });

  return data;
};

const createUser = async (user: AuthRegisterData) => {
  const { data, error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  return data;
};
