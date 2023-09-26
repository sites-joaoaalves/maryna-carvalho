import React from "react";
import Servico from "./Servico";
import Servico2 from "./Servico2";

const Servicos = () => {
  return (
    <section
      className="bg-white px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] py-[5%] flex flex-col items-start justify-between snap-always snap-start"
      id="servicos"
    >
      <h1 className="border-b-4 border-primary pb-4 text-4xl md:text-5xl 2xl:text-7xl mb-16 self-end text-black">
        Serviços
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 w-full [&>*:nth-child(odd)]:bg-[#fbfbfb] [&>*:nth-child(even)]:bg-[#fbfbfb] text-black">
        <Servico
          img={"/condominio.png"}
          name={"Condominal"}
          content={
            "Assessoria, cobrança, elaboração e revisão de documentos, realização de assembleias. Refere-se às leis e regulamentos que governam a administração e convivência em condomínios residenciais e comerciais."
          }
        />
        <Servico
          img={"/negocios.png"}
          name={"Imobiliário"}
          content={
            "Trata das leis que envolvem propriedades, transações, aluguéis, heranças, regularização, usucapião e questões legais relacionadas a bens imóveis."
          }
        />
        <Servico
          img={"/contrato.png"}
          name={"Contratos"}
          content={
            "Elaboração personalizada e revisão de acordos legais entre partes que estabelecem direitos e deveres, incluindo termos, condições e obrigações mutuamente acordadas."
          }
        />
        <Servico
          img={"/condominio.png"}
          name={"Condominal"}
          content={
            "Assessoria, cobrança, elaboração e revisão de documentos, realização de assembleias. Refere-se às leis e regulamentos que governam a administração e convivência em condomínios residenciais e comerciais."
          }
        />
        <Servico
          img={"/negocios.png"}
          name={"Imobiliário"}
          content={
            "Trata das leis que envolvem propriedades, transações, aluguéis, heranças, regularização, usucapião e questões legais relacionadas a bens imóveis."
          }
        />
        <Servico
          img={"/contrato.png"}
          name={"Contratos"}
          content={
            "Elaboração personalizada e revisão de acordos legais entre partes que estabelecem direitos e deveres, incluindo termos, condições e obrigações mutuamente acordadas."
          }
        />
        <Servico
          img={"/condominio.png"}
          name={"Condominal"}
          content={
            "Assessoria, cobrança, elaboração e revisão de documentos, realização de assembleias. Refere-se às leis e regulamentos que governam a administração e convivência em condomínios residenciais e comerciais."
          }
        />
        <Servico
          img={"/negocios.png"}
          name={"Imobiliário"}
          content={
            "Trata das leis que envolvem propriedades, transações, aluguéis, heranças, regularização, usucapião e questões legais relacionadas a bens imóveis."
          }
        />
        <Servico
          img={"/contrato.png"}
          name={"Contratos"}
          content={
            "Elaboração personalizada e revisão de acordos legais entre partes que estabelecem direitos e deveres, incluindo termos, condições e obrigações mutuamente acordadas."
          }
        />
        <Servico
          img={"/condominio.png"}
          name={"Condominal"}
          content={
            "Assessoria, cobrança, elaboração e revisão de documentos, realização de assembleias. Refere-se às leis e regulamentos que governam a administração e convivência em condomínios residenciais e comerciais."
          }
        />
        <Servico
          img={"/negocios.png"}
          name={"Imobiliário"}
          content={
            "Trata das leis que envolvem propriedades, transações, aluguéis, heranças, regularização, usucapião e questões legais relacionadas a bens imóveis."
          }
        />
        <Servico
          img={"/contrato.png"}
          name={"Contratos"}
          content={
            "Elaboração personalizada e revisão de acordos legais entre partes que estabelecem direitos e deveres, incluindo termos, condições e obrigações mutuamente acordadas."
          }
        />
      </div>
    </section>
  );
};

export default Servicos;
