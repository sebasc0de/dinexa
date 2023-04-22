import { Logo } from "../Logo";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import RegisterModal from "../../auth/RegisterModal";
import Link from "next/link";

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
            <RegisterModal />
          </div>
        </Navbar>
      </Container>
    </header>
  );
}

export default BasicExample;
