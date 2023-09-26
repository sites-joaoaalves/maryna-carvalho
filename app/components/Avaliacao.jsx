import React from "react";

const Avaliacao = ({ id, name, depoimento, rating }) => {
  return (
    <div
      id={`avaliacao-${id}`}
      className="carousel-item relative w-full bg-bkg-secondary z-0 rounded-lg flex flex-col md:flex-row items-center justify-between p-8"
    >
      <div className="flex flex-col items-center w-[50%]">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span className="text-xl">{name[0].toUpperCase()}</span>
          </div>
        </div>
        <h3 className="text-2xl font-roboto mb-4 mt-2">{name}</h3>
        <div className="rating mb-16 xl:mb-0">
          {Array(5)
            .fill()
            .map((_, i) => (
              <input
              key={i}
                disabled
                type="radio"
                name={`rating-${id}`}
                className="mask mask-star bg-primary"
                checked={i + 1 === rating}
              />
            ))}
          </div>
      </div>

      <p className="md:text-clip text-center lg:text-start">{depoimento}</p>
      <span className="absolute font-roboto text-[200px] right-[8px] bottom-[26px] h-[100px]">
        “
      </span>
    </div>
  );
};

export default Avaliacao;
