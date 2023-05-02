import { Col, Row } from "react-bootstrap";

// Components
import Form from "../components/wallet/SettingsForm";
import Calculator from "../components/wallet/SavingCalculator";
import EarningCardOne from "../components/UI/Cards/EarningCardOne";
import Layout from "../components/layouts/Private";

// Icons
import { TbMoneybag, TbPigMoney } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";

// Redux
import { useAppSelector } from "../redux/hooks";

// Utils
import { priceParser } from "../utils/priceParser";

const Wallet = () => {
  const wallet = useAppSelector((state) => state.wallet);

  const totalSavings = priceParser(wallet.totalSavings);
  const money = priceParser(wallet.money);

  return (
    <Layout>
      <Row className="flex-column flex-md-row gap-1 ">
        <Col className="box-1">
          <EarningCardOne
            Icon={TbPigMoney}
            earning={totalSavings}
            title="Total savings"
          />
        </Col>
        <Col className="box-1">
          <EarningCardOne
            Icon={IoWalletOutline}
            earning={money}
            title="Wallet"
          />
        </Col>
        <Col className="box-1">
          <EarningCardOne
            Icon={MdAttachMoney}
            earning={"---"}
            title="Earning today"
          />
        </Col>
        <Col className="box-1">
          <EarningCardOne
            Icon={TbMoneybag}
            earning={"---"}
            title="Spended today"
          />
        </Col>
      </Row>
      <Row className="flex-column flex-md-row gap-3 mt-3">
        <Col className="box-1 p-4">
          <Form />
        </Col>
        <Col className="d-flex flex-column justify-content-between box-1 p-4">
          <Calculator />
        </Col>
      </Row>
    </Layout>
  );
};

export default Wallet;
