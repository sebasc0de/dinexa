import { AuthLoginData, AuthRegisterData, User } from "../../../types";
import { Repository } from "../application/Repository";
import { supabase } from "../../../lib/supabase";

export const SupabaseRepository = (): Repository => {
  return {
    loginUser,
    createUser,
  };
};

const loginUser = async (user: AuthLoginData) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: user.password,
  });

  if (!error) return data.user;
};

const createUser = async (user: AuthRegisterData) => {
  const { data, error } = await supabase.auth.signUp({
    email: user.email,
    password: user.password,
  });

  console.log(data, error);

  if (!error) return data.user;
};
