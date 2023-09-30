import React from "react";
import Details from "./Details";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="bg-bkg-primary flex items-center justify-center lg:justify-between px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] space-x-20 max-w-[100vw] max-h-[100vh] py-[5%]"
      id="sobre"
    >
      <div className="hidden rounded-3xl lg:ml-auto w-1/2 lg:block overflow-hidden">
        <Image
          loading="lazy"
          width={1633}
          height={2088}
          className="object-fill"
          src="/sobre.jpg"
          alt="Maryna Carvalho"
        />
      </div>

      <div className="flex flex-col w-1/2 items-end h-full text-white space-y-8 text-right">
        <span className="text-md border-b-4 border-primary">OAB/DF 70.365</span>
        <h2 className="text-2xl md:text-5xl lg:text-6xl 2xl:text-7xl">
          Dra. Maryna Carvalho
        </h2>
        <p className="font-roboto text-md md:text-lg self-start text-start">
          Destaca-se pela forma conciliatória de resolver conflitos e pelo
          atendimento humanizado.
        </p>
        <p className="font-roboto text-md md:text-lg self-start text-start">
          Possui grande experiência na área Cível, principalmente com Direito
          Condominial, Imobiliário, Consumidor, Família e Sucessões.
        </p>
        <p className="font-roboto text-md md:text-lg self-start text-start">
          Conta com apoio de parceiros especializados em áreas diversas para que
          seja possível atendimento de excelência na demanda que surgir.
        </p>
        <Details />
        {/* <a
          href="#contact-form"
          className="rounded rounded-lg text-black font-bold font-roboto bg-primary w-72 p-6 text-center mt-auto hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out"
        >
          ENTRAR EM CONTATO
        </a> */}
      </div>
    </section>
  );
};

export default About;
