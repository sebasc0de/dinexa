export interface Repository {
  addMoneyToWallet: (total: number, savings?: number) => void;
  updateSavings: (transactionAmount: number) => void;
  substractMoneyOfWallet: (total: number) => void;
}
