import { supabase } from "../../../lib/supabase";
import { Repository } from "../application/Repository";

const SupabaseRepository = (): Repository => {
  return { updateMoneyInWallet };
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

export default SupabaseRepository;
