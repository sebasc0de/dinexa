import { Button } from "react-bootstrap";
import { SyntheticEvent, useState } from "react";
import Form from "react-bootstrap/Form";
import InformativeToolTip from "../UI/Tooltips/Informative";

// Redux
import { useAppDispatch } from "../../redux/hooks";
import { setWalletMoney } from "../../redux/slices/wallet-slice";
import MegaTitleThree from "../UI/Titles/MegaTitleThree";

// Icons
import { AiFillAccountBook } from "react-icons/ai";

function InitialConfigForm({ onStepComplete }: Props) {
  // Redux
  const dispatch = useAppDispatch();

  // Form state
  const [money, setMoney] = useState(0);

  const onSubmitHandler = (e: SyntheticEvent<EventTarget>) => {
    e.preventDefault();

    dispatch(setWalletMoney(money));
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
            onChange={(e) => setMoney(Number(e.target.value))}
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
