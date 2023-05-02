import { Repository } from "./Repository";

export const getAll = async (repository: Repository) => {
  return repository.getAll();
};
