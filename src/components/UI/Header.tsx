import Container from "react-bootstrap/Container";
import Modal from "../moneyMovement/Modal";
import Navbar from "react-bootstrap/Navbar";
import { Logo } from "./Logo";

function BasicExample() {
  return (
    <header className="landing-page-header">
      <Container>
        <Navbar className="justify-content-between" expand="lg">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Modal />
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
