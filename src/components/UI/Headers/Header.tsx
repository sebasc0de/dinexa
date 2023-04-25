import { Button } from "react-bootstrap";
import { Logo } from "../Logo";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";

function BasicExample() {
  return (
    <header className="cofi-header">
      <Container>
        <Navbar className="justify-content-between" expand="lg">
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <div>
            <Link
              href="/login"
              className="d-none d-lg-inline-block secondary-button mx-4"
            >
              Login
            </Link>
            <Link href="/create-account">
              <Button className="dinexa-button">Start now</Button>
            </Link>
          </div>
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
