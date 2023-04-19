import { Logo } from "../Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import WalletMoney from "../../wallet/WalletMoney";

function BasicExample() {
  return (
    <header className="cofi-header">
      <Container>
        <Navbar expand="justify-content-between lg">
          {/* Brand logo */}
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <WalletMoney />
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
