import { Col, Row } from "react-bootstrap";

// Components
import Form from "../components/wallet/SettingsForm";
import Calculator from "../components/wallet/SavingCalculator";
import EarningCardOne from "../components/UI/Cards/EarningCardOne";
import Layout from "../components/layouts/Dashboard";

// Icons
import { TbMoneybag, TbPigMoney } from "react-icons/tb";
import { IoWalletOutline } from "react-icons/io5";
import { useAppSelector } from "../redux/hooks";

const Wallet = () => {
  const wallet = useAppSelector((state) => state.wallet);

  return (
    <Layout>
      <Row className="flex-column flex-md-row gap-1 ">
        <Col className="box-1">
          <EarningCardOne
            Icon={TbMoneybag}
            earning={wallet.totalSavings}
            title="Total savings"
          />
        </Col>
        <Col className="box-1">
          <EarningCardOne
            Icon={IoWalletOutline}
            earning={wallet.money}
            title="Wallet"
          />
        </Col>
        <Col className="box-1">
          <EarningCardOne Icon={TbPigMoney} earning={2} title="Spended today" />
        </Col>
      </Row>
      <Row className="flex-column flex-md-row gap-3 mt-3">
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
