import React from "react";
import Image from "next/image";
const Parceiro = ({ img, name, profission, content, key }) => {
  return (
    <div
      className="parceiro grow basis-72 max-w-[300px] flex flex-col items-center bg-white rounded-xl shadow-[0_0px_10px_rgb(255,255,255,0.3)] p-8"
      key={key}
    >
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
      <h5 className="text-black text-sm lg:text-md xl:text-lg font-roboto font-medium mb-4">
        {profission}
      </h5>

      <p className="text-black text-xs font-roboto font-medium text-start">
        {content}
      </p>
    </div>
  );
};

export default Parceiro;
