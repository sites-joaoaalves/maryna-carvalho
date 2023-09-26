import React from "react";
import Input from "./Input";

const Contato = () => {
  return (
    <section
      className="bg-[#2E2E2E] max-h-[730px] overflow-visible flex flex-col items-start space-y-4 px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] pt-[3%]"
      id="contato"
    >
      <h4 className="text-white text-lg lg:text-xl xl:text-2xl border-b-4 border-white">
        Tem alguma dúvida?
      </h4>
      <h2 className="text-white text-2xl lg:text-4xl xl:text-4xl md:text-5xl 2xl:text-7xl font-didone !mb-20">
        Contato
      </h2>
      <div className="flex items-center justify-center w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl p-0">
        <div className="flex flex-col items-center justify-between bg-bkg-primary h-[550px] rounded-l-3xl px-[5%] py-[5%] w-[35%]">
          <span className="w-[80%] text-white text-lg font-roboto font-light">
            Estamos à sua disposição para esclarecer dúvidas e superar desafios.
          </span>
          <span className="w-[80%] text-white text-lg font-roboto font-lighter mt-12">
            Entre em contato via Whatsapp ou e-mail
          </span>
          <a href="#contact-form" className="text-center rounded rounded-lg text-black font-bold font-roboto bg-primary w-60 p-5 cursor-pointer mt-auto hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out">
            ENTRAR EM CONTATO
          </a>
        </div>
        <form id="contact-form" className="flex flex-col items-start justify-between bg-bkg-secondary h-[550px] rounded-r-3xl w-[65%] px-[5%] py-[5%]">
          <div className="flex items-center space-x-8 w-full">
            <Input
              label="Nome"
              type="text"
              placeholder="Seu nome"
            />
            <Input
              label="Telefone"
              type="text"
              placeholder="(61) 99999 9999"
            />
          </div>
          <Input
            label="Email"
            type="email"
            placeholder="contato@email.com"
          />
          <label htmlFor="message" className="font-roboto text-black">Mensagem</label>
          <textarea placeholder="O que você precisa?" name="message" className="textarea textarea-bordered textarea-lg w-full bg-white" ></textarea>
          <button className="rounded rounded-lg text-black font-bold font-roboto bg-primary w-60 h-14 mt-auto hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out self-end">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
