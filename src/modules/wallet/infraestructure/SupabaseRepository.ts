import { supabase } from "../../../lib/supabase";
import { Repository } from "../application/Repository";

const SupabaseRepository = (): Repository => {
  return { updateMoneyInWallet, getMoneyInWallet };
};

const getMoneyInWallet = async (user_id: string) => {
  try {
    const { data, error } = await supabase
      .from("wallet")
      .select("money")
      .eq("user_id", user_id);

    if (!error) return data[0].money as number;

    return 0;
  } catch (e) {
    return 0;
  }
};

const updateMoneyInWallet = async (money: number, user_id: string) => {
  try {
    const { data, error } = await supabase
      .from("wallet")
      .update({ money })
      .eq("user_id", user_id);

    if (!error) return true;

    return false;
  } catch (e) {
    return false;
  }
};

const repository = SupabaseRepository();

export default repository;
