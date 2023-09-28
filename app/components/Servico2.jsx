import React from "react";

const Servico2 = ({ img, name, content }) => {
  return (
    <div className="group relative flex flex-col items-center justify-between p-4 rounded-xl cursor-pointer shadow-[0_0px_8px_rgb(0,0,0,0.5)]">
      <img src={img} alt={name} className="my-auto" />
      <h3 className="text-2xl text-center font-roboto mt-4">{name}</h3>
      <div className="opacity-0 group-hover:opacity-100 duration-300 rounded-xl absolute inset-x-0 top-0 h-full flex justify-center items-center px-[5%] text-xl bg-[#fdfdfdf8] font-semibold">
        <p className="font-roboto font-medium text-center">{content}</p>
      </div>
    </div>
  );
};

export default Servico2;
