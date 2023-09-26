import React from "react";

const Servico2 = ({ img, name, content }) => {
  return (
    <div className="group flex flex-col items-center justify-center px-4 bg-primary rounded-xl cursor-pointer">
      <img src={img} alt={name} className="mt-2" />
      <h3 className="text-2xl text-center text-black underline font-roboto font-bold">
        {name}
      </h3>
      <p className="text-black font-roboto font-medium text-center group-hover:h-full h-0 duration-300 ease-in-out overflow-hidden mb-4">
        {content}
      </p>
    </div>
  );
};

export default Servico2;
