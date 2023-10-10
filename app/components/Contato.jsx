"use client";
import React, { useRef, useState } from "react";
import Input from "./Input";
import { Resend } from "resend";
const resend = new Resend("re_8xBU8N8q_9YNUZ7aEjrn83pJDRAQgUCJB");

const Contato = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !phone || !message) {
      setError(true);
      return;
    }
    // sends email to Maryna using Resend on /api route
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, phone, message }),
    });

    setError(false);
  };

  const handleContactFocus = () => {
    const contact = document.getElementById("contact-form");
    contact.scrollIntoView({ behavior: "smooth" });
    nameRef.current.focus();
  };

  return (
    <section
      className="bg-[#2E2E2E] max-h-[730px] overflow-visible flex flex-col items-start space-y-4 pt-12 px-6 md:px-[5%] lg:px-[10%] 2xl:px-[20%] lg:pt-[3%]"
      id="contato"
    >
      <h2 className="text-white text-xl md:text-2xl xl:text-2xl border-b-4 border-white">
        Tem alguma dúvida?
      </h2>
      <h2 className="text-white text-4xl lg:text-6xl xl:text-7xl md:text-5xl 2xl:text-7xl font-didone lg:!mb-20">
        Contato
      </h2>
      <div className="flex items-center w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-3xl p-0">
        <div className="lg:flex-col hidden lg:flex items-center justify-between  bg-bkg-primary h-[620px] rounded-l-3xl p-[5%] w-[35%]">
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
          className="flex flex-col items-start justify-between bg-bkg-secondary h-[700px] lg:h-[620px] rounded-3xl lg:rounded-l-none lg:rounded-r-3xl w-full lg:w-[65%] lg:p-[5%] p-6 z-20"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold text-black self-center mb-2 hidden md:block">
            Contato
          </h1>
          {error && (
            <span className="text-center font-roboto text-xl font-bold text-white self-center p-2 bg-red-500 rounded-xl">
              Preencha todos os campos!
            </span>
          )}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-8 w-full">
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
            label="E-mail"
            type="email"
            placeholder="contato@email.com"
          />
          <label className="label">
            <span className="label-text font-roboto text-black font-bold">
              Mensagem
            </span>
          </label>
          <textarea
            required
            ref={messageRef}
            placeholder="O que você precisa?"
            name="message"
            className="textarea textarea-bordered textarea-lg px-4 py-2 w-full bg-white border-zinc-400 border-2 h-[300px] lg:h-[200px] mb-4 text-black font-regular text-sm  lg:text-md"
          ></textarea>
          <button className="rounded rounded-lg text-black font-bold font-roboto bg-primary w-full lg:w-60 h-14 mt-auto hover:bg-secondary hover:text-white hover:font-bolder transition duration-150 ease-out self-end">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
