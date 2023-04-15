import { BsShieldCheck } from "react-icons/bs";

import { Col, Container, Row } from "react-bootstrap";

export const BenefitsOne = () => {
  return (
    <Container className="benefitsOne p-0 p-lg-5">
      <Row className="text-center">
        <h3>Create and sell your NFTs</h3>
        <p>Here are a few reasons why you should choose Neftify</p>
      </Row>
      <Row className="mt-5">
        <Col className="benefitsOne__card" lg={6}>
          <div className="benefitsOne__card--iconbox">
            <BsShieldCheck size={35} />
          </div>

          <h5 className="benefitsOne__card--title">Benefit one</h5>
          <p className="benefitsOne__card--desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
            minus!
          </p>
        </Col>
        <Col className="benefitsOne__card" lg={6}>
          <div className="benefitsOne__card--iconbox">
            <BsShieldCheck size={35} />
          </div>

          <h5 className="benefitsOne__card--title">Benefit one</h5>
          <p className="benefitsOne__card--desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
            minus!
          </p>
        </Col>
      </Row>
    </Container>
  );
};
