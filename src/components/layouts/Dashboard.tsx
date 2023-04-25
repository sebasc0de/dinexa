import { Col, Container, Row } from "react-bootstrap";
import { ReactNode } from "react";
import Header from "../UI/Headers/Dashboard";
import SidebarOne from "../UI/Sidebars/SidebarOne";

// Data imports
import { data } from "../../data/dashboard/SidebarOne";

const Private = ({ children }: Props) => {
  return (
    <main>
      <Header />
      <Container fluid>
        <Row>
          <Col md={3}>
            <SidebarOne navData={data} />
          </Col>
          <Col className="p-md-4" md={9}>
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
