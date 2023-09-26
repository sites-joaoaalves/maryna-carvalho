import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-bkg-primary relative overflow-hidden lg:overflow-visible flex justify-between py-[15%] lg:py-0 lg:h-[680px] px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] text-white mt-[96px]"
      id="hero"
    >
      <div className="flex flex-col justify-between items-center lg:items-start space-y-8 w-full lg:w-[50%] pt-[5%] h-3/4">
        <div className="flex flex-col justify-center items-center lg:items-start space-y-8 w-full">
          <h1 className="font-light text-center lg:text-start text-4xl md:text-5xl 2xl:text-7xl mb-[-20px]">
            Maryna Carvalho
          </h1>
          <h1 className="font-light text-4xl md:text-5xl 2xl:text-7xl mb-4 border-b-2 lg:border-b-4">
            Advocacia
          </h1>
        </div>

        <p className="font-roboto text-md xl:w-[60%] text-center xl:text-start lg:w-[50%]">
          Me comprometo a encontrar a melhor solução para o seu problema. Em que
          posso ajudar?
        </p>
        <a href="#contact-form" className="rounded shrink-0 rounded-lg text-black font-bold font-roboto bg-primary w-72 p-4 text-center hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out">
          Entrar em Contato
        </a>
      </div>
      <img
        src="/hero.png"
        className="rounded-lg hero hidden lg:block lg:w-[426px] lg:h-[533px] xl:h-[830px] xl:w-[640px] crop"
      />
    </section>
  );
};

export default Hero;
