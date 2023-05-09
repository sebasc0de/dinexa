import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";
import { ToastContainer } from "react-toastify";

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

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    // Validate form

    // Update earning on database - Service
    const createEarning = await create(earningRepository, values);

    // Create new Earning - Dispatch action
    createEarning && dispatch(setEarning(values));

    // New money in wallet
    const moneyInWallet = addMoneyToWallet(values.total, money);

    // Update wallet on database - Service
    const updateMoneyInWallet = await updateWallet(
      walletRepository,
      moneyInWallet,
      user_id
    );

    // Update wallet in redux store
    updateMoneyInWallet && dispatch(setWalletMoney(moneyInWallet));

    // On complete form action
    onComplete && onComplete();
  };

  return (
    <Form className="dinexa-form" onSubmit={(e) => onSubmitHandler(e)}>
      <ToastContainer toastClassName="cofi-toast" position="bottom-left" />

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

      <Button
        style={{ borderRadius: "50px" }}
        className="dinexa-button"
        type="submit"
      >
        Save earning
      </Button>
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
