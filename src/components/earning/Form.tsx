import { SyntheticEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";

// Types
import { Earning } from "../../types";

// Application layer
import { Repository as EarningRepository } from "../../modules/earning/application/Repository";
import { Repository as WalletRepository } from "../../modules/wallet/application/Repository";
import { updateWallet } from "../../modules/wallet/application/Service";
import { create } from "../../modules/earning/application/Service";

// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setWalletMoney } from "../../redux/slices/wallet-slice";
import { setEarning } from "../../redux/slices/earning-slice";
import { addMoneyToWallet } from "../../modules/wallet/domain/addMoneyToWallet";
import { returnDate } from "../../utils/returnDate";
import { ensureEarningIsValid } from "../../modules/earning/domain/EnsureEarningIsValid";
import { Alert } from "react-bootstrap";

function BasicExample({
  user_id,
  earningRepository,
  walletRepository,
  onComplete,
}: Props) {
  // Redux
  const dispatch = useAppDispatch();

  // Money in wallet
  const { money } = useAppSelector((state) => state.wallet);

  // UseField hook
  const { values, onChangeHandler } = useField<Earning>({
    id: uuid(),
    name: "",
    total: 0,
    user_id,
    created_at: returnDate(true),
  });

  // Error message
  const [error, setError] = useState({ state: false, msg: "" });

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    // Validate form
    const { isValid, msg } = ensureEarningIsValid(values);

    setError({ state: isValid, msg });

    // Dispatch redux and service
    if (isValid) {
      const createEarning = await create(earningRepository, values);

      createEarning && dispatch(setEarning(values));

      const moneyInWallet = addMoneyToWallet(values.total, money);

      const updateMoneyInWallet = await updateWallet(
        walletRepository,
        moneyInWallet,
        user_id
      );

      updateMoneyInWallet && dispatch(setWalletMoney(moneyInWallet));

      onComplete && onComplete();
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
          type="number"
          value={values.total}
          min={0}
        />
      </Form.Group>

      <Button
        style={{ borderRadius: "50px" }}
        className="dinexa-button"
        type="submit"
      >
        Save earning
      </Button>

      {error.msg.length > 1 && (
        <Alert variant="danger text-sm mt-3">{error.msg}</Alert>
      )}
    </Form>
  );
}

interface Props {
  walletRepository: WalletRepository;
  earningRepository: EarningRepository;
  user_id: string;
  onComplete?: () => void;
}

export default BasicExample;
