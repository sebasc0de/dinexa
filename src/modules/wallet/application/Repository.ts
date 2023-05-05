export interface Repository {
  updateMoneyInWallet: (money: number) => Promise<void>;
}
