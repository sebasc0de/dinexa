import React from "react";
import { Col, Row } from "react-bootstrap";

// Redux
import { useAppSelector } from "../../redux/hooks";
import {
  monthlySavingCalculator,
  yearSavingCalculator,
} from "../../modules/wallet/domain/savingAmountCalculators";
import MessageTwo from "../UI/Messages/MessageTwo";

const SavingCalculator = () => {
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
    <>
      <Row className="savingCalculator fade-in-top mb-3">
        <h5 className="subtitle mb-3">Saving calculator</h5>
        <Col cols={8} className="savingCalculatorItem">
          <span className="savingCalculatorItem--title">Spected per month</span>
          <span className="savingCalculatorItem--total">${monthlySavings}</span>
          {/* <small className="savingResumeItem--small">
          You are saving
          <span className="money gain"> {wallet.savingPercentage}% </span>
          per month
        </small> */}
        </Col>
        <Col className="savingCalculatorItem" cols={4}>
          <span className="savingCalculatorItem--title">Spected per year</span>
          <span className="savingCalculatorItem--total">${yearSavings}</span>
        </Col>
      </Row>

      <MessageTwo
        title="Estimate your savings"
        desc="This is a calculator for estimate your money saving, fill your wallet settings for view the calculator results"
        imageUrl="gifs/Calculator.gif"
      />
    </>
  );
};

export default SavingCalculator;
