import { Repository } from "./Repository";

export const updateWallet = async (
  repository: Repository,
  money: number,
  user_id: string
) => {
  return repository.updateMoneyInWallet(money, user_id);
};
