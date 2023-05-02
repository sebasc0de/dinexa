import { Spend } from "../../../types";

export interface Repository {
  create: (data: Spend) => Promise<boolean>;
  getAll: () => Promise<Spend[]>;
}
