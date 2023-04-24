// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SliderOne() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="sliderOne"
      >
        <SwiperSlide>
          <h3 className="text-white title--2">Hello world</h3>
          <p className="text-white">Hello world text</p>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className="text-white title--2">Hello world</h3>
          <p className="text-white">Hello world text</p>
        </SwiperSlide>

        <SwiperSlide>
          <h3 className="text-white title--2">Hello world</h3>
          <p className="text-white">Hello world text</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
