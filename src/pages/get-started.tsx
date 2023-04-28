// Component imports
import { Row } from "react-bootstrap";
import Layout from "../components/layouts/Dashboard";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";
import MessageTwo from "../components/UI/Messages/MessageTwo";

const GetStarted = () => {
  return (
    <Layout>
      <SimpleTitleOne title="Get started" desc="Follow this tips for reach" />
      <Row className="fade-in-top">
        <MessageTwo
          title="Set up your wallet preferences"
          desc="dasdas"
          imageUrl="images/wallet.svg"
          imageSize={225}
        />
      </Row>
      <Row className="mt-4 fade-in-top">
        <MessageTwo
          title="Manage your money movements"
          desc="dasdas"
          imageUrl="images/money-spends.svg"
          imageSize={225}
        />
      </Row>
    </Layout>
  );
};

export default GetStarted;
