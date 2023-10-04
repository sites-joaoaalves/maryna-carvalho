import React from "react";
import PilaresIcon from "./PilaresIcon";

const Pilares = () => {
  return (
    <section
      className="bg-white relative px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] py-20 flex flex-col items-center lg:items-start space-y-12 "
      id="pilares"
    >
      <h2 className="text-black text-4xl md:text-5xl 2xl:text-7xl border-b-4 border-primary">
        Pilares
      </h2>
      <div className="flex flex-wrap items-stretch justify-center w-full gap-4 flex-wrap">
        <PilaresIcon
          src="/confianca.png"
          text="Confiança e Ética"
          bg="bg-primary"
          content={
            "Destaca-se pela forma conciliatória de resolver conflitos, atendimento humanizado, realização de ações sociais."
          }
        />
        <PilaresIcon
          src="/orientacao.png"
          text="Orientação Responsável"
          bg="bg-secondary"
          content={
            "Oferecemos orientação responsável em assuntos cíveis, incluindo Direito Condominial, Imobiliário, Consumidor, Família e Sucessões."
          }
        />
        <PilaresIcon
          src="/resolucao.png"
          text="Resolução Humanizada"
          bg="bg-primary"
          content={
            "Destacamos-nos pela resolução humanizada de conflitos, sempre com ética e confiança. "
          }
        />
      </div>
    </section>
  );
};

export default Pilares;
