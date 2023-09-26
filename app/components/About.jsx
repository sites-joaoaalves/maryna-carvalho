import React from "react";

const About = () => {
  return (
    <section
      className="bg-bkg-primary flex items-start justify-center md:justify-between px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] space-x-20 max-w-[100vw] max-h-[100vh]"
      id="sobre"
    >
      <img
        src="sobre.png"
        alt="Maryna Carvalho"
        className="rounded-lg hidden md:block md:w-[250px] lg:w-[320px] xl:w-[640px] mt-[5vh]"
      />
      <div className="flex flex-col items-end h-full text-white space-y-8 text-right mt-[5vh] mb-[5vh]">
        <span className="text-md border-b-4 border-primary">OAB/DF 70.365</span>
        <h2 className="text-2xl md:text-5xl 2xl:text-4xl md:text-5xl 2xl:text-7xl">
          Dra. Maryna Carvalho
        </h2>
        <p className="font-roboto text-md md:text-xl xl:text-2xl self-start text-start">
          Destaca-se pela forma conciliatória de resolver conflitos, atendimento
          humanizado, realização de ações sociais.
        </p>
        <p className="font-roboto text-md md:text-xl xl:text-2xl self-start text-start">
          Possui grande experiência na área Cível, principalmente com Direito
          Condominial e Imobiliário, Consumidor, Família e Sucessões.
        </p>
        <p className="font-roboto text-md md:text-xl xl:text-2xl self-start text-start">
          Conta com apoio de parceiros especializados em áreas diversas para que
          seja possível atendimento de excelência na demanda que surgir.
        </p>
        <button className="rounded rounded-lg text-black font-bold font-roboto bg-primary w-72 h-14 mt-auto hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out">
          ENTRAR EM CONTATO
        </button>
      </div>
    </section>
  );
};

export default About;
