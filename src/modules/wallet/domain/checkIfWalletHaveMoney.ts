import store from "../../../store";

// Notifications
import { toast } from "react-toastify";

export const checkIfWalletHaveMoney = (total: number) => {
  const wallet = store.getState().wallet;

  if (wallet.money <= 0) {
    toast("The wallet havent money.");

    return false;
  }

  return true;
};
