import React from "react";
import { Col, Row } from "react-bootstrap";

// Redux
import { useAppSelector } from "../../redux/hooks";
import {
  monthlySavingCalculator,
  yearSavingCalculator,
} from "../../modules/wallet/domain/savingAmountCalculators";

const SavingStylesResume = () => {
  const wallet = useAppSelector((state) => state.wallet);

  const monthlySavings = monthlySavingCalculator(
    wallet.savingPercentage,
    wallet.secureMonthlyIncome
  );

  const yearSavings = yearSavingCalculator(
    wallet.savingPercentage,
    wallet.secureMonthlyIncome
  );

  return (
    <Row className="savingStylesResume fade-in-top mb-3">
      <h5 className="subtitle mb-3">Saving resume</h5>
      <Col cols={8} className="savingResumeItem">
        <span className="savingResumeItem--title">Spected per month</span>
        <span className="savingResumeItem--total">${monthlySavings}</span>
        <small className="savingResumeItem--small">
          You are saving
          <span className="money gain"> {wallet.savingPercentage}% </span>
          per month
        </small>
      </Col>
      <Col className="savingResumeItem" cols={4}>
        <span className="savingResumeItem--title">Spected per year</span>
        <span className="savingResumeItem--total">${yearSavings}</span>
        <small className="savingResumeItem--small">Desc</small>
      </Col>
    </Row>
  );
};

export default SavingStylesResume;
