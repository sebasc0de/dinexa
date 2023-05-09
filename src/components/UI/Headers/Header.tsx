import { Logo } from "../Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import AuthButtons from "../../../widgets/Header/AuthButtons";
import Wallet from "../../../widgets/Header/Wallet";
import DashboardMobileNav from "../Navigations/DashboardMobileNav";

function BasicExample() {
  return (
    <header className="cofi-header">
      <Container>
        <Navbar className="justify-content-between" expand="lg">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>

          {/* Wallet */}
          <Wallet />

          {/* Auth buttons */}
          <AuthButtons />
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
