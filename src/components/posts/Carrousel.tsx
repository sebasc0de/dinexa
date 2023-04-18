// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Row, Container, Col } from "react-bootstrap";
import PostCard from "./Card";

export default () => {
  return (
    <Container>
      <Row>
        <Col xs={6}>
          <h2 className="title--2">Posts</h2>
        </Col>
        <Col className="d-flex align-items-center justify-content-end" xs={6}>
          <span>butons here</span>
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
