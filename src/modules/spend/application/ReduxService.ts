// Redux
import { createSpend } from "../../../redux/thunks/spend";
import { substractMoneyOfWallet } from "../../wallet/application/ReduxService";
import store from "../../../store";

// Types
import { Spend } from "../../../types";

// Validators
import { checkIfWalletHaveMoney } from "../../wallet/domain/checkIfWalletHaveMoney";

export const create = async (spend: Spend) => {
  substractMoneyOfWallet(Number(spend.total));

  const checkWallet = checkIfWalletHaveMoney(spend.total);

  if (checkWallet) store.dispatch(createSpend(spend));
};
