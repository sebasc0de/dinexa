// Project imports
import { supabase } from "../../../lib/supabase";
import { toast } from "react-toastify";

// Types
import { AuthLoginData, AuthRegisterData } from "../../../types";
import { Repository } from "../application/Repository";
import { User } from "@supabase/supabase-js";

export const SupabaseRepository = (): Repository => {
  return {
    loginUser,
    createUser,
    getUser,
  };
};

const loginUser = async (user: AuthLoginData) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });

    error && toast("Invalid user or password. Try again");

    if (!error) return data.user;
  } catch (e) {}
};

const createUser = async (user: AuthRegisterData) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });

    if (!error) return data.user;
  } catch (e) {}
};

const getUser = async () => {
  try {
    const { data, error } = await supabase.auth.getUser();

    if (!error) return data.user as User;

    toast(error.message);
  } catch (e) {}
};
