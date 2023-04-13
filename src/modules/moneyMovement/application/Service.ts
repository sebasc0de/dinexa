import { MoneyMovement } from "../../../types";
import { Repository } from "./Repository";

export const create = async (
  repository: Repository,
  moneyMovement: MoneyMovement
) => {
  return repository.create(moneyMovement);
};

export const getAll = async (repository: Repository) => {
  return repository.getAll();
};
