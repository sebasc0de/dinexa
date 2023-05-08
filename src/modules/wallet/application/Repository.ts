export interface Repository {
  updateMoneyInWallet: (money: number, user_id: string) => Promise<boolean>;
  getMoneyInWallet: (user_id: string) => Promise<number>;
}
