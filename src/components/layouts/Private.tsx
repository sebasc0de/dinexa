import { Col, Container, Row } from "react-bootstrap";
import { ReactNode } from "react";
import Header from "../UI/Headers/Dashboard";
import SidebarOne from "../UI/Sidebars/SidebarOne";
import InitialConfigModal from "../wallet/InitialConfigModal";

// Data imports
import { data } from "../../data/dashboard/SidebarOne";

// Validators
import { ensureWalletIsInitialized } from "../../modules/wallet/domain/ensureWalletIsConfigured";

// Redux
import { useAppSelector } from "../../redux/hooks";

const Private = ({ children }: Props) => {
  const wallet = useAppSelector((state) => state.wallet);

  const initialized = ensureWalletIsInitialized(
    wallet.money,
    wallet.totalSavings
  );

  return (
    <>
      {/* Initial wallet config */}
      {!initialized && <InitialConfigModal />}

      <Header />

      <Container fluid>
        <Row>
          <Col md={2}>
            <SidebarOne navData={data} />
          </Col>
          <Col className="p-3 p-md-5" md={10}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Private;

interface Props {
  children: ReactNode;
}
