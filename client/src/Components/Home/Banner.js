import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
const Banner = () => {
  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        spaceBetween={0}
        speed={1000}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full xl:h-96 bg:dry lg:h-64 h-48"
      ></Swiper>
    </div>
  );
};

export default Banner;
