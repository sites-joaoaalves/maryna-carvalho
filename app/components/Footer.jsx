import React from "react";
import ContactIcon from "./ContactIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] pt-48 pb-20 flex bg-white items-start justify-between"
      id="footer"
    >
      <div className="flex flex-col space-y-8">
        <img src="/logo-preto.png" alt="Logo Maryna Carvalho" />
        <span className="font-roboto font-semibold">
          CNPJ:49.984.613/0001-08
        </span>
      </div>
      <div className="flex flex-col w-[30%]">
        <h4 className="font-didone font-normal text-4xl mb-4">Contato</h4>
        <span className="font-roboto text-lg font-light">
          +55 (61) 9.9329-0307
        </span>
        <span className="font-roboto text-lg font-light">
          marynacndsantos@gmail.com
        </span>

        <h4 className="font-didone font-normal text-4xl mt-8 mb-4">Endereço</h4>
        <span className="font-roboto text-lg font-light">
          SHS, Quadra 06, Lote 01, Bloco “E”, Sala 319, Asa Sul, Brasília DF,
          CEP70322-915
        </span>
      </div>
      <div className="flex flex-col space-y-8">
        <h4 className="font-didone font-normal text-4xl">Redes Sociais</h4>
        <div className="flex items-center justify-between space-x-12">
          <ContactIcon
            href="https://instagram.com"
            img_src="/instagram.png"
            alt="Logo do instagram"
          />
          <ContactIcon
            href="https://web.whatsapp.com"
            img_src="/whatsapp.png"
            alt="Logo do Whatsapp"
          />
          <ContactIcon
            href="mailto:maryna@marynacarvalho.com.br"
            img_src="/mail.png"
            alt="Logo de Email"
            target={false}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;