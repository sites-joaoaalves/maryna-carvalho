"use client";
import React, { useRef } from "react";
import Input from "./Input";
import { Resend } from "resend";
const resend = new Resend("re_8xBU8N8q_9YNUZ7aEjrn83pJDRAQgUCJB");

const Contato = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    // sends email to Maryna using Resend on /api route
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, message }),
    });
  };

  const handleContactFocus = () => {
    const contact = document.getElementById("contact-form");
    contact.scrollIntoView({ behavior: "smooth" });
    nameRef.current.focus();
  };

  return (
    <section
      className="bg-[#2E2E2E] max-h-[730px] overflow-visible flex flex-col items-start space-y-4 px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] pt-[3%]"
      id="contato"
    >
      <h2 className="text-white text-lg lg:text-xl xl:text-2xl border-b-4 border-white">
        Tem alguma dúvida?
      </h2>
      <h2 className="text-white text-2xl lg:text-4xl xl:text-4xl md:text-5xl 2xl:text-7xl font-didone !mb-20">
        Contato
      </h2>
      <div className="flex items-center w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl p-0">
        <div className="lg:flex-col hidden lg:flex items-center justify-between  bg-bkg-primary h-[570px] rounded-l-3xl p-[5%] w-[35%]">
          <span className="w-[80%] mt-16 text-white text-lg xl:text-xl font-roboto font-light">
            Estamos à disposição para atender de forma personalizada.
          </span>
          <button
            onClick={handleContactFocus}
            className="text-center rounded rounded-lg text-black font-bold font-roboto bg-primary w-60 p-5 cursor-pointer hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out"
          >
            ENTRAR EM CONTATO
          </button>
        </div>
        <form
          id="contact-form"
          className="flex flex-col items-start justify-between bg-bkg-secondary h-[570px] rounded-3xl lg:rounded-l-none lg:rounded-r-3xl w-full lg:w-[65%] px-[5%] py-[5%]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold text-black self-center mb-4">
            Contato
          </h1>
          <div className="flex items-center space-x-8 w-full">
            <Input
              inputRef={nameRef}
              label="Nome"
              type="text"
              placeholder="Seu nome"
            />
            <Input
              inputRef={phoneRef}
              label="Telefone"
              type="text"
              placeholder="(61) 99999 9999"
            />
          </div>
          <Input
            inputRef={emailRef}
            label="Email"
            type="email"
            placeholder="contato@email.com"
          />
          <label htmlFor="message" className="font-roboto text-black font-bold">
            Mensagem
          </label>
          <textarea
            ref={messageRef}
            placeholder="O que você precisa?"
            name="message"
            className="textarea textarea-bordered textarea-lg w-full bg-white border-zinc-400 border-2"
          ></textarea>
          <button className="rounded rounded-lg text-black font-bold font-roboto bg-primary w-60 h-14 mt-auto hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out self-end">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
