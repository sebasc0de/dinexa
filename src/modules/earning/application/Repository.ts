import { Earning, Spend } from "../../../types";

export interface Repository {
  create: (data: Earning) => Promise<boolean>;
  getAll: () => Promise<Earning[]>;
}
