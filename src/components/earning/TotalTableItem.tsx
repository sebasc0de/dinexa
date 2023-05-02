import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TotalTableItem({ total }: Props) {
  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-top`}>You are saved this money</Tooltip>}
    >
      <span className="money gain">{total}</span>
    </OverlayTrigger>
  );
}

interface Props {
  total: number;
}

export default TotalTableItem;
