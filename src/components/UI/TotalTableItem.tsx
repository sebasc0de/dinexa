import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function TotalTableItem({ total, type = "add" }: Props) {
  const STYLES = type === "add" ? "money gain" : "money spend";

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-top`}>You are spended this money</Tooltip>}
    >
      <span className={STYLES}>${total}</span>
    </OverlayTrigger>
  );
}

interface Props {
  total: number;
  type?: "add" | "substract";
}

export default TotalTableItem;
