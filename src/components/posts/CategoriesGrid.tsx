import { Col, Container, Row } from "react-bootstrap";
import PostCard from "./Card";

const CategoriesGrid = () => {
  return (
    <Container className="p-5 my-5">
      <Row></Row>
      <Row>
        <Col lg={3}>
          <PostCard title="Hello" />
        </Col>
      </Row>
    </Container>
  );
};

export default CategoriesGrid;
