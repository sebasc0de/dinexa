import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Categories from "./CategoriesSelector";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";

// Spend categories
import { SupabaseRepository } from "../../modules/spend_category/infraestructure/SupabaseRepository";

// Types
import { Spend } from "../../types";

// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createSpend } from "../../redux/thunks/spend";
import { updateMoneyInWallet } from "../../redux/thunks/wallet";

// Domain layer
import { checkIfWalletHaveMoney } from "../../modules/wallet/domain/checkIfWalletHaveMoney";
import { substractMoneyOfWallet } from "../../modules/wallet/domain/substractMoneyOfWallet";

function BasicExample({ user_id }: { user_id: string }) {
  // Dispatch
  const { money } = useAppSelector((state) => state.wallet);
  const dispatch = useAppDispatch();

  // Spend categories repository
  const repository = SupabaseRepository();

  // Form hook
  const { values, onChangeHandler } = useField<Spend>({
    category: "",
    id: uuid(),
    name: "",
    total: 0,
    user_id,
  });

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    // Check if wallet have money
    const checkWallet = checkIfWalletHaveMoney(values.total, money);

    // Set spend in redux store - Dispatch action
    if (checkWallet) {
      dispatch(createSpend(values));

      // Update wallet money
      const moneyInWallet = substractMoneyOfWallet(values.total, money);
      dispatch(updateMoneyInWallet({ money: moneyInWallet, user_id }));
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
      <Categories repository={repository} onChangeHandler={onChangeHandler} />

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

export default BasicExample;
