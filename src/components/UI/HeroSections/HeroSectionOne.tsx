import { Col, Container, Row } from "react-bootstrap";
import { MegaTitleTwo, MegaTitleTwoProps } from "../Titles/MegaTitleTwo";

export const HeroSectionOne = ({ data }: { data: HeroSectionOneProps }) => {
  return (
    <Container>
      <Row>
        <Col lg={7} className="p-5">
          <MegaTitleTwo
            title={data.title}
            gradientText={data.gradientText}
            desc={data.desc}
            Component={data.Component}
          />
        </Col>
        <Col lg={5}>b</Col>
      </Row>
    </Container>
  );
};

interface HeroSectionOneProps extends MegaTitleTwoProps {}
