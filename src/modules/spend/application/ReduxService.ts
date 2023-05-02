import { createSpend } from "../../../redux/slices/spend-slice";
import { Spend } from "../../../types";
import { updateWallet } from "../../wallet/application/ReduxService";
import store from "../../../store";

export const create = async (spend: Spend) => {
  updateWallet({
    total: Number(spend.total),
    type: "add",
  });

  store.dispatch(createSpend(spend));
};

export const getAll = async () => {
  return store.getState().spends;
};
