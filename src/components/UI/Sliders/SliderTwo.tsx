// import Swiper core and required modules
import { Autoplay, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SliderTwo() {
  return (
    <div>
      <Swiper
        modules={[Scrollbar, Autoplay, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="py-5 px-3"></SwiperSlide>

        <SwiperSlide className="py-5 px-3"></SwiperSlide>

        <SwiperSlide className="py-5 px-3"></SwiperSlide>
      </Swiper>

      <div>
        <h4 className="text-center text-white title--3">
          Track your daily expenses and categorize them
        </h4>
        <p className="text-center text-white">
          Effortlessly track your daily expenses and categorize them for better
          organization.
        </p>
      </div>
    </div>
  );
}
