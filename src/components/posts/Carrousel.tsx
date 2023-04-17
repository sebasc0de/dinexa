// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Row, Container } from "react-bootstrap";
import PostCard from "./Card";

export default () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 className="title--2">Posts</h2>
        <span>butons here</span>
      </div>
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
