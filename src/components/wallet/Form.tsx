import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InformativeToolTip from "../UI/Tooltips/Informative";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setSettings } from "../../redux/slices/wallet-slice";
import { useField } from "../../hooks/useField";
import { WalletSettings } from "../../types";

function BasicExample() {
  // Redux
  const dispatch = useAppDispatch();

  // Form hook
  const { values, onChangeHandler } = useField<WalletSettings>({
    minMoneyAlert: 0,
    secureMonthlyIncome: 0,
    savingPercentage: 5,
    costLivingAverage: 0,
  });

  useEffect(() => {
    dispatch(setSettings(values));
  }, [values]);

  return (
    <Form className="wallet-form">
      <h5 className="subtitle mb-3">Wallet settings</h5>

      {/* Money saving preset */}
      <Form.Group className="row mb-3">
        <Form.Label>
          Saving percentage
          <InformativeToolTip text="Text here" />
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
          <InformativeToolTip text="Text here" />
        </Form.Label>
        <Form.Control
          name="secureMonthlyIncome"
          onChange={onChangeHandler}
          type="number"
          min={0}
        />
      </Form.Group>

      {/* MAC */}
      <Form.Group className="row mb-3">
        <Form.Label>
          Cost living average
          <InformativeToolTip text="Text here" />
        </Form.Label>
        <Form.Control
          name="secureMonthlyIncome"
          onChange={onChangeHandler}
          type="number"
          min={0}
        />
      </Form.Group>

      {/* Monthly alert */}
      <Form.Group className="row">
        <Form.Label>
          Money alert
          <InformativeToolTip text="Text here" />
        </Form.Label>
        <Form.Control
          onChange={onChangeHandler}
          name="minMoneyAlert"
          type="number"
          min={0}
        />
      </Form.Group>
    </Form>
  );
}

export default BasicExample;
