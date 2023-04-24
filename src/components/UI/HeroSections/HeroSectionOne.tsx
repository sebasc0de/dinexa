import { Carousel, Col, Container, Row } from "react-bootstrap";
import { MegaTitleTwo, MegaTitleTwoProps } from "../Titles/MegaTitleTwo";

export const HeroSectionOne = ({
  title,
  gradientText,
  desc,
  Component,
}: MegaTitleTwoProps) => {
  return (
    <Container className="heroSectionOne">
      <Row>
        <Col lg={7}>
          <MegaTitleTwo
            title={title}
            gradientText={gradientText}
            desc={desc}
            Component={Component}
          />
        </Col>
        <Col className="mt-5 mt-md-0" lg={5}>
          <img
            className="d-block w-100"
            src="/images/control_your_spends.gif"
            alt="First slide"
          />
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
      <Carousel.Item></Carousel.Item>
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
