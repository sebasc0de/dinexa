// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Row, Container } from "react-bootstrap";
import PostCard from "./Card";

export default () => {
  return (
    <Container>
      <Row>
        <h2>Posts</h2>
        <span>butons here</span>
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
