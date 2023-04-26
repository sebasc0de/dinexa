import { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InformativeToolTip from "../UI/Tooltips/Informative";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setWalletForm } from "../../redux/slices/wallet-slice";
import { useField } from "../../hooks/useField";
import { WalletForm } from "../../types";

function BasicExample() {
  // Redux
  const dispatch = useAppDispatch();

  // Form hook
  const { values, onChangeHandler } = useField<WalletForm>({
    minMoneyAlert: 0,
    secureMonthlyIncome: 0,
  });

  useEffect(() => {
    dispatch(setWalletForm(values));
  }, [values]);

  return (
    <Form className="wallet-form">
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

      <Form.Group className="row ">
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
