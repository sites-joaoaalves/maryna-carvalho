import React from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
const Parceiro = ({ img, name, profission, content, key }) => {
  return (
    <div className="parceiro relative bg-white group xl:min-h-[370px] grow basis-72 max-w-[300px] flex flex-col items-center justify-center group-hover:justify-between rounded-xl cursor-pointer shadow-[0_0px_8px_rgb(0,0,0,0.5)] space-y-4 px-6 py-8">
      <Image
        src={img}
        alt={name}
        width={100}
        height={100}
        className="mb-4"
      ></Image>
      <h2 className="text-black text-md lg:text-lg xl:text-xl font-roboto font-bold text-center mb-2">
        {name}
      </h2>
      <div className="w-auto">
        <span className="text-black text-sm lg:text-md xl:text-lg font-roboto font-medium">
          {profission}
        </span>
        <div className="duration-1000 ease-in-out group-hover:w-full h-[2px] w-0 bg-primary"></div>
      </div>
      <p className="text-black font-roboto font-medium text-start w-[90%] group-hover:max-h-80 focus:max-h-80 max-h-0 duration-1000 ease-in-out overflow-hidden">
        {content}
      </p>
      <div className="flex items-center justify-center w-full absolute bottom-2">
        <FaChevronDown className="text-primary text-2xl duration-1000 ease-in-out group-hover:rotate-180 transform transition-all"></FaChevronDown>
      </div>
    </div>
  );
};

export default Parceiro;
