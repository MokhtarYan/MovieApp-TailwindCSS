import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { CgUser } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
const NavBar = () => {
  const hover = "hover:text-subMain transitions text-white";
  const Hover = ({ isActive }) => (isActive ? "text-subMain" : hover);

  return (
    <>
      <div className="bg-main shadow-md sticky top-0 z-20">
        <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center ">
          <div className="col-span-0 lg:block  hidden">
            {/* Logo */}
            <Link to="/" className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dqzabjiql/image/upload/v1688316416/newLogoo_lfkarx.png"
                className="w-full h-12 object-contain"
                alt=""
              />
            </Link>
          </div>
          {/* Search form */}
          <div className="col-span-3">
            <form
              className="w-full text-sm bg-dryGray rounded flex-btn gap-4 "
              action=""
            >
              <button
                type="submit"
                className="bg-subMain w-12 flex-colo h-12 rounded text-white"
              >
                <AiOutlineSearch />
              </button>
              <input
                type="text"
                placeholder="Search for Movie name from here"
                className="font-medium placeholder:border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black"
              />
            </form>
          </div>
          {/* menus */}
          <div className="col-span-3 font-medium text-sm hideen xl:gap-14 2xl:gap-20 justify-betweenn lg:flex xl:justify-end items-center">
            <NavLink to="/movies" className={Hover}>
              MOVIES
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              ABOUT US
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              CONTACT US
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <CgUser className="w-8 h-8 " />
            </NavLink>
            <NavLink to="/favourits" className={`${Hover} relative`}>
              <FaHeart className="w-6 h-6 " />
              <div className="w-5 h-5 flex-colo rounded-full bg-subMain text-white absolute -top-5 -right-1">
                3
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
