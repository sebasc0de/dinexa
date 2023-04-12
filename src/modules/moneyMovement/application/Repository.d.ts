import { MoneyMovement } from "../../../types";

export interface Repository {
  create: (data: MoneyMovement) => Promise<void>;
  getAll: () => Promise<MoneyMovement[]>;
}
