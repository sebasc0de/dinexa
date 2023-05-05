import { Repository } from "./Repository";

export const updateWallet = async (repository: Repository, money: number) => {
  return repository.updateMoneyInWallet(money);
};
