import { Spend } from "../../../types";
import { Repository } from "./Repository";

export const create = async (repository: Repository, moneyMovement: Spend) => {
  return repository.create(moneyMovement);
};

export const getAll = async (repository: Repository) => {
  return repository.getAll();
};
