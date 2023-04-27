import { Col, Row } from "react-bootstrap";
import Layout from "../components/layouts/Dashboard";

import Form from "../components/wallet/Form";
import Calculator from "../components/wallet/SavingCalculator";
import EarningCardOne from "../components/UI/Cards/EarningCardOne";

const Wallet = () => {
  return (
    <Layout>
      <Row className="gap-3">
        <Col className="box-1">
          <EarningCardOne earning={2} title="Total savings" />
        </Col>
        <Col className="box-1">
          <EarningCardOne earning={2} title="Wallet" />
        </Col>
        <Col className="box-1">
          <EarningCardOne earning={2} title="Spended today" />
        </Col>
      </Row>
      <Row className="mt-3 gap-3">
        <Col className="box-1 p-4">
          <Form />
        </Col>
        <Col className="box-1 p-4">
          <Calculator />
        </Col>
      </Row>
    </Layout>
  );
};

export default Wallet;
