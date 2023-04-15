import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MegaTitleTwo } from "../Titles/MegaTitleTwo";

export const HeroSectionOne = () => {
  return (
    <Container>
      <Row>
        <Col lg={7}>
          <MegaTitleTwo
            title="Discover Digital Artworks & Collect Best"
            gradientText=" NFTs"
            subtitle="world"
            desc="sda"
          />
        </Col>
        <Col lg={5}>b</Col>
      </Row>
    </Container>
  );
};
