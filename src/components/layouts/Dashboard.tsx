import { Col, Container, Row } from "react-bootstrap";
import { ReactNode } from "react";
import Header from "../UI/Headers/Dashboard";
import SidebarOne from "../UI/Sidebars/SidebarOne";

const Private = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <Container fluid>
        <Row>
          <Col md={3}>
            <SidebarOne />
          </Col>
          <Col className="p-4" md={9}>
            {children}
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Private;

interface Props {
  children: ReactNode;
}
