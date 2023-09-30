import React from "react";
import Image from "next/image";

const Servico = ({ img, name, content, invert }) => {
  return (
    <div
      className={`${
        invert ? "text-white bg-secondary" : "text-black bg-primary"
      } servico group relative flex flex-col items-center justify-center group-hover:justify-between rounded-xl cursor-pointer shadow-[0_0px_8px_rgb(0,0,0,0.5)] space-y-4 py-6 px-12`}
    >
      <Image
        loading="lazy"
        width={132}
        height={132}
        src={img}
        alt={name}
        className={`h-28 w-28 ${invert ? "filter invert" : ""}`}
      />
      <div className="w-auto">
        <h2 className="text-2xl text-center font-roboto font-bold">{name}</h2>
        <div
          className={`duration-1000 ease-in-out group-hover:w-full h-[2px] w-0 ${
            invert ? "bg-white" : "bg-black"
          }`}
        ></div>
      </div>
      <p className="font-roboto font-medium text-center group-hover:max-h-80 focus:max-h-80 max-h-0 duration-1000 ease-in-out overflow-hidden">
        {content}
      </p>
    </div>
  );
};

export default Servico;
