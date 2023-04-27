import { Col, Row } from "react-bootstrap";

// Components
import Form from "../components/wallet/Form";
import Calculator from "../components/wallet/SavingCalculator";
import EarningCardOne from "../components/UI/Cards/EarningCardOne";
import Layout from "../components/layouts/Dashboard";

// Icons
import { TbMoneybag, TbPigMoney } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";

const Wallet = () => {
  return (
    <Layout>
      <Row className="gap-3">
        <Col className="box-1">
          <EarningCardOne Icon={TbMoneybag} earning={2} title="Total savings" />
        </Col>
        <Col className="box-1">
          <EarningCardOne Icon={IoWalletOutline} earning={2} title="Wallet" />
        </Col>
        <Col className="box-1">
          <EarningCardOne Icon={TbPigMoney} earning={2} title="Spended today" />
        </Col>
      </Row>
      <Row className="mt-3 gap-3">
        <Col className="box-1 p-4">
          <Form />
        </Col>
        <Col className="box-1 p-4" style={{ height: "fit-content" }}>
          <Calculator />
        </Col>
      </Row>
    </Layout>
  );
};

export default Wallet;
