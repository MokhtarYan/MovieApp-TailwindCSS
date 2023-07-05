import React from "react";
import { Movies } from "../../Data/MoviesData";
import { useState } from "react";
import Titles from "../Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsBookmarkStarFill } from "react-icons/bs";
import { Autoplay, Navigation } from "swiper";
const TopRate = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
      <div className="mt-10">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {Movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate border border-border bg-dry rounded-lg overflow-hidden ">
                <img
                  src={`${movie.titleImage}`}
                  alt={movie.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRate;
