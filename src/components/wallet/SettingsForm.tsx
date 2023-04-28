import { SyntheticEvent, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InformativeToolTip from "../UI/Tooltips/Informative";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setSettings } from "../../redux/slices/wallet-slice";
import { useField } from "../../hooks/useField";
import { WalletSettings } from "../../types";
import { Button } from "react-bootstrap";

function SettingsForm() {
  // Redux
  const dispatch = useAppDispatch();

  // Form hook
  const { values, onChangeHandler } = useField<WalletSettings>({
    minMoneyAlert: 0,
    secureMonthlyIncome: 0,
    savingPercentage: 5,
    costLivingAverage: 0,
  });

  const onSubmitHandler = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    console.log("my values", values);
  };

  useEffect(() => {
    dispatch(setSettings(values));
  }, [values]);

  return (
    <Form onSubmit={onSubmitHandler} className="wallet-form">
      <h5 className="subtitle mb-3">Wallet settings</h5>

      {/* Money saving preset */}
      <Form.Group className="row mb-3">
        <Form.Label>
          Saving percentage
          <InformativeToolTip text="The saving percentage configuration for your wallet. Dinexa saves the choosed percentage" />
        </Form.Label>
        <Form.Select
          onChange={onChangeHandler}
          name="savingPercentage"
          aria-label="Default select example"
        >
          <option value="5">5%</option>
          <option value="10">10%</option>
          <option value="20">20%</option>
        </Form.Select>
      </Form.Group>

      {/* Monthly income */}
      <Form.Group className="row mb-3">
        <Form.Label>
          Monthly income
          <InformativeToolTip text="Your monthly gains per month. This number helps Dinexa to save your money" />
        </Form.Label>
        <Form.Control
          name="secureMonthlyIncome"
          onChange={onChangeHandler}
          type="number"
          min={0}
        />
      </Form.Group>

      {/* Cost living average */}
      <Form.Group className="row mb-3">
        <Form.Label>
          Cost living average
          <InformativeToolTip text="The live cost of your country, this metric helps Dinexa to make recomendations about your money" />
        </Form.Label>
        <Form.Control
          name="costLivingAverage"
          onChange={onChangeHandler}
          type="number"
          min={0}
        />
      </Form.Group>

      {/* Monthly alert */}
      <Form.Group className="row">
        <Form.Label>
          Money alert
          <InformativeToolTip text="Receive notifications when your wallet reach this amount" />
        </Form.Label>
        <Form.Control
          onChange={onChangeHandler}
          name="minMoneyAlert"
          type="number"
          min={0}
        />
      </Form.Group>

      <Button type="submit" className="mt-4 dinexa-button w-100">
        Save changes
      </Button>
    </Form>
  );
}

export default SettingsForm;
