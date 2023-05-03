import {
  updateWalletMoney,
  updateWalletSavings,
} from "../../../redux/slices/wallet-slice";
import store from "../../../store";

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

// Substract money of wallet per operation
export const substractMoneyOfWallet = async (total: number) => {
  const money = store.getState().wallet.money;
  const substract = money - total;

  store.dispatch(updateWalletMoney(substract));
};
