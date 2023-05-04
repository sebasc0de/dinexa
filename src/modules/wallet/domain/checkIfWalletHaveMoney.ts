// Notifications
import { toast } from "react-toastify";

export const checkIfWalletHaveMoney = (
  total: number,
  moneyInWallet: number
) => {
  if (moneyInWallet <= 0) {
    toast("The wallet does not have enough money to make this transaction");

    return false;
  }

  return true;
};
