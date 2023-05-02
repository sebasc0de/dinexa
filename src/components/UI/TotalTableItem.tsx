import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function TotalTableItem({ total, type = "add" }: Props) {
  const STYLES = type === "add" ? "money gain" : "money spend";

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-top`}>You are saved this money</Tooltip>}
    >
      <span className={STYLES}>{total}</span>
    </OverlayTrigger>
  );
}

interface Props {
  total: number;
  type?: "add" | "substract";
}

export default TotalTableItem;
