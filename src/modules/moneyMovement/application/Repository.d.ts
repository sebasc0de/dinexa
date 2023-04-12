import { MoneyMovement } from "../../../types";

export interface Repository {
  create: (data: MoneyMovement) => Promise<boolean>;
  getAll: () => Promise<MoneyMovement[]>;
}
