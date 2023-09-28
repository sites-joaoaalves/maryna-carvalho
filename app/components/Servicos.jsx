import React from "react";
import Servico from "./Servico";

const servios = [
  {
    img: "/condominio.png",
    name: "Condominal",
    content:
      "Assessoria, cobrança, elaboração e revisão de documentos, realização de assembleias. Refere-se às leis e regulamentos que governam a administração e convivência em condomínios residenciais e comerciais.",
  },
  {
    img: "/negocios.png",
    name: "Imobiliário",
    content:
      "Trata das leis que envolvem propriedades, transações, aluguéis, heranças, regularização, usucapião e questões legais relacionadas a bens imóveis.",
  },
  {
    img: "/contrato.png",
    name: "Contratos",
    content:
      "Elaboração personalizada e revisão de acordos legais entre partes que estabelecem direitos e deveres, incluindo termos, condições e obrigações mutuamente acordadas.",
  },
  {
    img: "/previdenciario.png",
    name: "Previdenciário",
    content:
      " Trata dos benefícios sociais, como BPC, aposentadoria e auxílio-doença, fornecidos pela previdência social.",
  },
  {
    img: "/agrario.png",
    name: "Agrário",
    content:
      "Aborda questões relacionadas à posse, uso e regulamentação de terras rurais e atividades agrícolas.",
  },
  {
    img: "/terceiro-setor.png",
    name: "Terceiro Setor",
    content:
      "Organizações sem fins lucrativos, como ONGs e associações beneficentes, atividades e responsabilidades legais.",
  },
  {
    img: "/consumidor.png",
    name: "Consumidor",
    content:
      "Protege os direitos e interesses dos consumidores em transações comerciais.",
  },
  {
    img: "/familia-e-sucessoes.png",
    name: "Família e Sucessões",
    content:
      "Direto das famílias, incluindo inventário, divórcio, guarda de filhos e tudo o que diz respeito às relações familiares. ",
  },
  {
    img: "/eleitoral.png",
    name: "Eleitoral",
    content:
      "Regula o processo de escolha de representantes políticos por meio de eleições.",
  },
  {
    img: "/criminal.png",
    name: "Criminal",
    content:
      "Trata de crimes, penas e procedimentos judiciais, garantindo o devido processo e protegendo direitos, visando a justiça e a segurança pública.",
  },
  {
    img: "/consultoria.png",
    name: "Consultoria",
    content:
      "Fornecer aconselhamento jurídico, orientação e solução em questões legais e regulatórias.",
  },
  {
    img: "/diligencia.png",
    name: "Diligência",
    content:
      "Diversos procedimentos realizados para solucionar e obter investigação, ou procedimentos realizados por advogados para obter informações relevantes em um caso ou processo.",
  },
];

const Servicos = () => {
  return (
    <section
      className="bg-white px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] py-[5%] flex flex-col items-start justify-between snap-always snap-start"
      id="servicos"
    >
      <h1 className="border-b-4 border-primary pb-4 text-4xl md:text-5xl 2xl:text-7xl mb-16 self-end text-black">
        Serviços
      </h1>
      <div className="flex flex-wrap items-start justify-center gap-8 w-full text-black">
        {servios.map((servico, index) => (
          <Servico key={index} {...servico} invert={index % 2 === 1} />
        ))}
      </div>
    </section>
  );
};

export default Servicos;
