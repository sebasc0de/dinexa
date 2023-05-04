// Redux
import store from "../../../store";
import {
  updateWalletMoney,
  updateWalletSavings,
} from "../../../redux/slices/wallet-slice";

// Interfaces
import { Repository } from "../application/Repository";

export const ReduxRepository = (): Repository => {
  return {
    addMoneyToWallet,
    updateSavings,
    substractMoneyOfWallet,
  };
};

export const addMoneyToWallet = (total: number, savings?: number) => {
  // Get money in the wallet
  const moneyInWallet = store.getState().wallet.money;

  // Money in wallet + earning total
  const walletWithEarningTotal = moneyInWallet + total;

  if (savings)
    return store.dispatch(updateWalletMoney(walletWithEarningTotal - savings));

  if (!savings) return store.dispatch(updateWalletMoney(moneyInWallet + total));
};

export const updateSavings = (transactionAmount: number) => {
  const savingPercentage = store.getState().wallet.settings.savingPercentage;

  const result = (transactionAmount * savingPercentage) / 100;

  store.dispatch(updateWalletSavings(result));

  return result;
};

export const substractMoneyOfWallet = (total: number) => {
  const money = store.getState().wallet.money;
  const substract = money - total;

  store.dispatch(updateWalletMoney(substract));
};
