import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TotalTableItem() {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-top`}>You are saved this money</Tooltip>}
    >
      <span className="money gain">$322.11</span>
    </OverlayTrigger>
  );
}

export default TotalTableItem;
