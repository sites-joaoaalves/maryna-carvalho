import React from "react";
import Avaliacao from "./Avaliacao";
const avaliacoes = [
  {
    name: "Leonilda 1",
    depoimento:
      "Foi a melhor Advogada a me atender. Atenciosa, prestativa, educada eficiente e muito amorosa no que faz e também humana com as pessoas. Seu trabalho é nota 10, a melhor, com toda a certeza!",
    rating: 3,
  },
  {
    name: "Leonilda 2",
    depoimento:
      "Foi a melhor Advogada a me atender. Atenciosa, prestativa, educada eficiente e muito amorosa no que faz e também humana com as pessoas. Seu trabalho é nota 10, a melhor, com toda a certeza!",
    rating: 5,
  },
  {
    name: "Leonilda 3",
    depoimento:
      "Foi a melhor Advogada a me atender. Atenciosa, prestativa, educada eficiente e muito amorosa no que faz e também humana com as pessoas. Seu trabalho é nota 10, a melhor, com toda a certeza!",
    rating: 5,
  },
  {
    name: "Leonilda 4",
    depoimento:
      "Foi a melhor Advogada a me atender. Atenciosa, prestativa, educada eficiente e muito amorosa no que faz e também humana com as pessoas. Seu trabalho é nota 10, a melhor, com toda a certeza!",
    rating: 5,
  },
];
const Avaliacoes = () => {
  return (
    <section
      className="bg-bkg-primary flex flex-col items-start px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] gap-12 max-w-[100vw] py-[5%]"
      id="depoimentos"
    >
      <h2 className="text-4xl md:text-5xl 2xl:text-6xl pb-4 border-b-4 border-primary text-white">
        Depoimentos
      </h2>
      <div className="carousel w-full p-8 overflow-y-hidden">
        {avaliacoes.map((avaliacao, index) => (
          <Avaliacao key={index} id={index} {...avaliacao} />
        ))}
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        {avaliacoes.map((avaliacao, index) => (
          <a
            key={index}
            href={`#avaliacao-${index}`}
            className="btn btn-sm text-xl font-roboto bg-white text-black hover:bg-primary hover:text-white"
          >
            {index + 1}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Avaliacoes;
