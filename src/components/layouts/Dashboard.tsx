import { Col, Container, Row } from "react-bootstrap";
import { ReactNode } from "react";
import Header from "../UI/Headers/Dashboard";
import SidebarOne from "../UI/Sidebars/SidebarOne";

// Data imports
import { data } from "../../data/dashboard/SidebarOne";

const Private = ({ children }: Props) => {
  return (
    <>
      <Header />

      <Container fluid>
        <Row>
          <Col md={2}>
            <SidebarOne navData={data} />
          </Col>
          <Col className="p-md-5" md={10}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Private;

interface Props {
  children: ReactNode;
}
