import { WalletSettings } from "../../../types";

export const ensureWalletIsConfigured = (wallet: WalletSettings) => {
  if (wallet.savingPercentage === 0) return false;

  if (wallet.secureMonthlyIncome <= 0) return false;

  return true;
};
