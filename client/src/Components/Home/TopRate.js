import React from "react";
import { Movies } from "../../Data/MoviesData";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import Titles from "../Titles";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  BsBookmarkStarFill,
  BsCaretLeftFill,
  BsCaretRightFill,
} from "react-icons/bs";
import { Autoplay, Navigation } from "swiper";
import { Link } from "react-router-dom";
import Rating from "../Rating";
const TopRate = () => {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const classNames =
    "hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white";

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
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden flex justify-center ">
                <img
                  src={`${movie.titleImage}`}
                  alt={movie.name}
                  className="w-60 h-40 object-cover rounded-lg"
                />
                <div className="px-4 hoveres gap-6 text-center absolute bg-black bg-opacity-70 top-0 bottom-0 right-0 left-0">
                  <button className="w-12 h-12 flex-colo transitions text-white hover:bg-subMain rounded-full bg-white bg-opacity-30">
                    <FaHeart />
                  </button>
                  <Link
                    to={`/movie/${movie.name}`}
                    className="font-semibold text-xl truncate line-clamp-2"
                  >
                    {movie.name}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Rating value={movie.rate} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill />
          </button>
          <button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRate;
