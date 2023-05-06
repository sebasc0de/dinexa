import { SyntheticEvent } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Project imports
import { v4 as uuid } from "uuid";
import { useField } from "../../hooks/useField";
import { ToastContainer } from "react-toastify";

// Types
import { Earning } from "../../types";

// Redux
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setWalletMoney } from "../../redux/slices/wallet-slice";
import { setEarning } from "../../redux/slices/earning-slice";

function BasicExample({ user_id }: { user_id: string }) {
  // Redux
  const { money, totalSavings } = useAppSelector((state) => state.wallet);
  const { savingPercentage } = useAppSelector((state) => state.wallet.settings);
  const dispatch = useAppDispatch();

  // UseField hook
  const { values, onChangeHandler } = useField<Earning>({
    id: uuid(),
    name: "",
    total: 0,
    user_id,
  });

  const onSubmitHandler = async (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    // Validate form

    // Update wallet - Dispatch action
    dispatch(setWalletMoney(values.total));

    // Create new Earning - Dispatch action
    dispatch(setEarning(values));
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

export default BasicExample;
