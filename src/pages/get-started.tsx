// Component imports
import { Row } from "react-bootstrap";
import Layout from "../components/layouts/Dashboard";
import MessageTwo from "../components/UI/Messages/MessageTwo";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";

const GetStarted = () => {
  return (
    <Layout>
      <SimpleTitleOne title="Get started" desc="Follow this tips for reach" />
      <Row className="fade-in-top">
        <MessageTwo
          title="Set up your wallet preferences"
          desc="Define your monthly income, saving percentage, cost living average and other params for receive Dinexa help about your finances."
          navText="Set up now"
          navLink="/wallet"
          imageUrl="images/wallet.svg"
          imageSize={225}
        />
      </Row>
      <Row className="mt-4 fade-in-top">
        <MessageTwo
          title="Manage your money movements"
          desc="Add, remove and categorize your daily spends for take control of your finances."
          navText="New spend"
          navLink="/dashboard"
          imageUrl="images/money-spends.svg"
          imageSize={225}
        />
      </Row>
    </Layout>
  );
};

export default GetStarted;
