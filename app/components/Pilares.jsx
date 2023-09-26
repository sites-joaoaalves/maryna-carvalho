import React from "react";
import PilaresIcon from "./PilaresIcon";

const Pilares = () => {
  return (
    <section className="bg-white px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] py-20 flex flex-col items-center lg:items-start space-y-12 ">
      <h2 className="text-black text-4xl md:text-5xl 2xl:text-7xl border-b-4 border-primary">
        Pilares
      </h2>
      <div className="flex items-center justify-center w-full gap-4 flex-wrap">
        <PilaresIcon
          src="/confianca.png"
          text="Confiança e Ética"
          bg="bg-primary"
        />
        <PilaresIcon
          src="/orientacao.png"
          text="Orientação Responsável"
          bg="bg-secondary"
        />
        <PilaresIcon
          src="/resolucao.png"
          text="Resolução Humanizada"
          bg="bg-primary"
        />
      </div>
    </section>
  );
};

export default Pilares;
