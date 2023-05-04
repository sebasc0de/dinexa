import { Repository } from "./Repository";

export const addMoneyToWallet = (
  repository: Repository,
  total: number,
  savings?: number
) => {
  return repository.addMoneyToWallet(total, savings);
};

export const updateSavings = (
  repository: Repository,
  transactionAmount: number
) => {
  return repository.updateSavings(transactionAmount);
};

export const substractMoneyOfWallet = (
  repository: Repository,
  total: number
) => {
  return repository.substractMoneyOfWallet(total);
};
