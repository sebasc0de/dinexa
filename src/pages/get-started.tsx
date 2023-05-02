import { Row } from "react-bootstrap";

// Component imports
import Layout from "../components/layouts/Private";
import MessageTwo from "../components/UI/Messages/MessageTwo";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";
import { useAppSelector } from "../redux/hooks";
import InitialConfigModal from "../components/wallet/InitialConfigModal";

const GetStarted = () => {
  const initialized = useAppSelector((state) => state.wallet.initialized);

  return (
    <Layout>
      {/* Initial wallet config */}
      {!initialized && <InitialConfigModal />}

      <SimpleTitleOne
        title="Get started"
        desc="User's Guide Dinexa recommendations"
      />
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
          title="Add your spends"
          desc="Add, remove and categorize your daily spends for take control of your spends."
          navText="New spend"
          navLink="/spends"
          imageUrl="images/spends.svg"
          imageSize={225}
        />
      </Row>
      <Row className="mt-4 fade-in-top">
        <MessageTwo
          title="Add your earnings"
          desc="Add your earnings to your wallet and take control of your money earnings"
          navText="New earning"
          navLink="/earnings"
          imageUrl="images/money-spends.svg"
          imageSize={225}
        />
      </Row>
    </Layout>
  );
};

export default GetStarted;
