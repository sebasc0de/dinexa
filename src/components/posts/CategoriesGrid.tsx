import { Col, Container, Row } from "react-bootstrap";
import { SpendCategory } from "../../types";
import PostCard from "./Card";

// Translation
import { useTranslation } from "react-i18next";

const CategoriesGrid = ({ sectionTitle, sectionDesc, categories }: Props) => {
  const { t } = useTranslation(["homepage"]);

  return (
    <Container className="my-5">
      <Row className="mb-5">
        <h2 className="subtitle text-center">{sectionTitle}</h2>
        <p className="desc text-center">{sectionDesc}</p>
      </Row>
      <Row className="gap-3 gap-lg-5 justify-content-center">
        {categories &&
          categories.map((item, i) => {
            const titleKey = t(`moneyCategories.data.${item.title}`);

            return (
              <Col key={i} lg={3}>
                <PostCard img={item.img} title={titleKey} desc={item.desc} />
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
  categories: SpendCategory[];
}

export default CategoriesGrid;
