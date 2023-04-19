import Table from "../components/moneyMovement/Table";
import Layout from "../components/layouts/Dashboard";
import { Col, Container, Row } from "react-bootstrap";
const dashboard = () => {
  return (
    <Layout>
      <Container className="p-lg-5">
        <Row>
          <Col>
            <Table />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default dashboard;
