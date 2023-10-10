import React from "react";
import ContactIcon from "./ContactIcon";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="px-8 md:px-[5%] lg:px-[10%] 2xl:px-[20%] pt-36 lg:pt-56 pb-20 flex flex-col lg:flex-row bg-white items-center lg:items-start justify-between"
      id="footer"
    >
      <div className="flex flex-col items-center space-y-8 w-full lg:w-1/3">
        <Image
          width={260}
          height={131}
          loading="lazy"
          src="/logo-preto.png"
          alt="Logo Maryna Carvalho"
        />
        <span className="text-black font-roboto font-semibold">
          CNPJ:49.984.613/0001-08
        </span>
      </div>
      <div className="flex w-full flex-col items-center lg:items-center lg:justify-center justify-start lg:w-1/3 my-12 lg:my-0">
        <h2 className="text-black font-didone font-normal text-4xl sm:text-5xl lg:text-4xl mb-8 self-center">
          Contato
        </h2>
        <span className="text-black font-roboto font-bold text-sm sm:text-md sm:font-regular lg:text-lg text-start">
          (61) 9.9251-6468
        </span>
        <span className="text-black font-roboto font-bold text-sm sm:text-md sm:font-regular lg:text-lg ">
          marynacndsantos@gmail.com
        </span>
      </div>
      <div className="flex flex-col space-y-8 items-center">
        <h2 className="text-black font-didone font-normal text-4xl sm:text-5xl lg:text-4xl">
          Redes Sociais
        </h2>
        <div className="flex items-center justify-between space-x-12">
          <ContactIcon
            href="https://www.instagram.com/marynasantosc"
            img_src="/instagram.png"
            alt="Logo do instagram"
          />
          <ContactIcon
            href="https://wa.me/5561993290307"
            img_src="/whatsapp.png"
            alt="Logo do Whatsapp"
          />
          <ContactIcon
            href="mailto:marynacndsantos@gmail.com"
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
