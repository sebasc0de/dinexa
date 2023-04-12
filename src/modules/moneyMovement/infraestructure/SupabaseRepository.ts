import { Repository } from "../application/Repository";

class SupabaseRepository implements Repository {
  async create() {}

  async getAll() {
    return [];
  }
}

export default SupabaseRepository;
