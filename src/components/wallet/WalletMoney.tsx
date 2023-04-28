import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useAppSelector } from "../../redux/hooks";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const MoneyWallet = () => {
  const money = useAppSelector((state) => state.wallet.money);

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={<p>das</p>}>
      <Button className="money-wallet">Your wallet ${money.toFixed(2)}</Button>
    </OverlayTrigger>
  );
};

export default MoneyWallet;
