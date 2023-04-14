import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <header className="landing-page-header">
      <Container>
        <Navbar className="justify-content-between" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Button className="cofi-button">Create</Button>
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
