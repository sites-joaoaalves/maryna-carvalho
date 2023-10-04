import React from "react";
import Image from "next/image";
import Link from "next/link";

const imageLoader = ({ src, width, quality }) => {
  return `/hero/hero_${width}.png`;
};

const Hero = () => {
  return (
    <section
      className="bg-bkg-primary overflow-hidden lg:overflow-visible flex justify-between py-[15%] lg:py-0 lg:h-[680px] px-8 md:px-[5%] lg:px-[10%] 2xl:px-[17.5%]  text-white mt-[80px]"
      id="hero"
    >
      <div className="flex flex-col justify-between items-center lg:items-start space-y-8 w-full lg:w-[50%] pt-[5%] h-3/4">
        <div className="flex flex-col justify-center items-center lg:items-start space-y-8 w-full">
          <h1 className="font-light text-center lg:text-start text-4xl md:text-5xl 2xl:text-6xl mb-[-20px]">
            Maryna Carvalho
          </h1>
          <h1 className="font-light text-4xl md:text-5xl 2xl:text-6xl mb-4 border-b-2 lg:border-b-4">
            Advocacia
          </h1>
        </div>

        <p className="font-roboto text-md lg:text-lg xl:w-[60%] text-center xl:text-start lg:w-[50%]">
          Meu compromisso é encontrar a melhor solução para o seu problema. Em
          que posso ajudar?
        </p>

        <Link
          className="rounded shrink-0 rounded-lg text-black font-bold font-roboto bg-primary w-72 p-4 text-center hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out"
          href={"https://wa.me/5561993290307"}
          target={"_blank"}
        >
          Entrar em Contato
        </Link>
      </div>
      <div className="hidden rounded-3xl lg:ml-auto lg:block lg:w-1/2 lg:h-[780px] overflow-hidden z-10 ml-auto">
        <Image
          src="/hero.jpg"
          width={817}
          height={1059}
          alt="Foto de Maryna Carvalho"
          className="hero object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
