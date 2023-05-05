import { supabase } from "../../../lib/supabase";
import { Repository } from "../application/Repository";

const SupabaseRepository = (): Repository => {
  return { updateMoneyInWallet };
};

const updateMoneyInWallet = async (money: number) => {
  const { data, error } = await supabase.from("wallet").insert({
    money,
  });
};

export default SupabaseRepository;
