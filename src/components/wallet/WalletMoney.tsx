import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Popover right</Popover.Header>
    <Popover.Body>
      And here's some <strong>amazing</strong> content. It's very engaging.
      right?
    </Popover.Body>
  </Popover>
);

const MoneyWallet = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={<p>das</p>}>
    <Button className="money-wallet">Your wallet $321.22</Button>
  </OverlayTrigger>
);

export default MoneyWallet;
