import { Col, Container, Row } from "react-bootstrap";
import { PostCategory } from "../../types";
import PostCard from "./Card";

const CategoriesGrid = ({ sectionTitle, sectionDesc, categories }: Props) => {
  return (
    <Container className="my-5">
      <Row className="mb-5">
        <h2 className="subtitle text-center">{sectionTitle}</h2>
        <p className="desc text-center">{sectionDesc}</p>
      </Row>
      <Row className="gap-3 gap-lg-5 justify-content-center">
        {categories &&
          categories.map((item, i) => {
            return (
              <Col key={i} lg={3}>
                <PostCard img={item.img} title={item.title} />
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

interface Props {
  sectionTitle: string;
  sectionDesc: string;
  categories: PostCategory[];
}

export default CategoriesGrid;
