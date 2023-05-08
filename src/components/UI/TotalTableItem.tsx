import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { priceParser } from "../../utils/priceParser";

function TotalTableItem({ total, message, type = "add" }: Props) {
  const STYLES = type === "add" ? "money gain" : "money spend";

  const parsedTotal = priceParser(total);

  return (
    <OverlayTrigger
      placement="top"
      overlay={<Tooltip id={`tooltip-top`}>{message}</Tooltip>}
    >
      <span className={STYLES}>{parsedTotal}</span>
    </OverlayTrigger>
  );
}

interface Props {
  total: number;
  message: string;
  type?: "add" | "substract";
}

export default TotalTableItem;
