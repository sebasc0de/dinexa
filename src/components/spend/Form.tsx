import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Categories from "./CategoriesSelector";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";
import { returnDate } from "../../utils/returnDate";

// Types
import { Spend } from "../../types";

// Application layer
import { updateWallet } from "../../modules/wallet/application/Service";
import { create } from "../../modules/spend/application/Service";
import { Repository as SpendRepository } from "../../modules/spend/application/Repository";
import { Repository as WalletRepository } from "../../modules/wallet/application/Repository";

// Domain layer
import { checkIfWalletHaveMoney } from "../../modules/wallet/domain/checkIfWalletHaveMoney";
import { substractMoneyOfWallet } from "../../modules/wallet/domain/substractMoneyOfWallet";

// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setSpend } from "../../redux/slices/spend-slice";
import { setWalletMoney } from "../../redux/slices/wallet-slice";

function BasicExample({ user_id, spendRepository, walletRepository }: Props) {
  // Dispatch
  const { money } = useAppSelector((state) => state.wallet);
  const dispatch = useAppDispatch();

  // Form hook
  const { values, onChangeHandler } = useField<Spend>({
    id: uuid(),
    created_at: returnDate(true),
    category: "",
    name: "",
    total: 0,
    user_id,
  });

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    // Check if wallet have money
    const checkWallet = checkIfWalletHaveMoney(values.total, money);

    if (checkWallet) {
      // Create spend in database - Service
      const createSpend = await create(spendRepository, values);

      // Create spend in redux store
      createSpend && dispatch(setSpend(values));

      // Substract money of wallet
      const moneyInWallet = substractMoneyOfWallet(values.total, money);

      // Update money in database - Service
      const updateMoneyInWallet = await updateWallet(
        walletRepository,
        moneyInWallet,
        user_id
      );

      // Update wallet in redux store
      updateMoneyInWallet && dispatch(setWalletMoney(moneyInWallet));
    }
  };

  return (
    <Form className="dinexa-form" onSubmit={(e) => onSubmitHandler(e)}>
      {/* Name */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name:</Form.Label>
        <Form.Control
          name="name"
          autoComplete="off"
          onChange={onChangeHandler}
          type="text"
        />
      </Form.Group>

      {/* Amount - total */}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Total:</Form.Label>
        <Form.Control
          name="total"
          autoComplete="off"
          onChange={onChangeHandler}
          type="text"
        />
      </Form.Group>

      {/* Spend categories */}
      <Categories onChangeHandler={onChangeHandler} />

      <Button
        style={{ borderRadius: "50px" }}
        className="dinexa-button"
        type="submit"
      >
        Save spend
      </Button>
    </Form>
  );
}

interface Props {
  user_id: string;
  spendRepository: SpendRepository;
  walletRepository: WalletRepository;
}

export default BasicExample;
