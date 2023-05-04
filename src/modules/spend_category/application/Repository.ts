import { SpendCategory } from "../../../types";

export interface Repository {
  getAll: () => Promise<SpendCategory[]>;
}
