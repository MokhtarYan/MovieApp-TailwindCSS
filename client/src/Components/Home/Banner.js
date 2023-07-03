import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Movies } from "../../Data/MoviesData";
import { Autoplay } from "swiper";
import FlexMovieItems from "../FlexMovieItems";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="relative w-full flex justify-center">
      <Swiper
        direction="horizontal"
        speed={1000}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-4/6 xl:h-96 bg:dry lg:h-64 h-48 "
        modules={[Autoplay]}
      >
        {Movies.map((movie, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={`${movie.image}`}
              alt={movie.title}
              className="w-full h-full "
            />
            <div className="absolute  bg-gradient-to-r from-gray-500 to-transparent xl:pl-52 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold ">
                {movie.name}
              </h1>
              <div className="flex items-center gap-5 text-white">
                <FlexMovieItems movie={movie} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/movie/${movie.name}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium text-xs"
                >
                  {" "}
                  Watch
                </Link>
                <button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                  <FaHeart />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
