// Redux
import { createSpend } from "../../../redux/thunks/spend";
import { substractMoneyOfWallet } from "../../wallet/application/Service";
import store from "../../../store";

// Types
import { Spend } from "../../../types";

// Validators
import { checkIfWalletHaveMoney } from "../../wallet/domain/checkIfWalletHaveMoney";
import { Repository } from "../application/Repository";

export const ReduxRepository = (): Repository => {
  return { create, getAll };
};

export const create = async (spend: Spend) => {
  // substractMoneyOfWallet(Number(spend.total));

  const checkWallet = checkIfWalletHaveMoney(spend.total);

  if (checkWallet) {
    store.dispatch(createSpend(spend));
    return true;
  }

  return false;
};

export const getAll = async () => {
  const spends = store.getState().spends as unknown;

  return spends as Spend[];
};
