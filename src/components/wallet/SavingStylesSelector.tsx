import { Col, Row } from "react-bootstrap";

// Icons
import { BiBrain } from "react-icons/bi";
import { MdOutlineSavings } from "react-icons/md";
import { TbMoneybag } from "react-icons/tb";

const SavingStylesSelector = () => {
  return (
    <Row className="mb-3">
      <Col md={4} className="savingStylesItem active">
        <MdOutlineSavings size={40} />

        <span className="text-xs d-block subtitle text-center m-0">
          Starter
        </span>
        <small className="text-xs2 d-block text-center desc">
          Setup dinexa for save 5% of all transactions
        </small>
      </Col>
      <Col md={4} className="savingStylesItem">
        <BiBrain size={40} />

        <span className="text-xs d-block subtitle text-center m-0">Smart</span>
        <small className="text-xs2 d-block text-center desc">
          Setup dinexa for save 10% of all transactions
        </small>
      </Col>
      <Col md={4} className="savingStylesItem">
        <TbMoneybag size={40} />

        <span className="text-xs d-block subtitle text-center m-0">Wealth</span>
        <small className="text-xs2 d-block text-center desc">
          Setup dinexa for save 20% of all transactions
        </small>
      </Col>
    </Row>
  );
};
1;

export default SavingStylesSelector;
