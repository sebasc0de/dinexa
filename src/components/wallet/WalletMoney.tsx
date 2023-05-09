import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { useAppSelector } from "../../redux/hooks";
import { priceParser } from "../../utils/priceParser";
import WalletResume from "./WalletResume";

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

  const moneyWallet = priceParser(money);

  return (
    <OverlayTrigger
      trigger="click"
      placement="bottom"
      overlay={
        <Popover className="popOverOne" id={`popover-positioned-bottom`}>
          <Popover.Body>
            <WalletResume />
          </Popover.Body>
        </Popover>
      }
    >
      <Button className="money-wallet">Your wallet {moneyWallet}</Button>
    </OverlayTrigger>
  );
};

export default MoneyWallet;
