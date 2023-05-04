import { Spend } from "../../../types";
import { Repository } from "./Repository";

export const create = async (repository: Repository, spend: Spend) => {
  return repository.create(spend);
};

export const getAll = async (repository: Repository) => {
  return repository.getAll();
};
