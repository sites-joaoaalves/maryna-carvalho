import React from "react";
import Parceiro from "./Parceiro";

const parceiros = [
  {
    name: "Luciano Martins de Souza",
    profission: "Imobiliário",
    img: "/luciano.png",
    content:
      "Pós-Graduado em Direito Imobiliário, Direito Civil e Processo Civil. É Julgador do Tribunal de Ética e Disciplina da OAB/DF. Destaca-se pela grande experiência nos ramos Imobiliários e Condominiais.",
  },
  {
    name: "Nathália Baliza Flores",
    profission: "Condominial",
    img: "/nathalia.png",
    content:
      "Pós-graduada em Processo Civil e em Direito Imobiliário. Suas qualificações possibilitaram uma ótima atuação como Síndica. Destaca-se pela experiência em contencioso judicial cível e no ramo Condominial.",
  },
  {
    name: "Katiane da Silva Souza",
    profission: "Previdenciário",
    img: "/katiane.png",
    content:
      "Pós-graduada em Direito da Seguridade Social Previdenciária e Prática Previdenciária, destaca-se na agilidade em resolver conflitos e atendimento humanizado. Possui grande experiência também na área Cível, trabalhou na Defensoria Pública do Distrito Federal e da União.",
  },
  {
    name: "Stêvão Randolfo Costa e Silva",
    profission: "Terceiro Setor",
    img: "/stevao.png",
    content:
      "Possui mais de dez anos de experiência com organização e projetos sociais. Instituiu diversas associações, elabora atos constitutivos personalizados com grande capacidade técnica e de comunicação. Boa parte de seu trabalho se dá com as obras sociais da Arquidiocese de Brasília.",
  },
  {
    name: "Josiana Gonzaga de Carvalho",
    profission: "Agrário",
    img: "/josiana.png",
    content:
      "Possui vasta experiência no âmbito do Direito Agrário, com especialização em Direito Público. Conta com forte atuação em Cortes Superiores e atende diversas instituições com e sem fins lucrativos.",
  },
  {
    name: "Juliana Lauermann",
    profission: "Criminal",
    img: "/juliana.png",
    content:
      "Destaca-se pela atuação diligente na busca do cumprimento das garantias e dos direitos do ser humano. Possui vasta experiência na área Penal, com atuação nos Tribunais estaduais e nas Cortes Superiores.",
  },
];

const Parceiros = () => {
  return (
    <section
      className="bg-black px-12 md:px-[5%] lg:px-[10%] 2xl:px-[20%] py-20 flex flex-col items-center lg:items-start"
      id="parceiros"
    >
      <h2 className="text-white text-4xl md:text-5xl 2xl:text-7xl border-b-4 border-primary mb-6">
        Parceiros
      </h2>

      <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-8">
        {parceiros.map((parceiro, index) => (
          <Parceiro
            key={index}
            name={parceiro.name}
            profission={parceiro.profission}
            img={parceiro.img}
            content={parceiro.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Parceiros;
