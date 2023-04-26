import React from "react";
import { Col, Row } from "react-bootstrap";

// Redux
import { useAppSelector } from "../../redux/hooks";

const SavingStylesResume = () => {
  const wallet = useAppSelector((state) => state.wallet);

  if (wallet.secureMonthlyIncome <= 0) return null;
  return (
    <Row className="savingStylesResume fade-in-top mb-3">
      <h6 className="subtitle mb-3">Saving resume</h6>
      <Col cols={8} className="savingResumeItem">
        <small className="savingResumeItem--title">Spected per month</small>
        <span className="savingResumeItem--total">$995.00</span>
      </Col>
      <Col className="savingResumeItem" cols={4}>
        <small className="savingResumeItem--title">Spected per year</small>
        <span className="savingResumeItem--total">$3200.32</span>
      </Col>
    </Row>
  );
};

export default SavingStylesResume;
