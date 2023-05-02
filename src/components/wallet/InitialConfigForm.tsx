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

function InitialConfigForm({ onStepComplete }: Props) {
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
    onStepComplete();
  };

  return (
    <Form onSubmit={onSubmitHandler} className="wallet-form">
      <h5 className="subtitle mb-3">Wallet settings</h5>

      {/* Total savings */}
      <Form.Group className="row mb-3">
        <Form.Label>
          Total savings
          <InformativeToolTip text="Total savings before use Dinexa app" />
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
          <InformativeToolTip text="Total money on your wallet before use Dinexa app" />
        </Form.Label>
        <Form.Control
          name="money"
          onChange={onChangeHandler}
          type="number"
          min={0}
        />
      </Form.Group>

      <Button type="submit" className="w-100 dinexa-button">
        Save changes
      </Button>
    </Form>
  );
}

interface Props {
  onStepComplete: () => void;
}

export default InitialConfigForm;
