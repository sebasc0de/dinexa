import Container from "react-bootstrap/Container";
import Modal from "../moneyMovement/Modal";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <header className="landing-page-header">
      <Container>
        <Navbar className="justify-content-between" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Modal />
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
