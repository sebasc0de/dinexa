import { ReactNode } from "react";
import { Col, Container, Row } from "react-bootstrap";

const SimpleTitleTwo = ({ title, Component }: Props) => {
  return (
    <Container>
      <Row className="align-items-center my-3">
        <Col>
          <h4 className="subtitle m-0">{title}</h4>
        </Col>
        <Col className="d-flex justify-content-end">
          <Component />
        </Col>
      </Row>
    </Container>
  );
};

interface Props {
  title: string;
  Component: React.FC;
}

export default SimpleTitleTwo;
