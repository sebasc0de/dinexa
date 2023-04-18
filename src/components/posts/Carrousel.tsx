// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

// Import Swiper styles
import "swiper/css";
import { Row, Container, Col, Button } from "react-bootstrap";
import PostCard from "./Card";

export default () => {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h2 className="title--2">Posts</h2>
        </Col>
        <Col
          className="d-flex gap-1 align-items-center justify-content-end"
          xs={6}
        >
          <Button className="rounded-button text-white">
            <BiChevronLeft size={25} />
          </Button>
          <Button className="rounded-button text-white">
            <BiChevronRight size={25} />
          </Button>
        </Col>
      </Row>
      <Row>
        <Swiper
          spaceBetween={150}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <PostCard />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard />
          </SwiperSlide>
          <SwiperSlide>
            <PostCard />
          </SwiperSlide>
        </Swiper>
      </Row>
    </Container>
  );
};
