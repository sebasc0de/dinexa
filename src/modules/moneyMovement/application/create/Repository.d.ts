import { MoneyMovement } from "../../../../types";

export interface Repository {
  create: (data: MoneyMovement) => void;
  getAll: () => MoneyMovement[];
}
