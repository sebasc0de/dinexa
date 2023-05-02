import { createSpend } from "../../../redux/slices/spend-slice";
import { Spend } from "../../../types";
import { addMoneyToWallet } from "../../wallet/application/ReduxService";
import store from "../../../store";

export const create = async (spend: Spend) => {
  addMoneyToWallet({
    total: Number(spend.total),
    type: "add",
  });

  store.dispatch(createSpend(spend));
};

export const getAll = async () => {
  return store.getState().spends;
};
