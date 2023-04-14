import Modal from "./Modal";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <header className="landing-page-header">
      <Container>
        <Navbar className="justify-content-between" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Modal buttonText="Create spend" modalTitle="Create new spend" />
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
