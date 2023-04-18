import { Logo } from "../Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import RegisterModal from "../../auth/RegisterModal";

function BasicExample() {
  return (
    <header className="cofi-header">
      <Container>
        <Navbar className="justify-content-between" expand="lg">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <RegisterModal />
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
