import { Button } from "react-bootstrap";
import { SyntheticEvent } from "react";
import { useField } from "../../hooks/useField";
import Form from "react-bootstrap/Form";
import InformativeToolTip from "../UI/Tooltips/Informative";

// Interfaces
import { WalletData } from "../../types";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setWalletData } from "../../redux/slices/wallet-slice";

function InitialConfigForm() {
  // Redux
  const dispatch = useAppDispatch();

  // Form hook
  const { values, onChangeHandler } = useField<WalletData>({
    totalSavings: 0,
    money: 0,
  });

  const onSubmitHandler = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    dispatch(setWalletData(values));
  };

  return (
    <Form onSubmit={onSubmitHandler} className="wallet-form">
      <h5 className="subtitle mb-3">Wallet settings</h5>

      {/* Total savings */}
      <Form.Group className="row mb-3">
        <Form.Label>
          Total savings
          <InformativeToolTip text="Your monthly gains per month. This number helps Dinexa to save your money" />
        </Form.Label>
        <Form.Control
          name="totalSavings"
          onChange={onChangeHandler}
          type="number"
          min={0}
        />
      </Form.Group>

      {/* Cost living average */}
      <Form.Group className="row mb-3">
        <Form.Label>
          Money in wallet
          <InformativeToolTip text="The live cost of your country, this metric helps Dinexa to make recomendations about your money" />
        </Form.Label>
        <Form.Control
          name="money"
          onChange={onChangeHandler}
          type="number"
          min={0}
        />
      </Form.Group>

      <Button type="submit" className="w-100 mt-3 dinexa-button">
        Save changes
      </Button>
    </Form>
  );
}

export default InitialConfigForm;
