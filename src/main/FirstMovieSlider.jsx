// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default () => {
  return (
    <Swiper
      className="container text-center mt-5 rounded"
      modules={[Autoplay]}
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      autoplay={{ delay: 5000 }}
      loop
    >
      <SwiperSlide>
        <a href="">
          <img
            src="./../src/assets/poster/princess-rhaenyra-3840x2160-16753.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="">
          <img
            src="./../src/assets/poster/mission-impossible-3840x2160-19890.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="">
          <img
            src="./../src/assets/poster/the-crow-bill-3840x2160-16277.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="">
          <img
            src="./../src/assets/poster/kingdom-of-the-3840x2160-16524.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
      <SwiperSlide>
        <a href="">
          <img
            src="./../src/assets/poster/spider-man-marvel-5160x2160-9443.jpg"
            alt=""
          />
        </a>
      </SwiperSlide>
    </Swiper>
  );
};