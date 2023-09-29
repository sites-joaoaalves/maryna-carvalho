"use client";
import Avaliacao from "./Avaliacao";
import { Carousel } from "flowbite-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const avaliacoes = [
  {
    name: "Leonilda",
    depoimento:
      "Foi a melhor Advogada a me atender. Atenciosa, prestativa, educada eficiente e muito amorosa no que faz e também humana com as pessoas. Seu trabalho é nota 10, a melhor, com toda a certeza!",
    rating: 5,
  },
  {
    name: "Matheus",
    depoimento:
      "Dra. Maryna, só tenho a agradecer. Foi um alívio resolver problemas tão delicados com uma pessoa tão competente como você!",
    rating: 5,
  },
  {
    name: "Ana Maria",
    depoimento:
      "Achei excelente o seu atendimento e do processo, não tenho do que reclamar em nada, sempre rápida, gentil e atenciosa, palavras não descrevem minha gratidão!!",
    rating: 5,
  },
];

const CarouselDepoimentos = () => {
  return (
    <Carousel
      slideInterval={5000}
      pauseOnHover
      leftControl={
        <div className="w-24 h-24 relative left-[-28px] flex items-center justify-center">
          <FaChevronLeft className="text-black text-4xl" />
        </div>
      }
      rightControl={
        <div className="w-24 h-24 relative right-[-28px] flex items-center justify-center ">
          <FaChevronRight className="text-black text-4xl" />
        </div>
      }
      className="items-stretch overflow-hidden"
    >
      {avaliacoes.map((avaliacao, i) => (
        <Avaliacao key={i} {...avaliacao} id={i} />
      ))}
    </Carousel>
  );
};

export default CarouselDepoimentos;
