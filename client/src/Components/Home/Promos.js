import React from "react";
import { FiUser } from "react-icons/fi";
const Promos = () => {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
      <div className="  lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed ">
            Watch your favourite movies
          </h1>
          Download Your Movies & Watch Offline. <br /> Enjoy on Your Mobile
          <p className="text-text tex-sm xl:text-base leading-6 xl:leading-8">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            perspiciatis aliquam impedit sapiente dolor eligendi iusto porro
            ratione, alias accusamus, perferendis quas praesentium illum quia
            corrupti animi. Nisi, exercitationem maiores.
          </p>
          <div className="flex gap-4 md:text-lg tex-sm">
            <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
              watch 4K HD
            </div>
            <div className="flex-rows gap-4  bg-black text-subMain px-6 py-3 rounded font-bold">
              <FiUser />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://abdalmoniem.github.io/Movie-App/images/screenshot1.png"
            className="h-auto w-40"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Promos;
