import { Repository } from "./Repository";

export const updateWallet = async (
  repository: Repository,
  money: number,
  user_id: string
) => {
  return repository.updateMoneyInWallet(money, user_id);
};

export const getMoney = async (repository: Repository, user_id: string) => {
  return repository.getMoneyInWallet(user_id);
};
