import { Col, Row } from "react-bootstrap";
import Layout from "../components/layouts/Dashboard";

import Form from "../components/wallet/Form";
import Resume from "../components/wallet/SavingStylesResume";

const Wallet = () => {
  return (
    <Layout>
      <Row>
        <Col>a</Col>
        <Col>b</Col>
        <Col>c</Col>
      </Row>
      <Row className="mt-5 gap-3">
        <Col className="box-1 p-4">
          <Resume />
        </Col>
        <Col md={5} className="box-1 p-4">
          <Form />
        </Col>
      </Row>
    </Layout>
  );
};

export default Wallet;
