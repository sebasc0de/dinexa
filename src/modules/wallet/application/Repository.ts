export interface Repository {
  updateMoneyInWallet: (money: number, user_id: string) => Promise<boolean>;
}
