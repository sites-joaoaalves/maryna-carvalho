import React from "react";

const Avaliacao = ({ id, name, depoimento, rating, key }) => {
  return (
    <div
      className="relative w-full h-full bg-[#f2f2f2] z-0 rounded-lg flex flex-col md:flex-row items-center justify-center p-8"
      data-carousel-item
      key={key}
    >
      <div className="flex flex-col items-center w-full md:w-[20%]">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span className="text-xl">{name[0].toUpperCase()}</span>
          </div>
        </div>
        <h3 className="text-2xl font-roboto text-black mb-4 mt-2 text-center w-full">
          {name}
        </h3>
        <div className="rating mb-16 xl:mb-0">
          {Array(5)
            .fill()
            .map((_, i) => (
              <div className="w-6 h-6 mask mask-star bg-primary" key={i} />
            ))}
        </div>
      </div>
      <div className="relative bubble md:text-clip text-center lg:text-start text-black w-full md:ml-12 xl:ml-0 md:w-[50%] sm:bg-white sm:p-6 sm:rounded-xl">
        <p className="">{depoimento}</p>
      </div>

      <span className="absolute font-roboto text-[140px]  md:text-[200px] right-2 bottom-2 md:right-[5%] md:bottom-[32px] h-[100px]">
        “
      </span>
    </div>
  );
};

export default Avaliacao;
