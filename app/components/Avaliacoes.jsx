import React from "react";
import CarouselDepoimentos from "./CarouselDepoimentos";

const Avaliacoes = () => {
  return (
    <section
      className="bg-white flex flex-col items-start px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] gap-12 max-w-[100vw] py-[5%]"
      id="depoimentos"
    >
      <h2 className="text-4xl text-black md:text-5xl 2xl:text-6xl pb-4 border-b-4 border-primary">
        Depoimentos
      </h2>

      <CarouselDepoimentos />
    </section>
  );
};

export default Avaliacoes;
