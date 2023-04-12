import { supabase } from "../../../lib/supabase";
import { MoneyMovement } from "../../../types";
import { Repository } from "../application/Repository";

class SupabaseRepository implements Repository {
  async create(values: MoneyMovement) {
    const { data, error } = await supabase
      .from("money_movements")
      .insert(values);

    console.log(data, error);

    return true;
  }

  async getAll() {
    const { data, error } = await supabase.from("money_movements").select("*");
    return data as MoneyMovement[];
  }
}

export default SupabaseRepository;
