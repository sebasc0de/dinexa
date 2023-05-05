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
import MegaTitleThree from "../UI/Titles/MegaTitleThree";

// Icons
import { AiFillAccountBook } from "react-icons/ai";

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
    <>
      <MegaTitleThree
        title="Add money to wallet"
        desc="Description here"
        Icon={AiFillAccountBook}
      />

      <Form onSubmit={onSubmitHandler}>
        {/* Cost living average */}
        <Form.Group className="row px-3">
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
          <Button className="dinexa-button w-100 mt-2" type="submit">
            Save changes
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

interface Props {
  onStepComplete: () => void;
}

export default InitialConfigForm;
