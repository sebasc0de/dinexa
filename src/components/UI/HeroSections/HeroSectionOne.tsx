import { Carousel, Col, Container, Row } from "react-bootstrap";
import { MegaTitleTwo, MegaTitleTwoProps } from "../Titles/MegaTitleTwo";
import { useTranslation } from "react-i18next";

export const HeroSectionOne = ({ data }: { data: HeroSectionOneProps }) => {
  const { t, i18n } = useTranslation(["welcome"]);

  return (
    <Container className="heroSectionOne">
      <p>{t("name")}</p>
      <Row>
        <Col lg={7}>
          <MegaTitleTwo
            title={data.title}
            gradientText={data.gradientText}
            desc={data.desc}
            Component={data.Component}
          />
        </Col>
        <Col className="mt-5 mt-md-0" lg={5}>
          <ImagesCollectionCarrousel />
        </Col>
      </Row>
    </Container>
  );
};

function ImagesCollectionCarrousel() {
  return (
    <Carousel
      fade
      indicators={false}
      controls={false}
      interval={2500}
      className="carrousel"
      variant="dark"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/books.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/controller.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/sun_glasses.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

interface HeroSectionOneProps extends MegaTitleTwoProps {}
