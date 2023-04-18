// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { Row, Container, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import PostCard from "./Card";

export default () => {
  const [inMobile, setInMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setInMobile(true);
    }
  }, [inMobile]);

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
          modules={[Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={inMobile ? 1 : 4}
          spaceBetween={inMobile ? 20 : 100}
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
