import { Row } from "react-bootstrap";

// Component imports
import Layout from "../components/layouts/Dashboard";
import MessageTwo from "../components/UI/Messages/MessageTwo";
import SimpleTitleOne from "../components/UI/Titles/SimpleTitle";
import InitialConfigModal from "../components/wallet/InitialConfigModal";

// Redux
import { useAppSelector } from "../redux/hooks";

// Validators
import { ensureWalletIsInitialized } from "../modules/wallet/domain/ensureWalletIsConfigured";

const GetStarted = () => {
  const wallet = useAppSelector((state) => state.wallet);

  const initialized = ensureWalletIsInitialized(
    wallet.money,
    wallet.totalSavings
  );

  return (
    <Layout>
      {/* Initial wallet config */}
      <InitialConfigModal walletInitialized={initialized} />

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
