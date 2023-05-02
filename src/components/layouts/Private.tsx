import { Col, Container, Row } from "react-bootstrap";
import { ReactNode } from "react";
import Header from "../UI/Headers/Dashboard";
import SidebarOne from "../UI/Sidebars/SidebarOne";

// Data imports
import { data } from "../../data/dashboard/SidebarOne";

// Redux
import Auth from "./Auth";

const Private = ({ children }: Props) => {
  return (
    <Auth>
      <Header />

      <Container fluid>
        <Row>
          <Col md={2}>
            <SidebarOne navData={data} />
          </Col>
          <Col className="p-3 p-md-5" md={10}>
            {children}
          </Col>
        </Row>
      </Container>
    </Auth>
  );
};

export default Private;

interface Props {
  children: ReactNode;
}
