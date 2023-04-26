import React from "react";
import { Col, Row } from "react-bootstrap";

// Redux
import { useAppSelector } from "../../redux/hooks";
import { ensureWalletIsConfigured } from "../../modules/wallet/domain/ensureWalletIsConfigured";
import {
  monthlySavingCalculator,
  yearSavingCalculator,
} from "../../modules/wallet/domain/savingAmountCalculators";

const SavingStylesResume = () => {
  const wallet = useAppSelector((state) => state.wallet);

  const walletExists = ensureWalletIsConfigured(wallet);

  const monthlySavings = monthlySavingCalculator(
    wallet.savingPercentage,
    wallet.secureMonthlyIncome
  );

  const yearSavings = yearSavingCalculator(
    wallet.savingPercentage,
    wallet.secureMonthlyIncome
  );

  if (!walletExists) return null;
  return (
    <Row className="savingStylesResume fade-in-top mb-3">
      <h6 className="subtitle mb-3">Saving resume</h6>
      <Col cols={8} className="savingResumeItem">
        <small className="savingResumeItem--title">Spected per month</small>
        <span className="savingResumeItem--total">${monthlySavings}</span>
      </Col>
      <Col className="savingResumeItem" cols={4}>
        <small className="savingResumeItem--title">Spected per year</small>
        <span className="savingResumeItem--total">${yearSavings}</span>
      </Col>
    </Row>
  );
};

export default SavingStylesResume;
