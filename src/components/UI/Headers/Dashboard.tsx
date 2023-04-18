import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Logo } from "../Logo";

function BasicExample() {
  return (
    <header className="cofi-header">
      <Navbar expand="lg">
        <Container fluid className="mx-3">
          {/* Brand logo */}
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default BasicExample;
