import { Logo } from "../Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import WalletMoney from "../../wallet/WalletMoney";
import DashboardMobileNav from "../Navigations/DashboardMobileNav";

// Data
import { data } from "../../../data/dashboard/SidebarOne";

function BasicExample() {
  return (
    <header className="cofi-header">
      <Container fluid className="mx-3">
        <Navbar expand="justify-content-between lg">
          <div>
            {/* Brand logo */}
            <Navbar.Brand className="d-none d-md-block" href="#home">
              <Logo />
            </Navbar.Brand>

            <DashboardMobileNav navData={data} />
          </div>

          <div>
            <WalletMoney />
          </div>
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
