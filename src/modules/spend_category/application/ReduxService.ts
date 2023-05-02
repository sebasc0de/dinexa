import { createSpend } from "../../../redux/slices/spend-slice";
import { Spend } from "../../../types";
import { substractMoneyOfWallet } from "../../wallet/application/ReduxService";
import store from "../../../store";

export const create = async (spend: Spend) => {
  substractMoneyOfWallet(Number(spend.total));

  store.dispatch(createSpend(spend));
};
